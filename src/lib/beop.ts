/**
 * Shared Collective Audience widget SDK bootstrap.
 *
 * The SDK is a small loader that pulls the widget app from CA's CDN and, once
 * ready, calls `window.beOpAsyncInit`. We init it once with the account, then
 * any `<div class="BeOpWidget" …>` on the page is rendered on `watch()`.
 *
 * Demo slots use `data-slot-type="demo"` + `data-demo-content-id`; standard
 * embeds (e.g. the newsletter forms) use `data-content` + `data-name="embed-…"`.
 */

const SDK_SRC = "https://widget.collectiveaudience.co/sdk.js";
export const BEOP_ACCOUNT = "5be04b9546e0fb00011f9fa7";

const INTERACTION_EVENTS: Record<string, true> = {
  vote: true, complete: true, signup: true, login: true, sharing: true, comment: true,
};

interface BeOpSDK {
  init(o: { account: string }): void;
  watch(): void;
  onPressClose(cb: (name: string) => void, delay?: number): void;
  subscribeToWidgetEvents(cb: (event: string, name: string) => void): void;
}
declare global {
  interface Window {
    BeOpSDK?: BeOpSDK;
    beOpAsyncInit?: () => void;
  }
}

// Handlers of the currently mounted demo grid — the SDK is initialised once and
// forwards its events (close / interaction) to whichever consumer is on screen.
export const beopHandlers: {
  onClose?: (name: string) => void;
  onInteract?: (name: string) => void;
} = {};

let bootstrapped = false;

export function findSlot(name: string) {
  return document.querySelector<HTMLElement>(`[data-name="${name}"]`);
}
export function expandSlot(name: string) {
  const s = findSlot(name);
  if (s && !s.hasAttribute("data-expand")) s.setAttribute("data-expand", "true");
}
export function collapseSlot(name: string) {
  findSlot(name)?.removeAttribute("data-expand");
}

/** Re-scan the DOM for new widgets. Safe to call repeatedly (e.g. on navigation). */
export function watchBeOp() {
  if (typeof window !== "undefined") window.BeOpSDK?.watch();
}

/** Load + initialise the SDK once, then render any widgets present. Idempotent. */
export function bootstrapBeOp() {
  if (typeof window === "undefined") return;
  if (bootstrapped && window.BeOpSDK) {
    window.BeOpSDK.watch();
    return;
  }
  window.beOpAsyncInit = function () {
    const SDK = window.BeOpSDK;
    if (!SDK) return;
    if (bootstrapped) {
      SDK.watch();
      return;
    }
    SDK.init({ account: BEOP_ACCOUNT });
    SDK.onPressClose((name) => beopHandlers.onClose?.(name), 1000);
    SDK.subscribeToWidgetEvents((event, name) => {
      if (INTERACTION_EVENTS[event]) beopHandlers.onInteract?.(name);
    });
    SDK.watch();
    bootstrapped = true;
  };
  // Script already present and SDK ready → fire init directly.
  if (window.BeOpSDK) {
    window.beOpAsyncInit();
    return;
  }
  if (!document.querySelector(`script[src="${SDK_SRC}"]`)) {
    const s = document.createElement("script");
    s.async = true;
    s.src = SDK_SRC;
    document.head.appendChild(s);
  }
}

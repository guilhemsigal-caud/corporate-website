import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DraftModeBanner } from "@/components/DraftModeBanner";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Collective Audience: The Open Web Platform",
  description:
    "Collective Audience unifies media monetization, audience data, and advertising into one open platform, cookieless, scalable, and built for the open web.",
  openGraph: {
    title: "Collective Audience: The Open Web Platform",
    description: "Unify media monetization, audience data, and advertising into one open platform.",
    type: "website",
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ca-dark text-ca-text">
        <LanguageProvider>
          <DraftModeBanner />
          <Header />
          <div className="flex-1 pt-16">{children}</div>
          <Footer />
        </LanguageProvider>
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

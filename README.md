# Collective Audience — Website

This repository contains the Collective Audience marketing website, built with **Next.js** (front-end) and **Sanity** (CMS). This guide is for the team to understand how to update content and evolve the site without touching the code.

---

## Architecture Overview

```
corporate-website/
├── (root)    → Next.js application (the public website)
└── studio/   → Sanity Studio (the CMS admin interface)
```

The public website fetches its content from Sanity via an API. Editing an article or a team member in Studio → the site updates automatically within a minute.

---

## 1. Running Locally

### Prerequisites
- Node.js 18+
- Be invited to the Sanity project — ask Guilhem to add you on [sanity.io/manage](https://sanity.io/manage)
- Get the `.env.local` file from Guilhem (contains the API keys, not stored in the repo)

### Clone the repo

```bash
git clone https://github.com/BeOpinion/corporate-website.git
cd corporate-website
```

### Start the website (Next.js)

```bash
# Place the .env.local file at the root of corporate-website/ first
npm install        # only once
npm run dev        # → http://localhost:3000
```

### Start Sanity Studio

```bash
cd studio
npm install        # only once
npm run dev        # → http://localhost:3333
```

> Both must be running at the same time to use the Preview feature (see section 4).

---

## 2. Sanity Studio — Overview

Sanity Studio is the content management interface. It is accessible at:

**https://collectiveaudience.sanity.studio** *(or locally: http://localhost:3333)*

Log in with your Sanity account (`@collectiveaudience.co` email).

### Sidebar tabs

| Tab | Content | Visible to |
|---|---|---|
| **Blog** | Blog articles | Marketing + Admins |
| **Gallery** | Product sheets / use cases | Marketing + Admins |
| **Pages (CMS)** | Generic editable pages | Product + Admins |
| **Team** | Team members (About page) | Everyone |

---

## 3. What Can Be Edited in Sanity

### Blog (`/blog`)

Each article contains:
- **Title (EN)** — article title in English (required)
- **Slug** — the article URL, auto-generated from the title (e.g. `our-vision-2025`)
- **Published at** — publication date (controls display order)
- **Author** — author name
- **Cover image** — cover image
- **Excerpt** — short summary shown in the article list
- **Body** — full content (rich text editor: headings, paragraphs, images, links…)
- **Tags** — keywords (e.g. "adtech", "cookieless")

**Create an article**: click `Blog` → `+ New Blog post` → fill in the fields → `Publish`.

**Edit an article**: click the article → edit fields → `Publish`.

> ⚠️ As long as an article has *Draft* status, it is not visible on the public site but can be previewed (see section 4).

---

### Gallery (`/gallery`)

The gallery showcases formats, industries, innovations and technologies. Each item contains:
- **Name** — name of the format / use case (required)
- **Slug** — auto-generated URL
- **Category** — `Formats` / `Industries` / `Innovations` / `Technologies`
- **Description (EN)** — presentation text in English
- **Accent Color** — card accent color (hex format, e.g. `#07e2dc`)
- **Tags** — labels shown on the card
- **KPIs (EN)** — key metrics (e.g. `+40% CTR`), displayed prominently
- **Demos** — links to live demos or embeds
- **French Version** — French translation of the description and KPIs

**Create an item**: `Gallery` → `+ New Gallery Item` → fill in → `Publish`.

---

### Team (page `/about`)

Each member displayed on the About Us page is managed here:
- **Name** — first and last name (required)
- **Job Title** — job title (required)
- **Group** — `Global team` / `Europe team` / `US team` (determines which section they appear in)
- **Order** — position within the group (1 = first)
- **Photo** — profile photo (square format recommended, displayed as a grayscale circle)
- **LinkedIn URL** — link to LinkedIn profile

**Add a member**: `Team` → `+ New Team Member` → fill in → `Publish`.

**Change order**: update the `Order` field of the relevant member → `Publish`.

**Upload a photo**: open the member → click the Photo field → `Upload` → choose the file.

> If no photo is uploaded, the member's initials are displayed instead.

---

### Pages CMS (`/pages-cms/[slug]`)

Fully editable generic pages (rich text, sections, etc.). Reserved for the Product team.

---

## 4. Preview Feature (Draft Mode)

Preview allows you to **see what content looks like before publishing**, directly on the site.

### How to enable it

1. In Sanity Studio (localhost:3333), click the **Presentation** icon in the left sidebar (screen-shaped icon).
2. A panel opens showing the live site on the left and editable fields on the right.
3. Any change is instantly visible in the preview without needing to publish.

> ⚠️ The Next.js site must be running locally (`npm run dev` inside `site-caud/`) for Preview to work.

### How to disable draft mode

Go to `http://localhost:3000/api/draft-mode/disable` — the orange "Draft mode" banner at the top of the site will disappear.

---

## 5. Roles & Permissions

Team members see different tabs depending on their role, configured in `studio-collective-audience/sanity.config.ts`:

```
MARKETING_EMAILS → sees: Blog + Gallery
PRODUCT_EMAILS   → sees: Pages CMS
(not listed)     → sees: everything (safe default for new members)
```

**To restrict a new member's access**: add their email to `MARKETING_EMAILS` or `PRODUCT_EMAILS` in `sanity.config.ts`, then push to GitHub.

**The Team tab** is visible to everyone, regardless of which list they are in.

---

## 6. Deployment — How to Update the Site

### Content update (Sanity)

No action required. Publishing a document in Studio → the site revalidates automatically within **60 seconds** (Next.js cache).

### Code update (Next.js)

1. Edit the code in `site-caud/`
2. Push to GitHub: `git add . && git commit -m "description" && git push`
3. The deployment triggers automatically on Vercel.

### Studio update (Sanity)

If changes were made in `studio-collective-audience/` (new field, new document type, role change…):

```bash
cd studio-collective-audience
npm run deploy
```

This redeploys the Studio to production at `collectiveaudience.sanity.studio`.

---

## 7. Environment Variables

The `.env.local` file inside `site-caud/` contains the API keys. **It must never be committed to GitHub** (already protected by `.gitignore`).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID (`2svafw8h`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset (`production`) |
| `SANITY_API_TOKEN` | Sanity read token (required for server-side queries) |
| `SANITY_STUDIO_PREVIEW_URL` | Site URL for Preview (default: `http://localhost:3000`) |

If someone clones the repo for the first time, ask Guilhem for these values.

---

## 8. Site Pages

| URL | Description |
|---|---|
| `/` | Home page |
| `/about` | About us + team |
| `/blog` | Article list |
| `/blog/[slug]` | Individual article |
| `/gallery` | Formats / industries gallery |
| `/gallery/[slug]` | Individual gallery item |
| `/contact` | HubSpot contact form |
| `/platform` | Platform page |
| `/publishers` | Publishers page |
| `/advertisers` | Advertisers page |
| `/careers` | Careers page |
| `/resources` | Resources |
| `/legal` | Legal notices |
| `/pages-cms/[slug]` | Dynamic CMS pages |

---

## 9. Key Points to Remember

- **Never commit `.env.local`** — it contains private API keys.
- **Always publish in Sanity** for changes to appear on the public site (drafts are only visible in Preview).
- **Cache clears automatically** every 60 seconds — no need to restart the site after publishing.
- **Gallery and Blog are bilingual** (EN/FR) — French fields are in a dedicated section of each document.
- **Team member order** is controlled by the `Order` field (1 = first in the group).
- For any technical issue, contact **Guilhem Sigal** (guilhem.sigal@collectiveaudience.co).

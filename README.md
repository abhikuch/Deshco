# Deshco Holiday Homes — Astro + Sanity + Resend

Modern rebuild of [deshco.ae](https://deshco.ae/) migrated from WordPress to Astro, Sanity CMS, and Resend email.

## Stack

- **Frontend:** Astro 6 + Tailwind CSS 4 + React (interactive components)
- **CMS:** Sanity Studio at `/admin`
- **Email:** Resend API for contact form submissions
- **Deploy:** Vercel (serverless API route for contact form)

## Project Structure

```
deshco/
├── scraped/           # Original WordPress content & assets inventory
│   ├── assets/        # Downloaded images from deshco.ae
│   └── CONTENT_INVENTORY.md
└── web/               # Astro application
    ├── public/images/ # Site images (copied from scraped assets)
    ├── src/
    │   ├── components/
    │   ├── data/      # Static content (fallback + seed reference)
    │   ├── pages/
    │   └── sanity/    # Sanity schema types
    ├── sanity.config.ts
    └── .env.example
```

## Quick Start

```bash
cd web
cp .env.example .env
# Fill in Sanity + Resend credentials

npm install
npm run dev
```

- Site: http://localhost:4321
- Sanity Studio: http://localhost:4321/admin

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `PUBLIC_SANITY_DATASET` | Sanity dataset (default: `production`) |
| `SANITY_API_TOKEN` | Write token for content seeding |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Sender address (e.g. `Deshco <noreply@deshco.ae>`) |
| `RESEND_TO_EMAIL` | Recipient for enquiries (default: `homes@deshco.ae`) |

## Sanity Setup

1. Create a project at [sanity.io/manage](https://sanity.io/manage)
2. Add project ID and dataset to `.env`
3. Run `npm run dev` and open `/admin` to manage content
4. Content types: Site Settings, Pages, Services, Locations, Steps, Founders

Static content in `src/data/` serves as fallback until Sanity is populated.

## Deploy to Vercel

Vercel is wired for Git deploys from the repo root. The Astro app lives in `web/`; root `vercel.json` and `package.json` handle install, build, and output routing.

**Required environment variables** (Vercel dashboard → Project → Settings → Environment Variables):

| Variable | Environments |
|----------|--------------|
| `PUBLIC_SANITY_PROJECT_ID` | Production, Preview |
| `PUBLIC_SANITY_DATASET` | Production, Preview |
| `RESEND_API_KEY` | Production, Preview |
| `RESEND_FROM_EMAIL` | Production, Preview |
| `RESEND_TO_EMAIL` | Production, Preview |

Push to `main` to trigger a production deploy. Verify your domain in Resend before sending from `@deshco.ae`.

## Design

Premium Dubai hospitality aesthetic:
- **Typography:** Cormorant Garamond (display) + DM Sans (body)
- **Palette:** Deep ink, warm cream, gold accents
- **Layout:** Full-bleed hero, cardless sections, scroll-driven motion

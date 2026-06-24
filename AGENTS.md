## Learned User Preferences

- The site must read as luxury/premium: avoid oversized logos, weak contrast, and generic template styling; prefer understated typography over large image logos.
- Manage deployment from Git and support Vercel's Git-based deploy workflow rather than manual-only deploys.
- Keep the homepage owner-first for property owners, not guest booking/marketplace language (no fake inventory, search widgets, or "browse homes" copy).
- Position Deshco as a boutique startup versus large Dubai operators (e.g. Deluxe Homes): founder-led trust, transparency, and direct founder access over scale theater.
- Primary conversion CTAs should be "Get a free revenue estimate" and WhatsApp, not vague "Let's Connect" wording.
- Keep the "Our Services" section matching the original WordPress site: six services in a centered 3×2 grid with WordPress-scraped icons and original titles/descriptions.
- Include founder photos on the About page and a founders strip on the homepage.
- Footer attribution: "built with ❤️ by futurebits" linked to https://futurebits.tech.
- Treat mobile screenshots as first-class design feedback: tune mobile and desktop independently, keeping CTAs visible, compact, equal-sized where paired, and aligned with sticky header/menu behavior.

## Learned Workspace Facts

- Deshco Holiday Homes is a Dubai holiday home management company; production domain is deshco.ae, currently deployed on Vercel.
- The site was migrated from WordPress (Divi) to Astro 6 + Tailwind 4 + React in `web/`, with Sanity CMS at `/admin` and Resend for contact-form email.
- GitHub repo is `abhikuch/Deshco` under Abhimanyu Kucheria's account; Vercel deploys from the repo root with `web/` as the app directory.
- Original WordPress content and assets live under `scraped/`; service icons are sourced from `deshco.ae/wp-content/uploads/2026/02/`.
- Founders are Anish Deshpande and Manisha Garje; primary contact is homes@deshco.ae and +971 585190982.
- Design system uses Cormorant Garamond (display), DM Sans (body), brand green `#083F30`, cream, and brand gold `#E4BC66`.
- Header/footer branding uses WordPress-derived image assets in `web/public/images/`, especially `logo-header.png` for the transparent gold Deshco Holiday Homes mark.
- Homepage structure emphasizes trust strip, 3-step process, Our Services grid, areas served, Why Deshco, founders, and contact/revenue estimate form.

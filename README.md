# Sakthi Sudar Foundation — Website

A production-ready website for Sakthi Sudar Foundation, a public charitable
trust in Tamil Nadu, built with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS, Framer Motion, shadcn/ui-style primitives and
Lucide icons.

**No invented facts about the organization appear anywhere in this
codebase.** Every real-world detail (phone, email, address, bank/UPI
details, trustee names, statistics, history, news, events) is either a
clearly bracketed placeholder (e.g. `[PHONE NUMBER]`) or an empty data
array that renders an honest "coming soon" state until you add real
content.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in what you have; leave the rest blank
npm run dev
```

Open http://localhost:3000.

## Where to put real information

All editable content lives in `/data/*.ts`. You should not need to touch
component code to update any of the following:

| What | File | Fields |
|---|---|---|
| **Bank details** | `data/donation.ts` | `bank.accountName`, `bank.bankName`, `bank.branch`, `bank.accountNumber`, `bank.ifsc` |
| **UPI ID** | `data/donation.ts` | `upi.id` |
| **UPI QR code image** | — | drop the real file at `public/images/donation/upi-qr.png` (path already wired up in `data/donation.ts`) |
| **80G tax-deduction status** | `data/donation.ts` + `data/site.ts` | set `taxDeduction.section80GConfirmed: true` once confirmed, and `site.eightyG` / `site.twelveA` to the real numbers |
| **Official email** | `data/contact.ts` | `email` (this is just the *displayed* email; see below for the contact-form's *sending* address) |
| **Phone / address / office hours** | `data/contact.ts` | `phone`, `address`, `officeHours` |
| **Map location** | `data/contact.ts` (or env vars) | `mapLocation.lat` / `.lng`, or set `MAP_LATITUDE` / `MAP_LONGITUDE` in `.env.local` (env vars take priority) |
| **Trustee information** | `data/team.ts` | add/edit entries: `name`, `role`, `bio`, `image` |
| **Trustee photos** | — | drop files at `public/images/team/...` matching the `image` path in `data/team.ts` |
| **Registration numbers** | `data/site.ts` | `registrationNumber`, `eightyG`, `twelveA` |
| **Social media URLs** | `data/site.ts` | `social.facebook` / `.instagram` / `.youtube` / `.twitter` — a placeholder hides that icon in the footer automatically |
| **Confirmed partner organizations** | `data/site.ts` | `partners: []` — add a name only once a real relationship exists; the homepage partner strip stays hidden while empty |
| **Programme photos** | — | drop files at the paths already referenced in `data/programs.ts` (e.g. `public/images/education/computer-education.jpg`) |
| **Gallery photos** | `data/gallery.ts` | add/edit entries: `category`, `caption`, `image` (path under `public/images/gallery/`) |
| **News / announcements** | `data/news.ts` | starts empty (shows "No announcements yet"); add real entries as they're published |
| **Upcoming events** | `data/events.ts` | starts empty; add real entries once scheduled |
| **Active fundraising projects** | `data/projects.ts` | starts empty; add `{ title, raised, goal }` once a real project is live |
| **Hero photograph** | — | drop a file at `public/images/hero/trust-community.jpg` |

Every image slot above uses `<ImageWithFallback>` (`components/shared/image-with-fallback.tsx`),
so until a real file exists at the given path, it shows an elegant
"Photo coming soon" placeholder instead of a broken image — nothing
breaks if you deploy before photos are ready.

## Environment variables required

Copy `.env.example` to `.env.local` and fill in what you have:

```
CONTACT_EMAIL=              # where contact-form messages are sent
RESEND_API_KEY=              # used by both the contact form and newsletter
NEWSLETTER_AUDIENCE_ID=      # Resend audience ID for newsletter subscribers
MAP_LATITUDE=                # optional — overrides data/contact.ts
MAP_LONGITUDE=               # optional — overrides data/contact.ts
```

The site builds and runs correctly with all of these blank. The contact
form and newsletter signup will respond with a clear "not configured
yet" message instead of pretending to succeed, and the map shows a
"Location map coming soon" placeholder.

### Contact-form email setup

1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. Set `RESEND_API_KEY` and `CONTACT_EMAIL` in your deployment's environment variables (e.g. Vercel → Project → Settings → Environment Variables).
3. The form posts to `app/api/contact/route.ts`, which runs only on the server — the API key is never sent to the browser.
4. By default it sends from Resend's shared `onboarding@resend.dev` address. Once you verify your own domain in Resend, update the `from` address in `lib/email.ts`.

### Newsletter setup

1. In Resend, create an **Audience** and copy its ID into `NEWSLETTER_AUDIENCE_ID`.
2. Uses the same `RESEND_API_KEY`.
3. Posts to `app/api/newsletter/route.ts` (server-only).

## Project structure

```
app/                  Route segments (App Router)
  about/ objectives/ programs/ projects/ gallery/ news/
  donate/ volunteer/ team/ contact/
  api/contact/route.ts       Server-only contact form handler
  api/newsletter/route.ts    Server-only newsletter signup handler
  layout.tsx  page.tsx  globals.css  sitemap.ts  robots.ts

data/                  ALL editable organization content — see table above
  site.ts  contact.ts  donation.ts  team.ts  programs.ts
  gallery.ts  news.ts  events.ts  projects.ts  objectives.ts  faq.ts

components/
  layout/    Navbar (scroll-aware light/dark), Footer
  home/      Hero, impact dashboard, featured programs, events,
             gallery preview, partner strip, CTA banners
  shared/    Reveal/RevealStagger, SectionHeading, ImageWithFallback,
             Lightbox (keyboard + swipe), CopyButton, NewsletterForm,
             FaqAccordion, KolamPattern (signature motif), BackToTop,
             LoadingScreen, DonationProgress
  about/ objectives/ programs/ team/ news/ gallery/
  donate/ volunteer/ contact/   Page-specific components
  ui/        Button (ripple), Card, Accordion, Skeleton

lib/
  email.ts   Resend wrapper — fails gracefully without an API key
  utils.ts   cn() class merger, formatNumber()

hooks/  use-scroll-direction.ts  use-count-up.ts  use-mouse-parallax.ts
types/index.ts   Shared TypeScript interfaces
```

## Design system

- **Colors**: deep blue `#12315C`, emerald `#1B6B4A`, gold `#C9962C`,
  warm off-white background `#FAF8F3` — `tailwind.config.ts`.
- **Type**: Fraunces (display) + Inter (body) + Noto Sans Tamil, via
  `next/font/google` in `app/layout.tsx`.
- **Signature element**: a generative kolam (Tamil threshold-art)
  SVG pattern (`components/shared/kolam-svg.tsx`).

## Before deploying

- [ ] Replace every placeholder in `data/donation.ts` and `data/contact.ts`
- [ ] Add real trustee entries to `data/team.ts`
- [ ] Add real photographs under `public/images/...` (paths listed above)
- [ ] Set `CONTACT_EMAIL`, `RESEND_API_KEY`, `NEWSLETTER_AUDIENCE_ID` in your deploy environment
- [ ] Set `MAP_LATITUDE` / `MAP_LONGITUDE` (or edit `data/contact.ts`)
- [ ] Confirm 80G/12A status before flipping `taxDeduction.section80GConfirmed` to `true`
- [ ] Add real social media URLs to `data/site.ts` once accounts exist
- [ ] Run `npm run build` once more after adding real content

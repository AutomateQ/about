```
    _         _                       _       ___
   / \  _   _| |_ ___  _ __ ___   __| |_   _/ _ \
  / _ \| | | | __/ _ \| '_ ` _ \ / _` | | | | | |
 / ___ \ |_| | || (_) | | | | | | (_| | |_| | |_| |
/_/   \_\__,_|\__\___/|_| |_| |_|\__,_|\__, |\__\_\
                                        |___/
```

**AI & automation tools for everyone — no PhD required.**

Portfolio site for the AutomateQ brand. Built with Next.js 14, Tailwind CSS, and deployed to Vercel at [automateq.io](https://automateq.io).

---

## Quick start

```bash
git clone https://github.com/AutomateQ/about.git
cd about
npm install
cp .env.local.example .env.local   # fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Yes | Form ID from [formspree.io](https://formspree.io) |
| `GITHUB_TOKEN` | Recommended | GitHub PAT for pulling live repo data |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

Set these in `.env.local` for local dev, and in the Vercel dashboard for production.

---

## Project structure

```
app/              # Next.js App Router pages
components/       # Reusable React components
content/tools.ts  # Source of truth for all tool data — edit here to add tools
lib/github.ts     # GitHub API helper
public/           # Static assets
```

---

## Adding a new tool

1. Add an entry to `content/tools.ts`
2. Push to `main` — Vercel auto-deploys

---

## Deployment

Push to `main` → Vercel deploys within ~30 seconds.

Preview deployments are created automatically for every pull request branch.

Production domain: **automateq.io** (DNS pointed to Vercel)

---

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Forms:** Formspree
- **Analytics:** Vercel Analytics
- **Payments:** Gumroad (embedded buttons)

```
    _         _                       _       ___
   / \  _   _| |_ ___  _ __ ___   __| |_   _/ _ \
  / _ \| | | | __/ _ \| '_ ` _ \ / _` | | | | | |
 / ___ \ |_| | || (_) | | | | | | (_| | |_| | |_| |
/_/   \_\__,_|\__\___/|_| |_| |_|\__,_|\__, |\__\_\
                                        |___/
```

# CLAUDE.md — AutomateQ Portfolio Site

## Project overview
AutomateQ is an AI and automation tools brand. This repo is the portfolio
website hosted on Vercel, built with Next.js. It showcases free tools on
GitHub, links to paid tools on Gumroad, and drives consulting inquiries.

## Mission
Empower beginners and intermediate users to automate daily life using AI
tools — no PhD required.

## Tech stack
- Framework: Next.js 14 (App Router)
- Hosting: Vercel (auto-deploy from this repo)
- Styling: Tailwind CSS
- Domain: automateq.io (DNS pointed to Vercel)
- Payments: Gumroad or Lemon Squeezy (embedded buttons)
- Forms: Formspree (contact and consulting inquiry)
- Analytics: Vercel Analytics (built-in, free tier)

## Repo structure: https://github.com/AutomateQ/about
```
/automateQ/about/
├── app/
│   ├── page.tsx          # Homepage — hero, tools grid, CTA
│   ├── tools/            # Individual tool pages with live demos
│   ├── consulting/       # Consulting inquiry page with Calendly
│   ├── store/            # Paid tools — links to Gumroad
│   └── layout.tsx        # Global layout, nav, footer
├── components/
│   ├── Hero.tsx          # Brand intro, mission statement
│   ├── ToolCard.tsx      # Reusable card for each GitHub tool
│   ├── DemoEmbed.tsx     # Iframe embed for live tool demos
│   ├── ContactForm.tsx   # Formspree-powered contact form
│   └── CalendlyEmbed.tsx # Calendly booking embed
├── public/
│   └── og-image.png      # Social share preview image
├── lib/
│   └── github.ts         # GitHub API helper to pull repo data
└── content/
    └── tools.ts          # Manual list of featured tools + metadata
```

## Sub-projects under AutomateQ org
Each of these has its own repo under github.com/AutomateQ:
- **NetSend** — computer-to-computer notification/messaging system
- More sub-projects to be added as they are built

## Pages to build
### Homepage (/)
- Hero section: AutomateQ name, tagline, mission statement
- Featured tools grid: pull from content/tools.ts
- Three-tier CTA: Free tools → Paid tools → Consulting
- Social links: GitHub, YouTube, LinkedIn, Instagram

### Tools page (/tools)
- Grid of all free tools with description, GitHub link, demo link
- Each tool card shows: name, what it solves, who it's for, badge (Free/Paid)

### Individual tool page (/tools/[slug])
- Full description of the tool
- Live demo embed (iframe from GitHub Pages demo)
- GitHub repo link
- Upgrade CTA if a paid version exists on Gumroad

### Store page (/store)
- Paid scripts and tools
- Gumroad embedded product buttons
- Clear "what you get" description per product

### Consulting page (/consulting)
- Services offered: AI automation, manufacturing ops, workflow automation
- Calendly embed for discovery call booking
- Pricing tiers: discovery call (free), hourly, project-based

## Key design rules
- Mobile-first — most traffic will come from Instagram and YouTube links
- Fast load — no heavy animations, keep it under 2s load time
- Clear CTAs — every page has one primary action button
- Beginner-friendly copy — no jargon, plain English descriptions
- Dark mode support — must look good in both light and dark

## Deployment
1. Push to main branch on GitHub
2. Vercel auto-deploys within 30 seconds
3. Preview deployments on every PR branch
4. Production domain: automateq.io

## Environment variables (set in Vercel dashboard)
```
NEXT_PUBLIC_FORMSPREE_ID=     # Contact form endpoint
NEXT_PUBLIC_GA_ID=            # Google Analytics (optional)
GITHUB_TOKEN=                 # For pulling repo data via API
```

## GitHub API integration
Pull live repo data to keep tool cards up to date automatically:
```typescript
// lib/github.ts
export async function getOrgRepos() {
  const res = await fetch(
    'https://api.github.com/orgs/AutomateQ/repos',
    { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } }
  );
  return res.json();
}
```

## Social media links (update once handles confirmed)
- GitHub: github.com/AutomateQ
- YouTube: youtube.com/@AutomateQ
- Instagram: instagram.com/AutomateQ
- LinkedIn: linkedin.com/company/AutomateQ
- TikTok: tiktok.com/@AutomateQ

## Content update workflow
1. Build a new tool → create repo under github.com/AutomateQ
2. Add tool metadata to content/tools.ts
3. Push to main → Vercel deploys automatically
4. Post demo video on YouTube → link back to /tools/[slug]
5. Post 30-sec clip on Instagram/Shorts → link to YouTube

## Notes for Claude Code agent
- Always use App Router (not Pages Router)
- Use server components by default, client components only when needed
- Keep components small and reusable
- All copy must be beginner-friendly — avoid technical jargon in UI text
- Check mobile layout on every new component before committing
- Do not hardcode tool data — always pull from content/tools.ts
- Name is NOT confirmed yet — placeholder is AutomateQ, update
  globally once final name is locked in

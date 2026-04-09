# Orbit - Premium SaaS Landing Page

A cinematic, high-conversion SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion.

Designed to feel premium and memorable with layered depth, interactive motion, and production-ready performance.

## Highlights
- Cinematic dark visual system with ambient glow and depth layers
- Interactive 3D-style hero composition with parallax motion
- Premium reusable UI primitives: reveal, spotlight card, glow button, staggered text
- Fully responsive layout for desktop and mobile
- Accessibility-aware motion behavior with reduced-motion support
- Deployment-ready App Router setup with `robots.txt` and `sitemap.xml`

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

## Local Development
```bash
git clone https://github.com/harshxraj/saas-landing-nextjs.git
cd saas-landing-nextjs
npm install
npm run dev
```

Open http://localhost:3000

## Production Build
```bash
npm run lint
npm run build
npm run start
```

## Deploy ASAP

### Vercel (fastest)
1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Keep default settings (`next build`).
4. Deploy.

### Other Node hosts
Use:
- Build command: `npm run build`
- Start command: `npm run start`
- Node version: 18+

## Project Structure (main)
```text
src/
	app/
	components/
		animation/
		ui/
	hooks/
	sections/
```

## Status
- Lint: passing
- Production build: passing
- Ready to deploy



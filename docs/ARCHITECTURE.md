# Architecture Guide

Wellbee Wellness is a static marketing and booking front end built with React 18 and Vite.

## Stack

- React 18
- Vite 5
- Plain JSX
- Component-scoped CSS files
- `lucide-react` dependency available for icons
- Vercel static deployment

There is no backend, database, authentication layer, or TypeScript setup in the current codebase.

## Runtime Flow

```text
index.html
  -> src/main.jsx
    -> src/App.jsx
      -> Navbar
      -> Hero
      -> Services
      -> About
      -> Therapies
      -> Testimonials
      -> Booking
      -> Footer
```

The app mounts into:

```html
<div id="root"></div>
```

## Source Layout

The source files are intentionally flat under `src/`:

```text
src/
├── App.jsx
├── main.jsx
├── Navbar.jsx
├── Hero.jsx
├── Services.jsx
├── About.jsx
├── Therapies.jsx
├── Testimonials.jsx
├── Booking.jsx
├── Footer.jsx
├── useScrollReveal.js
├── global.css
├── animations.css
└── component CSS files
```

Imports should match that flat layout:

```js
import Navbar from './Navbar';
import { useScrollReveal } from './useScrollReveal';
import './global.css';
```

Do not use `./components/...`, `./hooks/...`, or `./styles/...` unless those folders are actually introduced.

## Component Responsibilities

- `Navbar.jsx`: top navigation and mobile menu behavior
- `Hero.jsx`: first-viewport marketing section
- `Services.jsx`: service cards
- `About.jsx`: clinic introduction and animated stats
- `Therapies.jsx`: tabbed therapy details
- `Testimonials.jsx`: testimonial carousel
- `Booking.jsx`: appointment request form and map/contact area
- `Footer.jsx`: footer links and hours
- `useScrollReveal.js`: IntersectionObserver-based reveal behavior

## Styling

Styles are split by component:

```text
Navbar.css
Hero.css
Services.css
About.css
Therapies.css
Testimonials.css
Booking.css
Footer.css
global.css
animations.css
```

`main.jsx` imports global styles once:

```js
import './global.css';
import './animations.css';
```

Component files import their own CSS files directly.

## Build and Deployment

Vite emits static assets into `dist/`:

```bash
npm run build
```

The Vite base path must default to `/` for Vercel:

```js
base: process.env.VITE_BASE_PATH || "/"
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for the current Vercel settings and the deployment recovery report.

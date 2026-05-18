# Deployment Guide

This project is a Vite + React static site deployed on Vercel.

## Current Vercel Projects

Two Vercel projects are connected to this repository:

| Vercel project | Root directory | Build command | Output directory | Status |
| --- | --- | --- | --- | --- |
| `wellbee-wellness` | `.` | `npm run build` | `dist` | Working |
| `wellbee-wellness.com` | `src` | `vite build` | `dist` | Working |

The repo supports both root layouts because the connected Vercel projects were configured differently.

## Required Files

Root deployment:

```text
index.html
package.json
package-lock.json
vite.config.js
src/
```

`src`-root deployment:

```text
src/index.html
src/package.json
src/package-lock.json
src/vite.config.js
src/vercel.json
```

## Vite Base Path

The Vite base path must default to `/` for Vercel domain deployments:

```js
base: process.env.VITE_BASE_PATH || "/"
```

Using `/wellbee-wellness` makes the deployed HTML request assets from:

```text
/wellbee-wellness/assets/...
```

Those files do not exist on Vercel domain deployments, which causes a blank page because the JavaScript bundle fails to load.

## Local Verification

Run these checks before pushing:

```bash
npm ci
npm run build
```

To verify the alternate `src`-root Vercel configuration:

```bash
cd src
npm ci
npm run build
```

## Vercel CLI With Edgenix Account

The Edgenix Vercel login is kept separate from any other local Vercel login:

```bash
VERCEL_CONFIG_DIR=~/.vercel-edgenix npx vercel whoami
```

Inspect deployments with:

```bash
VERCEL_CONFIG_DIR=~/.vercel-edgenix npx vercel inspect <deployment-id> --logs
```

The GitHub SSH remote uses a dedicated SSH host alias:

```text
git@github.com-edgenixtech:edgenixtech-llp/wellbee-wellness.git
```

## Errors Fixed During Deployment Recovery

### 1. Missing Vite entry file

Error:

```text
Could not resolve entry module "index.html".
```

Cause:
Vite requires an `index.html` entry file, but the repo did not have one at the root.

Fix:
Added root `index.html` with the `#root` mount and `/src/main.jsx` module script.

### 2. Broken import paths

Cause:
`src/main.jsx` and `src/App.jsx` referenced folders that did not exist:

```js
import './styles/global.css'
import Navbar from './components/Navbar'
import { useScrollReveal } from './hooks/useScrollReveal'
```

Fix:
Updated imports to match the flat `src/` layout:

```js
import './global.css'
import Navbar from './Navbar'
import { useScrollReveal } from './useScrollReveal'
```

### 3. Wrong Vercel root directory

Error:

```text
The specified Root Directory "frontend" does not exist.
```

Cause:
The `wellbee-wellness` Vercel project was configured to build from a nonexistent `frontend/` folder.

Fix:
Updated the Vercel project settings:

```text
Root Directory: .
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 4. `src`-root deployment was incomplete

Cause:
The `wellbee-wellness.com` Vercel project uses `src` as its root directory, but `src/` did not have a valid Vite entry and had an empty `src/vercel.json`.

Fix:
Added `src/index.html` and valid `src/vercel.json`.

### 5. Root lockfile missing from Git

Cause:
The root `package-lock.json` existed locally but was not committed.

Fix:
Committed the root lockfile and verified:

```bash
npm ci && npm run build
```

### 6. Blank deployed page

Cause:
The deployment succeeded, but Vite emitted asset URLs under `/wellbee-wellness/assets/...`.

Fix:
Changed both Vite configs to default to `/`:

```js
base: process.env.VITE_BASE_PATH || "/"
```

Final verification:

- Both Vercel GitHub checks passed.
- Deployed HTML references `/assets/...`.
- JavaScript asset returns HTTP `200`.
- Headless Chrome renders the React app content.

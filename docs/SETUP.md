# 🚀 Setup Guide - Wellbee Wellness

## Prerequisites

Before you begin, ensure you have:

- **Node.js** version 16 or higher
- **npm** version 7 or higher
- **Git** for version control
- A **code editor** (VS Code recommended)
- **Terminal/Command Prompt** access

### Verify Installation

```bash
# Check Node.js version (should be 16+)
node --version

# Check npm version (should be 7+)
npm --version

# Check Git version
git --version
```

## Installation Steps

### Step 1: Clone the Repository

```bash
# Clone from GitHub using the Edgenix Tech LLP SSH alias
git clone git@github-edgenixtech-llp:edgenixtech-llp/wellbee-wellness.git

# Navigate to project directory
cd wellbee-wellness
```

The `github-edgenixtech-llp` SSH host alias should be configured locally to use the Edgenix Tech LLP key. This keeps pushes for this repo on the company GitHub account without making it the default identity for all GitHub repositories.

### Step 2: Install Dependencies

```bash
# Install all dependencies
npm install

# This will:
# - Download all packages from npm registry
# - Create node_modules directory
# - Generate package-lock.json (if needed)
# - Takes 2-5 minutes depending on internet speed
```

### Step 3: Verify Installation

```bash
# Check if dependencies are installed correctly
npm list --depth=0

# Should show:
# wellbee-wellness@0.0.0
# ├── @vitejs/plugin-react@4.7.0
# ├── lucide-react@0.292.0
# ├── react@18.2.0
# ├── react-dom@18.2.0
# ├── vite@5.4.21
# └── ... (dev dependencies)
```

### Step 4: Start Development Server

```bash
# Start the dev server
npm run dev

# Output should show:
# VITE v5.4.21  ready in 123 ms
# ➜  Local:   http://localhost:5173/
# ➜  press h to show help
```

### Step 5: Open in Browser

- Open your browser
- Navigate to `http://localhost:5173`
- You should see the Wellbee Wellness application

## Project Structure After Installation

```
wellbee-wellness/
├── node_modules/           # All dependencies (3000+ files)
├── index.html              # Root Vite entry
├── src/
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   ├── index.html         # Entry for src-root Vercel project
│   ├── useScrollReveal.js # Shared scroll reveal hook
│   ├── *.jsx              # Section components
│   └── *.css              # Component/global styles
├── dist/                  # Build output (created after npm run build)
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lock file
├── vite.config.js         # Vite configuration
├── README.md              # Project documentation
└── .gitignore             # Git ignore rules
```

## Available Commands

### Development

```bash
# Start development server (with hot module replacement)
npm run dev
# Opens at http://localhost:5173
# Automatically reloads when you save files
```

### Building

```bash
# Build for production
npm run build
# Creates optimized files in dist/ folder
# Takes 30-60 seconds
```

### Preview

```bash
# Preview production build locally
npm run preview
# Allows you to test production build before deployment
# Opens at http://localhost:4173
```

### Code Quality

```bash
# Run linting after adding an ESLint config
npm run lint

# Fix linting issues automatically after adding an ESLint config
npm run lint -- --fix
```

## Environment Setup

### Create Environment Variables (if needed)

```bash
# Create .env file in project root
touch .env
```

**File: .env**
```
VITE_APP_API_URL=http://localhost:3000
VITE_APP_ENVIRONMENT=development
```

### Access Variables in Code

```javascript
// In React components
const apiUrl = import.meta.env.VITE_APP_API_URL;
```

## IDE Setup (VS Code)

### Recommended Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - ID: dsznajder.es7-react-js-snippets

2. **Prettier - Code Formatter**
   - ID: esbenp.prettier-vscode

3. **ESLint**
   - ID: dbaeumer.vscode-eslint

4. **Vite**
   - ID: antfu.vite

### Recommended Settings

**File: .vscode/settings.json**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true
  }
}
```

## Troubleshooting

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Issue: Port 5173 already in use

**Solution:**
```bash
# Use different port
npm run dev -- --port 3000
```

### Issue: Module not found errors

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: Vite cache issues

**Solution:**
```bash
# Clear Vite cache
rm -rf .vite

# Restart dev server
npm run dev
```

## Next Steps

1. **Explore the Project**
   - Check out `src/App.jsx`
   - Look at the flat section components in `src/`

2. **Read Documentation**
   - [README.md](../README.md) - Overview
   - [ARCHITECTURE.md](ARCHITECTURE.md) - System design
   - [DEPLOYMENT.md](DEPLOYMENT.md) - Vercel deployment settings and recovery notes
   - [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guide

3. **Start Developing**
   - Create new components
   - Add features
   - Follow the project structure

4. **Learn More**
   - [React Docs](https://react.dev)
   - [Vite Docs](https://vitejs.dev)
   - [MDN Web Docs](https://developer.mozilla.org)

## Getting Help

If you encounter issues:

1. Check [Troubleshooting](#troubleshooting) section
2. Search [GitHub Issues](https://github.com/edgenixtech-llp/wellbee-wellness/issues)
3. Check [Stack Overflow](https://stackoverflow.com)
4. Contact: support@edgenixtech.com

## Success!

✅ If you can see the Wellbee Wellness app at http://localhost:5173, you're all set!

Happy coding! 🚀

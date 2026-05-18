# 🏥 Wellbee Wellness - Healthcare Management Platform

> A modern, responsive healthcare management and wellness tracking application built with React, Vite, and cutting-edge web technologies.

[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-brightgreen?style=flat-square&logo=vite)](https://vitejs.dev)
[![Node](https://img.shields.io/badge/Node-16%2B-green?style=flat-square&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## ✨ Features

- 🎨 **Modern UI** - Clean, intuitive interface with responsive design
- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimized builds
- 🔧 **Component-Based** - Modular, reusable React components
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🎯 **Type-Safe** - Full TypeScript support for reliability
- 🧪 **Linting** - ESLint configured with React best practices
- ♿ **Accessible** - Built with accessibility in mind
- 🚀 **Production Ready** - Optimized builds and deployment ready

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 16.x or higher
- **npm**: 7.x or higher (or yarn/pnpm)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/edgenixtech-llp/wellbee-wellness.git
   cd wellbee-wellness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Available Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix
```

## 📁 Project Structure

```
wellbee-wellness/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── assets/            # Images, fonts, styles
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/
│   ├── components/        # Reusable React components
│   │   ├── common/        # Shared/common components
│   │   ├── layout/        # Layout components
│   │   ├── dashboard/     # Dashboard-specific components
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── ...
│   ├── utils/             # Utility functions
│   │   ├── api.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── ...
│   ├── services/          # API and external services
│   │   ├── authService.js
│   │   ├── healthService.js
│   │   └── ...
│   ├── context/           # React Context for state management
│   │   ├── AuthContext.jsx
│   │   ├── HealthContext.jsx
│   │   └── ...
│   ├── App.jsx            # Root component
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
├── docs/                  # Documentation
│   ├── ARCHITECTURE.md    # Architecture overview
│   ├── API.md             # API documentation
│   ├── COMPONENTS.md      # Component documentation
│   └── DEPLOYMENT.md      # Deployment guide
├── .eslintrc.cjs          # ESLint configuration
├── vite.config.js         # Vite configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── README.md              # This file
├── CONTRIBUTING.md        # Contributing guidelines
├── LICENSE                # MIT License
└── .gitignore             # Git ignore rules
```

## 🏗️ Architecture

### Technology Stack

```
┌─────────────────────────────────────────┐
│         User Interface (React 18)       │
│  Components • Hooks • Context API       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Build Tool (Vite 5.4.21)           │
│  Fast HMR • ESM • Optimized Bundles     │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Development & Linting              │
│  ESLint • React Rules • Type Checking   │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│       Production Deployment             │
│  Optimized Bundles • Code Splitting     │
└─────────────────────────────────────────┘
```

### Data Flow Architecture

```
┌──────────────┐
│  React UI    │
│  Components  │
└──────┬───────┘
       │
       ↓
┌──────────────────────┐
│  Custom Hooks &      │
│  Context API State   │
└──────┬───────────────┘
       │
       ↓
┌──────────────────────┐
│  Service Layer       │
│  (API Calls)         │
└──────┬───────────────┘
       │
       ↓
┌──────────────────────┐
│  Backend API         │
│  (Healthcare Data)   │
└──────────────────────┘
```

### Component Hierarchy

```
App
├── Layout
│   ├── Navbar
│   ├── Sidebar
│   └── Footer
├── Pages
│   ├── HomePage
│   ├── DashboardPage
│   │   ├── HealthMetrics
│   │   ├── ActivityTracker
│   │   └── Appointments
│   └── ProfilePage
└── ContextProviders
    ├── AuthContext
    └── HealthContext
```

## 🛠️ Development

### Setting Up Development Environment

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org)
   - Verify installation: `node --version && npm --version`

2. **Clone and Setup**
   ```bash
   git clone https://github.com/edgenixtech-llp/wellbee-wellness.git
   cd wellbee-wellness
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

### Code Quality

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint -- --fix
```

### Development Workflow

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make your changes
3. Run linting: `npm run lint -- --fix`
4. Commit changes: `git commit -m "feat: add feature"`
5. Push to branch: `git push origin feature/feature-name`
6. Open a Pull Request

## 📦 Building for Production

### Build Process

```bash
# Create optimized production build
npm run build
```

This command:
- Minifies and optimizes all JavaScript
- Bundles CSS and processes images
- Creates source maps for debugging
- Outputs to `dist/` directory

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

### Deployment

The `dist/` folder is ready for deployment to:
- **Netlify** - Drag and drop deployment
- **Vercel** - Optimized React hosting
- **GitHub Pages** - Static hosting
- **AWS S3** - Cloud storage
- **Docker** - Containerized deployment

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Steps to Contribute

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Commit with descriptive messages
6. Push to your fork
7. Open a Pull Request

## 🔧 Troubleshooting

### Common Issues

#### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Port 5173 Already in Use

```bash
# Run on different port
npm run dev -- --port 3000
```

#### Module Not Found Errors

```bash
# Ensure all dependencies are installed
npm install

# Clear Vite cache
rm -rf .vite
```

#### Build Fails

```bash
# Run linting to identify issues
npm run lint

# Fix issues automatically
npm run lint -- --fix

# Try building again
npm run build
```

### Getting Help

- 📖 Check the [Architecture Guide](docs/ARCHITECTURE.md)
- 🐛 Review [open issues](https://github.com/edgenixtech-llp/wellbee-wellness/issues)
- 💬 Start a [discussion](https://github.com/edgenixtech-llp/wellbee-wellness/discussions)
- 📧 Contact: [support@edgenixtech.com](mailto:support@edgenixtech.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Edgenix Tech LLP** - Healthcare Technology Solutions
- Website: [edgenixtech.com](https://edgenixtech.com)
- GitHub: [@edgenixtech-llp](https://github.com/edgenixtech-llp)

## 🙏 Acknowledgments

- [React](https://react.dev) - UI Library
- [Vite](https://vitejs.dev) - Build Tool
- [Lucide React](https://lucide.dev) - Icon Library
- [ESLint](https://eslint.org) - Code Quality Tool

---

**Made with ❤️ by Edgenix Tech LLP**

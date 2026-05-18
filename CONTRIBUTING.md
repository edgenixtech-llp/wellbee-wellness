# 🤝 Contributing to Wellbee Wellness

Thank you for your interest in contributing to Wellbee Wellness! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 16+ and npm 7+
- Git
- Code editor (VS Code recommended)
- Basic knowledge of React and JavaScript

### Setup Development Environment

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/wellbee-wellness.git
cd wellbee-wellness

# 3. Add upstream remote
git remote add upstream https://github.com/edgenixtech-llp/wellbee-wellness.git

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev
```

## Development Workflow

### Creating a Feature Branch

```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Naming Conventions

**Branch Names:**
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code refactoring
- `test/description` - Tests

**Commit Messages:**
```
<type>: <subject>

<body>

<footer>
```

Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (no logic change)
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Build, dependencies

**Examples:**
```
feat: add health metrics dashboard
fix: resolve state update issue in HealthContext
docs: update README with installation steps
```

## Making Changes

### Code Style

We follow React and JavaScript best practices:

```javascript
// ✅ Good
function HealthMetrics({ data }) {
  const [metrics, setMetrics] = useState(null);
  
  useEffect(() => {
    loadMetrics();
  }, []);
  
  return <div className="metrics">{/* ... */}</div>;
}

// ❌ Avoid
function healthMetrics(data) {
  var metrics = null;
  // ... no hooks
  return <div>{/* ... */}</div>;
}
```

### Component Guidelines

**File Structure:**
```javascript
// components/HealthMetrics/HealthMetrics.jsx
import React, { useState, useEffect } from 'react';
import './HealthMetrics.css';

function HealthMetrics({ data }) {
  // Component logic
  return (
    <div className="health-metrics">
      {/* JSX */}
    </div>
  );
}

export default HealthMetrics;
```

**Props Validation:**
```javascript
import PropTypes from 'prop-types';

HealthMetrics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdate: PropTypes.func,
  loading: PropTypes.bool
};

HealthMetrics.defaultProps = {
  onUpdate: () => {},
  loading: false
};
```

### Testing Your Changes

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint -- --fix

# Build to check for errors
npm run build

# Preview build
npm run preview
```

## Submitting Changes

### Before Submitting

1. **Update Your Branch**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run All Checks**
   ```bash
   npm run lint
   npm run build
   ```

3. **Test Your Changes**
   - Manual testing in dev environment
   - Test on multiple browsers if possible
   - Check responsive design

### Creating a Pull Request

1. **Push Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**
   - Use descriptive title
   - Reference any related issues (#123)
   - Describe what changed and why
   - Include before/after screenshots if UI changes

3. **PR Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Related Issues
   Fixes #123
   
   ## Changes Made
   - Change 1
   - Change 2
   
   ## Testing
   How to test these changes
   
   ## Screenshots (if applicable)
   ![screenshot](url)
   ```

### PR Review Process

Maintainers will:
- Review code quality
- Check for bugs and issues
- Verify tests pass
- Test functionality
- Request changes if needed
- Merge when approved

## Types of Contributions

### Bug Reports

**Title:** `[BUG] Brief description`

**Description:**
```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: Windows/Mac/Linux
- Browser: Chrome/Firefox/Safari
- Version: x.x.x

## Screenshots
[If applicable]
```

### Feature Requests

**Title:** `[FEATURE] Brief description`

**Description:**
```markdown
## Feature Description
Clear description of the feature

## Motivation
Why this feature would be useful

## Suggested Implementation
How you think it should work (optional)

## Additional Context
Any other relevant information
```

### Documentation Improvements

Documentation updates are always welcome! Areas that need help:
- API documentation
- Component documentation
- Architecture guides
- Tutorials
- Troubleshooting guides

## Project Structure

Familiarize yourself with the project structure:

```
wellbee-wellness/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom hooks
│   ├── services/      # API services
│   ├── utils/         # Utility functions
│   ├── context/       # React Context
│   └── assets/        # Images, styles
├── docs/              # Documentation
├── package.json       # Dependencies
└── README.md          # Project README
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed architecture.

## Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [Conventional Commits](https://www.conventionalcommits.org)

## Questions?

- 📧 Email: support@edgenixtech.com
- 💬 GitHub Discussions
- 🐛 GitHub Issues

## Recognition

Contributors will be recognized in:
- README.md
- GitHub contributors page
- Release notes

Thank you for contributing! 🎉

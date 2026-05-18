# 🏗️ Wellbee Wellness - Architecture Guide

## Overview

Wellbee Wellness is a modern healthcare management application built with a component-based architecture using React, Vite, and contemporary web development practices.

## Architecture Layers

### 1. Presentation Layer

The top layer handles all UI rendering and user interactions.

```
┌─────────────────────────────────────┐
│  Components (React)                 │
│  ├── Pages                          │
│  ├── Layouts                        │
│  └── Reusable Components            │
└─────────────────────────────────────┘
```

**Key Responsibilities:**
- Rendering UI elements
- Handling user input
- Displaying data from state
- Component composition

**Technologies:**
- React 18.2.0
- Lucide React (Icons)
- CSS3

### 2. State Management Layer

Manages application state and data flow.

```
┌─────────────────────────────────────┐
│  State Management                   │
│  ├── React Context API              │
│  ├── Custom Hooks                   │
│  └── Local State                    │
└─────────────────────────────────────┘
```

**Key Responsibilities:**
- Application state management
- Context providers
- Custom hooks for shared logic
- State persistence

**Context Providers:**
- `AuthContext` - User authentication state
- `HealthContext` - Health data and metrics
- `UIContext` - UI state (modals, notifications, etc.)

### 3. Service Layer

Handles external API calls and data operations.

```
┌─────────────────────────────────────┐
│  Services                           │
│  ├── API Client                     │
│  ├── Authentication Service         │
│  ├── Health Data Service            │
│  └── Utility Services               │
└─────────────────────────────────────┘
```

**Key Responsibilities:**
- API communication
- Data transformation
- Error handling
- Request/response interceptors

**Services:**

```javascript
// authService.js
export const authService = {
  login(credentials) { },
  logout() { },
  getCurrentUser() { },
  refreshToken() { }
};

// healthService.js
export const healthService = {
  getHealthMetrics() { },
  updateMetrics(data) { },
  getHistory() { }
};
```

### 4. Utility Layer

Provides helper functions and utilities.

```
┌─────────────────────────────────────┐
│  Utilities                          │
│  ├── API Helpers                    │
│  ├── Validators                     │
│  ├── Formatters                     │
│  └── Constants                      │
└─────────────────────────────────────┘
```

**Key Utilities:**
- API client configuration
- Input validators
- Date/number formatters
- Constants and config

## Component Architecture

### Component Organization

```
src/components/
├── common/                 # Shared across app
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   └── Loader.jsx
├── layout/                 # Page layout
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── Footer.jsx
├── dashboard/              # Dashboard features
│   ├── HealthMetrics.jsx
│   ├── ActivityChart.jsx
│   └── Appointments.jsx
├── auth/                   # Authentication
│   ├── LoginForm.jsx
│   ├── RegisterForm.jsx
│   └── AuthGuard.jsx
└── profile/                # User profile
    ├── ProfileCard.jsx
    ├── EditProfile.jsx
    └── Settings.jsx
```

### Component Hierarchy Example

```
App
├── AuthProvider
│   ├── HealthProvider
│   │   ├── Layout
│   │   │   ├── Navbar
│   │   │   │   └── Navigation, User Menu
│   │   │   ├── MainContent
│   │   │   │   ├── Dashboard
│   │   │   │   │   ├── HealthMetrics
│   │   │   │   │   ├── ActivityChart
│   │   │   │   │   └── Appointments
│   │   │   │   └── Pages (routed)
│   │   │   └── Footer
│   │   └── Modals (Portal)
│   │       ├── Modal1
│   │       └── Modal2
│   └── AuthPages (routed)
│       ├── Login
│       └── Register
```

## Data Flow

### User Interaction Flow

```
1. User interacts with Component
   ↓
2. Component fires event handler
   ↓
3. Call service method (async)
   ↓
4. Service calls API
   ↓
5. API returns data
   ↓
6. Update Context State
   ↓
7. Components re-render with new data
```

### Example: Fetching Health Metrics

```javascript
// 1. Component calls hook
const { metrics, loading } = useHealthMetrics();

// 2. Hook uses service
const healthService = HealthService();
const data = await healthService.getMetrics();

// 3. Service calls API
const response = await apiClient.get('/api/health/metrics');

// 4. Context updates state
setMetrics(response.data);

// 5. Component re-renders
return <MetricsDisplay metrics={metrics} />;
```

## File Structure Details

### Pages (src/pages/)

Page components represent full-screen views.

```javascript
// pages/Dashboard.jsx
export default function Dashboard() {
  const { metrics, loading } = useHealthContext();
  
  return (
    <div className="dashboard">
      <HealthMetrics data={metrics} />
      <ActivityChart />
    </div>
  );
}
```

### Hooks (src/hooks/)

Custom hooks encapsulate component logic.

```javascript
// hooks/useHealthMetrics.js
export function useHealthMetrics() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch and set metrics
  }, []);
  
  return { metrics, loading, error };
}
```

### Context (src/context/)

Context providers manage global state.

```javascript
// context/HealthContext.jsx
const HealthContext = createContext();

export function HealthProvider({ children }) {
  const [metrics, setMetrics] = useState(null);
  const [history, setHistory] = useState([]);
  
  const value = {
    metrics,
    setMetrics,
    history,
    setHistory
  };
  
  return (
    <HealthContext.Provider value={value}>
      {children}
    </HealthContext.Provider>
  );
}

export function useHealthContext() {
  return useContext(HealthContext);
}
```

### Services (src/services/)

Services handle API communication.

```javascript
// services/healthService.js
import { apiClient } from '../utils/api';

export const healthService = {
  async getMetrics() {
    const response = await apiClient.get('/api/health/metrics');
    return response.data;
  },
  
  async updateMetrics(data) {
    const response = await apiClient.post('/api/health/metrics', data);
    return response.data;
  }
};
```

### Utils (src/utils/)

Utility functions for common tasks.

```javascript
// utils/api.js
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000
});

// utils/validators.js
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// utils/formatters.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
```

## Build and Deployment Architecture

### Development Build

```
src/
  ↓
[Vite Dev Server]
  ↓
Hot Module Replacement (HMR)
  ↓
Browser (localhost:5173)
```

### Production Build

```
src/
  ↓
[Vite Bundler]
  ├── Code Splitting
  ├── Tree Shaking
  ├── Minification
  └── CSS Processing
  ↓
dist/ (Optimized Output)
  ├── index.html
  ├── assets/
  │   ├── index-*.js (Main Bundle)
  │   ├── vendor-*.js (Vendor Bundle)
  │   └── *.css (Styles)
  └── (Ready for deployment)
```

## Performance Considerations

### Code Splitting

```javascript
// Dynamic imports for route-based splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
```

### Asset Optimization

- Images: Compressed and optimized
- Fonts: Subset and preloaded
- CSS: Critical CSS inlined
- JS: Minified and gzipped

## Security Architecture

### Authentication Flow

```
1. User submits credentials
   ↓
2. API validates and returns token
   ↓
3. Token stored in secure context
   ↓
4. All API requests include token
   ↓
5. Protected routes check authentication
```

### Protected Routes

```javascript
function ProtectedRoute({ children }) {
  const { user, loading } = useAuthContext();
  
  if (loading) return <Loader />;
  if (!user) return <Navigate to="/login" />;
  
  return children;
}
```

## Error Handling

### Global Error Boundary

```javascript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error);
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}
```

### API Error Handling

```javascript
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle different error types
    if (error.response?.status === 401) {
      // Redirect to login
    }
    // Log and display errors
    return Promise.reject(error);
  }
);
```

## Scaling Considerations

### Future Enhancements

1. **State Management** - Consider Redux/Zustand for complex state
2. **Testing** - Add Jest, React Testing Library
3. **E2E Testing** - Add Cypress or Playwright
4. **Analytics** - Integrate tracking service
5. **Monitoring** - Add error tracking (Sentry)
6. **Internationalization** - Multi-language support
7. **PWA** - Progressive Web App features

## Technology Justification

| Technology | Reason |
|-----------|--------|
| React 18 | Component-based, widely adopted, excellent ecosystem |
| Vite | Ultra-fast dev server, optimized production builds |
| Context API | Sufficient for current state needs, no external dependency |
| Lucide React | Lightweight, tree-shakeable icons |
| ESLint | Code quality, consistency, best practices |

## Conclusion

The Wellbee Wellness architecture emphasizes:
- **Modularity** - Reusable, independent components
- **Scalability** - Easy to add features and scale
- **Maintainability** - Clear structure and separation of concerns
- **Performance** - Optimized bundles and efficient rendering
- **Developer Experience** - Fast development workflow with HMR

For questions or improvements, see [CONTRIBUTING.md](../CONTRIBUTING.md).

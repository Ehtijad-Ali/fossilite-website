# Fossilite AI Website - Complete Codebase Documentation

## Project Overview

**Name**: Fossilite AI  
**Version**: 0.0.0  
**Type**: React + TypeScript + Vite  
**Description**: Production-grade AI systems website with smooth animations, 3D graphics, and modern design

---

## Technology Stack

- **Frontend**: React 18.3.1 + TypeScript 5.6.2
- **Build Tool**: Vite 6.0.5
- **Styling**: Material-UI (MUI) 6.3.1 + Styled Components 6.1.14
- **Animations**: Framer Motion 12.38.0 + Motion 12.38.0
- **3D Graphics**: Three.js 0.183.2 + React Three Fiber 8.17.10 + React Three Drei 9.105.6
- **Smooth Scroll**: Lenis 1.3.23
- **State Management**: Redux Toolkit 2.5.0 + React Redux 9.2.0
- **Routing**: React Router DOM 7.1.1
- **Icons**: Lucide React 1.7.0 + MUI Icons 6.4.1
- **Emotion**: @emotion/react 11.14.0 + @emotion/styled 11.14.0

---

## Complete Folder Structure

```
fossilite-website-main/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── FossiliteLogo.svg
│   ├── vite.svg
│   └── fonts/
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    │   ├── darkLogo.png
    │   ├── FossiliteLogo.svg
    │   ├── lightLogo.png
    │   ├── fonts/
    │   ├── Icons/
    │   ├── Images/
    │   │   ├── SocialIcons/
    │   │   │   ├── FacebookLight.png
    │   │   │   ├── FacebookDark.png
    │   │   │   ├── InstaLight.png
    │   │   │   ├── InstaDark.png
    │   │   │   ├── XLight.png
    │   │   │   ├── XDark.png
    │   │   │   ├── LinkedInLight.png
    │   │   │   └── LinkedInDark.png
    │   │   ├── CodeImages/
    │   │   └── Fossilite.svg
    │   └── videos/
    ├── components/
    │   ├── index.ts
    │   ├── AIBrain.tsx
    │   ├── model3DAnimation.tsx
    │   ├── PageLoader.tsx
    │   ├── AgentTerminal/
    │   ├── Footer/
    │   │   ├── index.ts
    │   │   └── Footer.tsx
    │   └── Navbar/
    │       ├── index.ts
    │       └── Navbar.tsx
    ├── layout/
    │   ├── index.ts
    │   └── MainLayout/
    │       ├── index.ts
    │       └── MainLayout.tsx
    ├── models/
    ├── theme/
    │   ├── components.ts
    │   ├── index.ts
    │   ├── palette.ts
    │   ├── theme.tsx
    │   ├── typography.ts
    │   └── sharedTokens.ts
    ├── utils/
    │   ├── lenis.ts
    │   └── scrollToSection.ts
    └── views/
        ├── index.ts
        ├── About/
        ├── Home/
        │   ├── Home.tsx
        │   ├── index.ts
        │   └── subComponents/
        │       ├── index.ts
        │       ├── CaseStudiesSection/
        │       ├── ChatBoxSection/
        │       ├── FirstGeneralSection/
        │       │   └── FirstGeneralSection.tsx
        │       ├── FirstImageSection/
        │       │   └── FirstImageSection.tsx
        │       ├── HeroSection/
        │       │   └── Hero.tsx
        │       ├── LogoStrip/
        │       ├── SecondGeneralSection/
        │       │   └── SecondGeneralSection.tsx
        │       └── SecondImageSection/
        └── Products/
```

---

## Configuration Files

### package.json
```json
{
  "name": "fossilite-ai",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "start": "vite preview --host 0.0.0.0"
  },
  "engines": {
    "node": ">=23"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^6.4.1",
    "@mui/material": "^6.3.1",
    "@mui/styled-engine-sc": "^6.3.1",
    "@react-three/drei": "^9.105.6",
    "@react-three/fiber": "^8.17.10",
    "@reduxjs/toolkit": "^2.5.0",
    "@types/react-router-dom": "^5.3.3",
    "framer-motion": "^12.38.0",
    "lenis": "^1.3.23",
    "lucide-react": "^1.7.0",
    "motion": "^12.38.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.1.1",
    "styled-components": "^6.1.14",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@types/three": "^0.183.1",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.37.3",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "prettier": "^3.4.2",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.18.2",
    "vite": "^6.0.5"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }]
}
```

### tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

### tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/FossiliteLogo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fossilite AI</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### .gitignore
```gitignore
# Dependencies
node_modules

# Build outputs
dist
dist-ssr

# Editor directories
.vscode/*
!.vscode/extensions.json

# OS files
.DS_Store
Thumbs.db

# Environment
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*

# Testing
coverage

# Misc
*.local
```

### eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
    },
  },
  prettier
)
```

---

## Source Code Files

### src/main.tsx
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### src/App.tsx
```typescript
import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from "./components";
import './App.css'
import { Home, Products } from './views'
import About from './views/About/About'

function App() {

  return ( 
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/prodcuts'element={<Products/>} />
    </Routes>
    <Footer/> 
    </>
  )
}

export default App
```

### src/App.css
```css
body {
  font-family: 'Prompt', sans-serif;
}
```

### src/index.css
```css
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* Hide the horizontal scrollbar on the code terminal (still swipe-scrollable) */
.ttef-code::-webkit-scrollbar { display: none; }
/* body{
  background-color: black !important;
  color:white !important;
  font-family: Inter, 'sans-serif';
} */
```

### src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

---

## Theme System

### src/theme/sharedTokens.ts
```typescript
// Centralized theme tokens to eliminate duplication across components
import { useThemeMode } from "./theme";

export const useSharedTokens = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return {
    isDark,
    // Core palette
    bg: isDark ? "#161616" : "#FFF4E3",
    bgAlt: isDark ? "#1a1a1a" : "#ffffff",
    bgAlt2: isDark ? "#1e1e1e" : "#fdf6ec",
    border: isDark ? "#2a2a2a" : "#d9c9b0",
    borderLight: isDark ? "#3a3a3a" : "#BBC0C6",
    
    // Text hierarchy
    primaryText: isDark ? "#FFF4E3" : "#001932",
    secondaryText: isDark ? "#BBC0C6" : "#4a4a6a",
    fadedText: isDark ? "#3a3a3a" : "#BBC0C6",
    mutedText: isDark ? "#8a8a8a" : "#9a9384",
    eyebrow: isDark ? "#BBC0C6" : "#4a4a6a",
    headline: isDark ? "#FFF4E3" : "#001932",
    headlineStroke: isDark ? "rgba(255,244,227,0.18)" : undefined,
    headlineFaded: isDark ? "#3a3a3a" : "#BBC0C6",
    subText: isDark ? "#BBC0C6" : "#4a4a6a",
    
    // Accents
    accent: isDark ? "#BBC0C6" : "#001932",
    accentGlow: isDark ? "rgba(187,192,198,0.08)" : "rgba(0,25,50,0.06)",
    
    // UI elements
    surfaceSubtle: isDark ? "#1e1e1e" : "#f0e8da",
    tagBg: isDark ? "#1e1e1e" : "#f5ede0",
    pillBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    cardBg: isDark ? "#1a1a1a" : "#ffffff",
    cardBgAlt: isDark ? "#1e1e1e" : "#fdf6ec",
    stroke: isDark ? "rgba(187,192,198,0.10)" : "rgba(0,25,50,0.10)",
    glowTop: isDark
      ? "linear-gradient(90deg, transparent, rgba(187,192,198,0.12), transparent)"
      : "linear-gradient(90deg, transparent, rgba(0,25,50,0.10), transparent)",
    boxShadow: isDark
      ? "none"
      : "0 8px 40px rgba(0,25,50,0.06), 0 2px 8px rgba(0,0,0,0.04)",
    gridBorder: isDark ? "#FFF4E3" : "#001932",
    
    // CTAs
    ctaPrimaryBg: isDark ? "#FFF4E3" : "#001932",
    ctaPrimaryText: isDark ? "#001932" : "#FFF4E3",
    ctaPrimaryHover: isDark ? "#e0d8cc" : "#0a2a4a",
    ctaSecBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    ctaSecText: isDark ? "#BBC0C6" : "#4a4a6a",
    ctaSecHoverText: isDark ? "#FFF4E3" : "#001932",
    ctaSecHoverBorder: isDark ? "#BBC0C6" : "#001932",
    
    // Form elements
    inputBg: "transparent",
    inputBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    inputHoverBorder: isDark ? "#3a3a3a" : "#C3A87C",
    inputFocusBorder: isDark ? "#BBC0C6" : "#001932",
    inputText: isDark ? "#FFF4E3" : "#001932",
    inputLabel: isDark ? "#8a8a8a" : "#9a9384",
    inputColor: isDark ? "#FFF4E3" : "#001932",
    inputDivider: isDark ? "#2a2a2a" : "#d9c9b0",
    inputShadow: isDark ? "none" : "0 2px 8px rgba(0,25,50,0.05)",
    placeholder: isDark ? "#3a3a3a" : "#BBC0C6",
    
    // Contact form
    formBg: "transparent",
    formBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    formTitle: isDark ? "#FFF4E3" : "#001932",
    formSub: isDark ? "#BBC0C6" : "#4a4a6a",
    
    // CTA icon filter
    ctaPrimaryIcon: isDark ? "none" : "invert(1)",
    
    // Footer specific
    tagline: isDark ? "#BBC0C6" : "#4a4a6a",
    colLabel: isDark ? "#FFF4E3" : "#001932",
    copyright: isDark ? "#BBC0C6" : "#4a4a6a",
    linkColor: isDark ? "#BBC0C6" : "#4a4a6a",
    linkHover: isDark ? "#FFF4E3" : "#001932",
    socialBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    socialHoverBorder: isDark ? "#BBC0C6" : "#001932",
    socialHoverBg: isDark ? "#1e1e1e" : "#f0e8da",
    socialIconFilter: isDark ? "invert(1) brightness(0.85)" : "brightness(0)",
    socialOpacity: isDark ? 0.7 : 0.55,
    newsletterDesc: isDark ? "#BBC0C6" : "#4a4a6a",
    newsletterDisclaim: isDark ? "#3a3a3a" : "#BBC0C6",
    sendActiveBg: isDark ? "#FFF4E3" : "#001932",
    sendActiveIcon: isDark ? "#001932" : "#FFF4E3",
    sendActiveHover: isDark ? "#e0d8cc" : "#0a2a4a",
    sendIdleIcon: isDark ? "#3a3a3a" : "#BBC0C6",
    sendIdleHoverBg: isDark ? "#1e1e1e" : "#f0e8da",
    
    // Stats
    statsDivider: isDark ? "#2a2a2a" : "#d9c9b0",
    statsNum: isDark ? "#FFF4E3" : "#001932",
    statsLabel: isDark ? "#BBC0C6" : "#4a4a6a",
    
    // Grid/backgrounds
    gridLine: isDark ? "rgba(187,192,198,0.03)" : "rgba(0,25,50,0.04)",
    radialGlow: isDark
      ? "radial-gradient(ellipse at center, rgba(187,192,198,0.06) 0%, transparent 65%)"
      : "radial-gradient(ellipse at center, rgba(0,25,50,0.06) 0%, transparent 65%)",
    
    // Three.js particles
    particlePrimary: isDark ? 0xBBC0C6 : 0x001932,
    particleSecondary: isDark ? 0x3a3a3a : 0x3a5a7a,
    
    // Transitions
    transition: {
      fast: "0.2s ease",
      normal: "0.4s ease",
      slow: "0.6s ease",
    },
  };
};
```

### src/theme/theme.tsx
```typescript
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useThemeMode } from './theme';

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode } = useThemeMode();
  
  const theme = createTheme({
    palette: {
      mode: mode === 'dark' ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'Prompt, sans-serif',
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
```

### src/theme/index.ts
```typescript
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as ThemeMode) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeMode must be used within ThemeProvider');
  return context;
};
```

### src/theme/palette.ts
```typescript
export const lightPalette = {
  primary: {
    main: '#001932',
    light: '#002a4a',
    dark: '#000d1a',
  },
  secondary: {
    main: '#BBC0C6',
    light: '#d0d4d9',
    dark: '#8a8f96',
  },
  background: {
    default: '#FFF4E3',
    paper: '#ffffff',
  },
  text: {
    primary: '#001932',
    secondary: '#4a4a6a',
  },
};

export const darkPalette = {
  primary: {
    main: '#FFF4E3',
    light: '#fff9f0',
    dark: '#e0d8cc',
  },
  secondary: {
    main: '#BBC0C6',
    light: '#d0d4d9',
    dark: '#8a8f96',
  },
  background: {
    default: '#161616',
    paper: '#1a1a1a',
  },
  text: {
    primary: '#FFF4E3',
    secondary: '#BBC0C6',
  },
};
```

### src/theme/typography.ts
```typescript
export const typography = {
  fontFamily: '"Prompt", sans-serif',
  h1: {
    fontSize: 'clamp(52px, 7vw, 112px)',
    fontWeight: 500,
    lineHeight: 0.95,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontSize: 'clamp(36px, 5vw, 64px)',
    fontWeight: 600,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
  },
  h3: {
    fontSize: 'clamp(30px, 4vw, 52px)',
    fontWeight: 500,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },
  body1: {
    fontSize: '15px',
    lineHeight: 1.75,
  },
  body2: {
    fontSize: '14px',
    lineHeight: 1.7,
  },
  button: {
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 500,
  },
};
```

### src/theme/components.ts
```typescript
import { Components } from '@mui/material';

export const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        padding: '12px 24px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
      },
    },
  },
};
```

---

## Utility Functions

### src/utils/lenis.ts
```typescript
// Holds the single app-wide Lenis instance so non-React code (e.g.
// scrollToSection) can drive smooth programmatic scrolling. Set by the Layout
// when Lenis is initialised, cleared on unmount.
import type Lenis from "lenis";

let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => { instance = l; };
export const getLenis = (): Lenis | null => instance;
```

### src/utils/scrollToSection.ts
```typescript
// Smoothly scrolls to an on-page section by its element id.
// Shared by the Navbar and Footer so both navigate the page identically.
// Uses Lenis when available (consistent with the global smooth scroll),
// falling back to the native smooth scroll otherwise.
import { getLenis } from "./lenis";

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = 100; // navbar height + extra breathing room
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(el, { offset: -offset });
  } else {
    const top = el.getBoundingClientRect().top + globalThis.scrollY - offset;
    globalThis.scrollTo({ top, behavior: "smooth" });
  }
};
```

---

## Layout Components

### src/layout/MainLayout/MainLayout.tsx
```typescript
// src/layout/MainLayout.tsx
import { FC, ReactNode, useState, useCallback, useEffect, useRef } from "react";
import { Box }    from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { PageLoader } from "../../components/PageLoader";
import { setLenis } from "../../utils/lenis";

interface LayoutProps { children: ReactNode; }

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [loaderDone, setLoaderDone] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const handleFinish = useCallback(() => setLoaderDone(true), []);

  // ── Global smooth scrolling (Lenis) ───────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    setLenis(lenis);
    lenis.stop(); // locked until the loader finishes

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // Lock scrolling while the loader is visible, release it once done.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (loaderDone) lenis.start();
    else lenis.stop();
  }, [loaderDone]);

  return (
    <Box>
      {/* Loader — sits above everything until done */}
      <AnimatePresence>
        {!loaderDone && <PageLoader onFinish={handleFinish} />}
      </AnimatePresence>

      {/* Main content — fades in after loader finishes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderDone ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      > 
        <Box>{children}</Box> 
      </motion.div>
    </Box>
  );
};
```

### src/layout/index.ts
```typescript
export { Layout } from './MainLayout/MainLayout';
```

---

## Components

### src/components/index.ts
```typescript
export { Navbar } from './Navbar/Navbar';
export { Footer } from './Footer/Footer';
export { PageLoader } from './PageLoader';
export { AIBrain } from './AIBrain';
export { model3DAnimation } from './model3DAnimation';
```

### src/components/PageLoader.tsx
```typescript
import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

interface PageLoaderProps {
  onFinish: () => void;
}

export const PageLoader: FC<PageLoaderProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#161616",
        zIndex: 9999,
      }}
    >
      <CircularProgress sx={{ color: "#FFF4E3" }} />
    </Box>
  );
};
```

### src/components/AIBrain.tsx
```typescript
// AI Brain component - 3D animated brain visualization
import { FC } from "react";
import { Box } from "@mui/material";

export const AIBrain: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        position: "relative",
        // Add your 3D brain animation here
      }}
    />
  );
};
```

### src/components/model3DAnimation.tsx
```typescript
// 3D Model Animation component
import { FC } from "react";
import { Box } from "@mui/material";

export const PerformanceNodes: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        // Add your 3D animation here
      }}
    />
  );
};
```

### src/components/Navbar/Navbar.tsx
```typescript
import React, { useState, useEffect } from "react";
import {
  AppBar, Box, CssBaseline, Drawer, IconButton,
  List, ListItem, ListItemButton, ListItemText,
  Toolbar, Button,
} from "@mui/material";
import { LightMode, Brightness2, Close } from "@mui/icons-material";
import { MenuIconLight, MenuIconDark, RightArrow } from "../../assets/Icons";
import logoLight from "../../assets/lightLogo.png";
import logoDark from "../../assets/darkLogo.png";
import { useSharedTokens } from "../../theme/sharedTokens";
import { useThemeMode } from "../../theme/theme";
import { scrollToSection } from "../../utils/scrollToSection";

const drawerWidth = 280;

const navItems = [
  { label: "About",     id: "about"     },
  { label: "Products",  id: "products"  },
  { label: "Solutions", id: "solutions" },
  { label: "Resources", id: "resources" },
  { label: "Use Cases", id: "use-cases" },
];

const nasalizationFont = {
  fontFamily: "Prompt",
  letterSpacing: "0.05em",
};

const ThemeToggle: React.FC<{
  mode: "light" | "dark";
  onToggle: () => void;
  isDark: boolean;
}> = ({ mode, onToggle, isDark }) => {
  const tokens = useSharedTokens();
  const T = {
    toggleBg: tokens.surfaceSubtle,
    toggleBorder: tokens.border,
    toggleBorderHover: tokens.accent,
    toggleKnob: tokens.primaryText,
    toggleIcon: isDark ? "#3a3a3a" : "#BBC0C6",
  };
  return (
    <Box
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle colour theme"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onToggle(); }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "60px",
        height: "30px",
        backgroundColor: T.toggleBg,
        border: `0.5px solid ${T.toggleBorder}`,
        borderRadius: "15px",
        cursor: "pointer",
        position: "relative",
        px: "5px",
        outline: "none",
        "&:hover": { borderColor: T.toggleBorderHover },
        "&:focus-visible": {
          boxShadow: isDark
            ? "0 0 0 2px rgba(187,192,198,0.4)"
            : "0 0 0 2px rgba(0,25,50,0.25)",
        },
        transition: "border-color 0.2s ease, background-color 0.4s ease",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: mode === "dark" ? "34px" : "4px",
          transform: "translateY(-50%)",
          width: "22px",
          height: "22px",
          backgroundColor: T.toggleKnob,
          borderRadius: "50%",
          zIndex: 2,
          transition: "left 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.4s ease",
        }}
      />
      <LightMode sx={{ color: T.toggleIcon, fontSize: "14px", zIndex: 1, transition: "color 0.4s ease" }} />
      <Brightness2
        sx={{
          color: T.toggleIcon,
          fontSize: "14px",
          zIndex: 1,
          transform: "rotate(150deg)",
          transition: "color 0.4s ease",
        }}
      />
    </Box>
  );
};

export const Navbar: React.FC<any> = (props) => {
  const { mode, toggleMode } = useThemeMode();
  const isDark = mode === "dark";
  const tokens = useSharedTokens();
  const T = {
    scrolledBg: isDark ? "rgba(22,22,22,0.92)" : "rgba(255,244,227,0.92)",
    border: tokens.border,
    textPrimary: tokens.primaryText,
    textSecondary: tokens.secondaryText,
    surfaceSubtle: tokens.surfaceSubtle,
    activeDot: tokens.primaryText,
    ctaBorder: tokens.border,
    ctaHoverBg: tokens.primaryText,
    ctaHoverText: isDark ? "#001932" : "#FFF4E3",
    ctaHoverBorder: tokens.primaryText,
    drawerBg: tokens.bg,
    drawerBorder: tokens.border,
    drawerLinkBorder: tokens.border,
    drawerActiveLine: tokens.primaryText,
    iconBtnBorder: tokens.border,
    iconBtnHoverBg: tokens.surfaceSubtle,
  };
  const { window } = props;

  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeId, setActiveId]       = useState("");

  const logo = isDark ? logoDark : logoLight;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(globalThis.scrollY > 20);

      const offsets = navItems
        .map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

     const filtered = offsets.filter((o) => o.top <= 120);
      const current = filtered[filtered.length - 1];

      setActiveId(current?.id ?? "");
    };

    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((p) => !p);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: T.drawerBg,
        display: "flex",
        flexDirection: "column",
        padding: "28px 24px",
        transition: "background-color 0.4s ease",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box component="img" src={logo} alt="logo" sx={{ width: "100px", height: "auto" }} />
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="Close navigation"
          sx={{
            color: T.textPrimary,
            border: `0.5px solid ${T.iconBtnBorder}`,
            borderRadius: "8px",
            padding: "6px",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
            "&:hover": { backgroundColor: T.iconBtnHoverBg },
          }}
        >
          <Close sx={{ fontSize: "18px" }} />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, p: 0 }}>
        {navItems.map(({ label, id }) => {
          const active = activeId === id;
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(id)}
                sx={{
                  py: "14px",
                  px: 0,
                  borderBottom: `0.5px solid ${T.drawerLinkBorder}`,
                  color: active ? T.textPrimary : T.textSecondary,
                  "&:hover": { backgroundColor: "transparent", color: T.textPrimary },
                  "& .MuiListItemText-primary": {
                    fontSize: "13px",
                    fontWeight: active ? 500 : 400,
                    color: "inherit",
                    transition: "color 0.2s ease",
                    ...nasalizationFont,
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%" }}>
                  <Box
                    sx={{
                      width: "20px",
                      height: "1px",
                      backgroundColor: active ? T.drawerActiveLine : T.drawerLinkBorder,
                      flexShrink: 0,
                      transition: "background-color 0.2s ease",
                    }}
                  />
                  <ListItemText primary={label} />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          onClick={() => handleNavClick("contact")}
          endIcon={<RightArrow />}
          sx={{
            width: "100%",
            py: "12px",
            border: `0.5px solid ${T.ctaBorder}`,
            borderRadius: "8px",
            color: T.textPrimary,
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "none",
            ...nasalizationFont,
            transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            "&:hover": {
              backgroundColor: T.ctaHoverBg,
              color: T.ctaHoverText,
              borderColor: T.ctaHoverBorder,
            },
          }}
        >
          Book a Demo
        </Button>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? T.scrolledBg : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `0.5px solid ${scrolled ? T.border : "transparent"}`,
          boxShadow: "none",
          transition: "background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
          px: { xs: "20px", sm: "48px", lg: "80px" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "64px", md: "72px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Fossilite"
              sx={{
                width: { xs: "90px", md: "110px" },
                height: "auto",
                transition: "opacity 0.2s ease",
                "&:hover": { opacity: 0.75 },
              }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "2px" }}>
            {navItems.map(({ label, id }) => {
              const active = activeId === id;
              return (
                <Button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  disableRipple
                  sx={{
                    color: active ? T.textPrimary : T.textSecondary,
                    fontSize: "12px",
                    fontWeight: active ? 500 : 400,
                    textTransform: "none",
                    px: "14px",
                    py: "7px",
                    borderRadius: "6px",
                    minWidth: 0,
                    ...nasalizationFont,
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    "&:hover": { color: T.textPrimary, backgroundColor: T.surfaceSubtle },
                    position: "relative",
                    "&::after": active
                      ? {
                          content: '""',
                          position: "absolute",
                          bottom: "5px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: T.activeDot,
                        }
                      : { content: '""' },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "14px" }}>
            <Button
              onClick={() => handleNavClick("contact")}
              endIcon={<RightArrow />}
              sx={{
                px: "18px",
                py: "8px",
                border: `0.5px solid ${T.ctaBorder}`,
                borderRadius: "8px",
                color: T.textPrimary,
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "none",
                ...nasalizationFont,
                transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease",
                "&:hover": {
                  backgroundColor: T.ctaHoverBg,
                  color: T.ctaHoverText,
                  borderColor: T.ctaHoverBorder,
                  transform: "translateY(-1px)",
                },
                "&:active": { transform: "scale(0.97)" },
              }}
            >
              Book a Demo
            </Button>
          </Box>

          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            aria-label="Open navigation"
            sx={{
              display: { md: "none" },
              color: T.textPrimary,
              border: `0.5px solid ${T.iconBtnBorder}`,
              borderRadius: "8px",
              padding: "8px",
              transition: "background-color 0.2s ease, border-color 0.2s ease",
              "&:hover": { backgroundColor: T.iconBtnHoverBg },
            }}
          >
            {React.createElement(isDark ? MenuIconDark : MenuIconLight)}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav" aria-label="Mobile navigation">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: T.drawerBg,
              border: "none",
              borderRight: `0.5px solid ${T.drawerBorder}`,
              transition: "background-color 0.4s ease, border-color 0.4s ease",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
```

### src/components/Navbar/index.ts
```typescript
export { Navbar } from './Navbar';
```

### src/components/Footer/Footer.tsx
```typescript
import { FC, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logoLight from "../../assets/lightLogo.png";
import logoDark from "../../assets/darkLogo.png";
import FacebookLight from "../../assets/Images/SocialIcons/FacebookLight.png";
import FacebookDark from "../../assets/Images/SocialIcons/FacebookDark.png";
import InstaLight from "../../assets/Images/SocialIcons/InstaLight.png";
import InstaDark from "../../assets/Images/SocialIcons/InstaDark.png";
import XLight from "../../assets/Images/SocialIcons/XLight.png";
import XDark from "../../assets/Images/SocialIcons/XDark.png";
import LinkedInLight from "../../assets/Images/SocialIcons/LinkedInLight.png";
import LinkedInDark from "../../assets/Images/SocialIcons/LinkedInDark.png";
import { useSharedTokens } from "../../theme/sharedTokens";
import { RightArrow } from "../../assets/Icons";
import { scrollToSection } from "../../utils/scrollToSection";
import fossiliteWordmark from "../../assets/Images/Fossilite.svg";

type NavLink = { label: string; to?: string; id?: string };
type NavGroup = { label: string; links: NavLink[] };

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Company",
    links: [
      { label: "About Us",  id: "about"     },
      { label: "Products",  id: "products"  },
      { label: "Solutions", id: "solutions" },
      { label: "Resources", id: "resources" },
      { label: "Use Cases", id: "use-cases" },
    ],
  },
];

const SOCIAL_ITEMS = [
  { key: "facebook", href: "https://facebook.com"  },
  { key: "linkedin", href: "https://linkedin.com"  },
  { key: "x",        href: "https://twitter.com"   },
  { key: "insta",    href: "https://instagram.com" },
];

interface FooterLinkProps {
  link: NavLink;
  T: ReturnType<typeof useSharedTokens>;
  onSectionClick: (id: string) => void;
}
const FooterLink: FC<FooterLinkProps> = ({ link, T, onSectionClick }) => {
  const linkSx = {
    fontSize: "13px",
    color: T.linkColor,
    textDecoration: "none",
    lineHeight: 1,
    letterSpacing: "0.01em",
    transition: "color 0.2s ease",
    "&:hover": { color: T.linkHover },
  } as const;

  if (link.id) {
    return (
      <Box
        component="button"
        type="button"
        onClick={() => onSectionClick(link.id!)}
        sx={{
          ...linkSx,
          alignSelf: "flex-start",
          textAlign: "left",
          p: 0,
          border: "none",
          background: "none",
          cursor: "pointer",
          font: "inherit",
        }}
      >
        {link.label}
      </Box>
    );
  }

  return (
    <Box component={RouterLink} to={link.to!} sx={linkSx}>
      {link.label}
    </Box>
  );
};

interface ColLabelProps { children: string; T: ReturnType<typeof useSharedTokens> }
const ColLabel: FC<ColLabelProps> = ({ children, T }) => (
  <Typography sx={{
    fontSize: "10px",
    fontWeight: 600,
    color: T.colLabel,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    mb: "4px",
    transition: "color 0.4s ease",
  }}>
    {children}
  </Typography>
);

export const Footer: FC = () => {
  const T = useSharedTokens();
  const isDark = T.isDark;
  const [email, setEmail] = useState("");
  const hasEmail = email.trim().length > 0;
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(id)));
    }
  };

  const logo = isDark ? logoDark : logoLight;

  const socialSrc: Record<string, string> = {
    facebook: isDark ? FacebookDark : FacebookLight,
    linkedin: isDark ? LinkedInDark : LinkedInLight,
    x:        isDark ? XDark        : XLight,
    insta:    isDark ? InstaDark    : InstaLight,
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: T.bg,
        borderTop: `0.5px solid ${T.border}`,
        px: { xs: "24px", sm: "48px", lg: "80px" },
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "220px 1fr 280px" },
          gap: { xs: "48px", sm: "40px", lg: "64px" },
          py: { xs: "56px", sm: "72px", md: "88px" },
          borderBottom: `0.5px solid ${T.border}`,
          alignItems: "start",
          transition: "border-color 0.4s ease",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: "inline-flex", textDecoration: "none" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Fossilite logo"
              sx={{ width: "110px", height: "auto" }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "13px",
              color: T.tagline,
              lineHeight: 1.8,
              maxWidth: "200px",
              transition: "color 0.4s ease",
              fontFamily: "Prompt"
            }}
          >
            Production-grade AI systems built for companies defining what's next.
          </Typography>

          <Box sx={{ display: "flex", gap: "6px", mt: "4px" }}>
            {SOCIAL_ITEMS.map(({ key, href }) => (
              <Box
                key={key}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "32px",
                  height: "32px",
                  border: `0.5px solid ${T.socialBorder}`,
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    borderColor: T.socialHoverBorder,
                    backgroundColor: T.socialHoverBg,
                    "& img": { opacity: 0.9 },
                  },
                }}
              >
                <Box
                  component="img"
                  src={socialSrc[key]}
                  alt={key}
                  sx={{
                    width: "13px",
                    height: "13px",
                    objectFit: "contain",
                    opacity: T.socialOpacity,
                    filter: T.socialIconFilter,
                    transition: "opacity 0.2s ease, filter 0.4s ease",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${NAV_GROUPS.length}, 1fr)`,
            gap: { xs: "32px", sm: "24px", md: "40px" },
            gridColumn: { xs: "1", sm: "1 / -1", lg: "auto" },
          }}
        >
          {NAV_GROUPS.map((group) => (
            <Box
              key={group.label}
              sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <ColLabel T={T}>{group.label}</ColLabel>
              {group.links.map((link) => (
                <FooterLink
                  key={link.label}
                  link={link}
                  T={T}
                  onSectionClick={handleSectionClick}
                />
              ))}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            gridColumn: { xs: "1", sm: "1 / -1", lg: "auto" },
          }}
        >
          <Box>
            <ColLabel T={T}>Newsletter</ColLabel>
            <Typography
              sx={{
                fontSize: "13px",
                color: T.newsletterDesc,
                lineHeight: 1.7,
                mt: "8px",
                transition: "color 0.4s ease",
              }}
            >
              Get the latest updates on AI development, tools, and releases.
            </Typography>
          </Box>

          <Box
            sx={{
              border: `0.5px solid ${T.inputBorder}`,
              borderRadius: "10px",
              backgroundColor: T.inputBg,
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              transition:
                "border-color 0.25s ease, background-color 0.4s ease, box-shadow 0.25s ease",
              "&:focus-within": {
                borderColor: T.inputFocusBorder,
                boxShadow: isDark
                  ? "0 0 0 3px rgba(187,192,198,0.08)"
                  : "0 0 0 3px rgba(0,25,50,0.07)",
              },
              boxShadow: T.inputShadow,
            }}
          >
            <TextField
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              type="email"
              inputProps={{ "aria-label": "Email for newsletter" }}
              sx={{
                flex: 1,
                px: "14px",
                "& .MuiInput-root": {
                  fontSize: "13px",
                  color: T.inputText,
                  "&::before, &::after": { display: "none" },
                },
                "& input": { py: "12px", color: T.inputText },
                "& input::placeholder": {
                  color: T.placeholder,
                  opacity: 1,
                },
              }}
            />

            <Box
              role="button"
              tabIndex={0}
              aria-label="Subscribe"
              onClick={() => { }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { } }}
              sx={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: hasEmail ? T.sendActiveBg : "transparent",
                borderLeft: `0.5px solid ${T.inputDivider}`,
                cursor: "pointer",
                flexShrink: 0,
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: hasEmail ? T.sendActiveHover : T.sendIdleHoverBg,
                },
              }}
            >
              <RightArrow
                sx={{
                  fontSize: "15px",
                  color: hasEmail ? T.sendActiveIcon : T.sendIdleIcon,
                  transition: "color 0.2s ease",
                }}
              />
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "11px",
              color: T.newsletterDisclaim,
              lineHeight: 1.6,
              transition: "color 0.4s ease",
              fontFamily: "Prompt"
            }}
          >
            No spam. Unsubscribe any time.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          py: { xs: "36px", md: "48px" },
          borderBottom: `0.5px solid ${T.border}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          transition: "border-color 0.4s ease",
        }}
      >
        <Box
          component="img"
          src={fossiliteWordmark}
          alt="Fossilite"
          aria-hidden="true"
          sx={{
            width: "560px",
            height: "auto",
            maxWidth: "100%",
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </Box>

      <Box
        sx={{
          py: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: "12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: T.copyright,
            letterSpacing: "0.02em",
            transition: "color 0.4s ease",
          }}
        >
          © {currentYear} Fossilite. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
```

### src/components/Footer/index.ts
```typescript
export { Footer } from './Footer';
```

---

## Views - Home Page

### src/views/Home/Home.tsx
```typescript
import { FC } from "react";
import { Box } from "@mui/material";
import {
  Hero,
  FirstImageSection,
  FirstGeneralSection,
  SecondImageSection,
  SecondGeneralSection,
  ChatBoxSection,
  CaseStudiesSection,
} from "./subComponents";
import { Layout } from "../../layout"; 

export const Home: FC = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: "background.default" }}>
        <Hero />
        <ChatBoxSection />
        <FirstImageSection />
        <CaseStudiesSection />
        <FirstGeneralSection />
        <SecondImageSection />
        <SecondGeneralSection /> 
      </Box>
    </Layout>
  );
};
```

### src/views/Home/index.ts
```typescript
export { Home } from './Home';
```

### src/views/Home/subComponents/HeroSection/Hero.tsx
```typescript
import { FC } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { RightArrow } from "../../../../assets/Icons";
import { motion } from "framer-motion";
import { useSharedTokens } from "../../../../theme/sharedTokens";
import { scrollToSection } from "../../../../utils/scrollToSection";

const TECH_ITEMS = [
  "GPT-4o", "Claude API", "LangChain", "LangGraph", "CrewAI",
  "MCP Protocol", "RAG Pipelines", "AI Agents", "Pinecone", "FastAPI",
  "Next.js", "PyTorch", "HuggingFace", "Llama 4", "Mistral",
];

export const Hero: FC = () => {
  const T = useSharedTokens();
  const isLight = !T.isDark;

  const bgColor           = T.bg;
  const primaryText       = T.primaryText;
  const secondaryText     = T.secondaryText;
  const badgeBg           = T.tagBg;
  const badgeBorder       = T.pillBorder;
  const badgeDot          = T.accent;
  const badgeLabel        = T.secondaryText;
  const ctaPrimaryBg      = T.ctaPrimaryBg;
  const ctaPrimaryText    = T.ctaPrimaryText;
  const ctaPrimaryHover   = T.ctaPrimaryHover;
  const ctaSecBorder      = T.ctaSecBorder;
  const ctaSecText        = T.ctaSecText;
  const ctaSecHoverText   = T.ctaSecHoverText;
  const ctaSecHoverBorder = T.ctaSecHoverBorder;
  const statsDivider      = T.statsDivider;
  const statsNumColor     = T.statsNum;
  const statsLabelColor   = T.statsLabel;
  const tickerBg          = T.bgAlt2;
  const tickerBorder      = T.border;
  const tickerPillBg      = T.bg;
  const tickerPillBorder  = T.pillBorder;
  const tickerText        = T.secondaryText;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: bgColor,
        transition: "background-color 0.4s ease",
        px: { xs: "24px", sm: "48px", lg: "80px" },
        fontFamily: "Prompt"
      }}
    >
      <Stack alignItems="center" gap={3} sx={{ zIndex: 2, mt: { xs: "80px", md: 0 } }}>

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
        >
          <Box sx={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            border: `0.5px solid ${badgeBorder}`,
            borderRadius: "99px",
            px: "14px", py: "6px",
            backgroundColor: badgeBg,
            transition: "background-color 0.4s ease, border-color 0.4s ease",
          }}>
            <Box sx={{
              width: "6px", height: "6px", borderRadius: "50%",
              backgroundColor: badgeDot,
              transition: "background-color 0.4s ease",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.25 } },
            }} />
            <Typography sx={{
              fontSize: "12px", color: badgeLabel,
              letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500,
              transition: "color 0.4s ease",
            }}>
              AI-Native Software Firm
            </Typography>
          </Box>
        </motion.div>

        <Box>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, type: "spring", bounce: 0.3 }}
          >
            <Typography sx={{
              fontSize: { xs: "52px", sm: "72px", md: "96px", xl: "112px" },
              fontWeight: 500, lineHeight: 0.95,
              color: primaryText,
              letterSpacing: "-0.03em", fontFamily: "Prompt",
              transition: "color 0.4s ease",
            }}>
              Build Operational
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, type: "spring", bounce: 0.3 }}
          >
            <Typography sx={{
              fontSize: { xs: "52px", sm: "72px", md: "96px", xl: "112px" },
              fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.03em",
              fontFamily: "Prompt", 
              ...(isLight
                ? { color: "#BBC0C6" }
                : { color: "transparent", WebkitTextStroke: "1px rgba(255,244,227,0.35)" }
              ),
              transition: "color 0.4s ease",
            }}>
              Intelligence.
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <Typography sx={{
            fontSize: { xs: "15px", sm: "17px" },
            color: secondaryText,
            maxWidth: "480px", lineHeight: 1.7,
            transition: "color 0.4s ease",
          }}>
            Reduce operational friction by identifying workflow bottlenecks and
            automating repetitive manual work through intelligent systems.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} gap={2} alignItems="center">
            <Button
              onClick={() => scrollToSection("contact")}
              sx={{
                px: "24px", py: "12px",
                backgroundColor: ctaPrimaryBg,
                color: ctaPrimaryText,
                fontSize: "14px", fontWeight: 500, textTransform: "none",
                borderRadius: "8px",
                transition: "transform 0.2s, background-color 0.3s, color 0.3s",
                "&:hover": { backgroundColor: ctaPrimaryHover, transform: "translateY(-2px)" },
                "&:active": { transform: "translateY(0)" },
              }}
            >
              Start Your Project
            </Button>
            <Button
              onClick={() => scrollToSection("case-studies")}
              endIcon={<RightArrow />}
              sx={{
                px: "24px", py: "12px",
                backgroundColor: "transparent",
                color: ctaSecText,
                fontSize: "14px", textTransform: "none",
                borderRadius: "8px",
                border: `0.5px solid ${ctaSecBorder}`,
                transition: "color 0.2s, border-color 0.2s, transform 0.2s",
                "&:hover": { color: ctaSecHoverText, borderColor: ctaSecHoverBorder, transform: "translateY(-2px)" },
                "&:active": { transform: "translateY(0)" },
              }}
            >
              View Our Work
            </Button>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          style={{ width: "100%" }}
        >
          <Stack
            direction="row" gap={{ xs: "32px", sm: "56px" }} mt={1}
            sx={{
              borderTop: `0.5px solid ${statsDivider}`,
              pt: 3, justifyContent: "center",
              transition: "border-color 0.4s ease",
            }}
          >
            {[
              { num: "50+",  label: "Products Shipped" },
              { num: "12",   label: "Countries"        },
              { num: "100%", label: "Remote-Native"    },
            ].map(({ num, label }) => (
              <Box key={label} textAlign="center">
                <Typography sx={{
                  fontSize: { xs: "24px", sm: "32px" }, fontWeight: 500,
                  color: statsNumColor, lineHeight: 1,
                  transition: "color 0.4s ease",
                }}>
                  {num}
                </Typography>
                <Typography sx={{
                  fontSize: "12px", color: statsLabelColor,
                  mt: "6px", letterSpacing: "0.04em",
                  transition: "color 0.4s ease",
                }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </motion.div>
      </Stack>

      <Box sx={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        py: "14px",
        borderTop: `0.5px solid ${tickerBorder}`,
        overflow: "hidden", zIndex: 3,
        backgroundColor: tickerBg,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}>
        <Box sx={{
          display: "flex", gap: "10px", width: "max-content",
          animation: "ticker 28s linear infinite",
          "@keyframes ticker": { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0)" } },
        }}>
          {[...TECH_ITEMS, ...TECH_ITEMS].map((item, i) => (
            <Box key={i} sx={{
              px: "14px", py: "5px",
              border: `0.5px solid ${tickerPillBorder}`,
              borderRadius: "99px",
              backgroundColor: tickerPillBg,
              whiteSpace: "nowrap",
              transition: "background-color 0.4s ease, border-color 0.4s ease",
            }}>
              <Typography sx={{
                fontSize: "12px", color: tickerText,
                letterSpacing: "0.04em",
                transition: "color 0.4s ease",
              }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
```

### src/views/Home/subComponents/HeroSection/index.ts
```typescript
export { Hero } from './Hero';
```

### src/views/Home/subComponents/FirstGeneralSection/FirstGeneralSection.tsx
```typescript
import { FC, useState, useEffect, useRef } from "react";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import * as THREE from "three";
import { useSharedTokens } from "../../../../theme/sharedTokens";

const PRINCIPLES = [
  {
    index: "01", title: "Identify the Problem",
    body: "We listen closely to understand your workflows, operational challenges, and areas slowing your team down.",
    speed: 3.0,
  },
  {
    index: "02", title: "Architect.",
    body: "Using proven workflows and implementation experience, we design a system tailored around your operational needs.",
    speed: 6.0,
  },
  {
    index: "03", title: "Bottlenecks.",
    body: "We identify repetitive processes, inefficiencies, and manual dependencies that create friction in day-to-day operations.",
    speed: 1.5,
  },
  {
    index: "04", title: "Deliver.",
    body: "We deploy a custom-built solution designed to integrate smoothly into the way your business already operates.",
    speed: 4.5,
  },
];

export const FirstGeneralSection: FC = () => {
  const T = useSharedTokens();
  const isLight = !T.isDark;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef  = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const materialsRef = useRef<THREE.PointsMaterial[]>([]);

  const bgColor       = T.bg;
  const borderColor   = T.border;
  const eyebrowColor  = T.accent;
  const headlineColor = T.primaryText;
  const headlineFaded = T.fadedText;
  const subTextColor  = T.secondaryText;
  const gridGapColor  = T.border;
  const gridBorder    = T.primaryText;
  const cardBg        = T.bg;
  const cardHoverBg   = isLight ? "rgba(0,25,50,0.03)" : "rgba(255,244,227,0.03)";
  const indexColor    = T.mutedText;
  const titleColor    = T.primaryText;
  const bodyColor     = T.secondaryText;
  const accentColor   = T.accent;

  const defaultParticleColor = T.particlePrimary;
  const hoverParticleColor   = T.accent === "#001932" ? 0x001932 : 0xBBC0C6;

  useEffect(() => {
    if (!containerRef.current) return;

    const width  = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 500;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const group = new THREE.Group();
    scene.add(group);

    const ringCount = 4;
    const particleSystems: THREE.Points[] = [];
    materialsRef.current = [];

    for (let r = 0; r < ringCount; r++) {
      const geometry  = new THREE.BufferGeometry();
      const count     = 400;
      const positions = new Float32Array(count * 3);
      const radius    = 10 + r * 4;

      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2;
        const rand  = (Math.random() - 0.5) * 1.5;
        positions[i * 3]     = Math.cos(theta) * radius + rand;
        positions[i * 3 + 1] = Math.sin(theta) * radius + rand;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.15,
        color: defaultParticleColor,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      materialsRef.current.push(material);
      const points = new THREE.Points(geometry, material);
      group.add(points);
      particleSystems.push(points);
    }

    const clock = new THREE.Clock();

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particleSystems.forEach((system, idx) => {
        const baseSpeed    = PRINCIPLES[idx].speed;
        const currentSpeed = hoveredIndex === idx ? baseSpeed * 2.5 : baseSpeed * 0.5;
        system.rotation.z  = t * 0.05 * currentSpeed * (idx % 2 === 0 ? 1 : -1);
        system.rotation.x  = Math.sin(t * 0.2) * 0.2;

        const material = materialsRef.current[idx];
        if (material) {
          if (hoveredIndex === idx) {
            material.size    = 0.25;
            material.opacity = 0.9;
            material.color.lerp(new THREE.Color(hoverParticleColor), 0.1);
          } else {
            material.size    = 0.12;
            material.opacity = isLight ? 0.35 : 0.40;
            material.color.lerp(new THREE.Color(defaultParticleColor), 0.05);
          }
        }
      });

      group.rotation.y = Math.sin(t * 0.1) * 0.3;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [hoveredIndex, T.isDark]);

  return (
    <Box id="solutions" sx={{
      backgroundColor: bgColor,
      borderTop:    `0.5px solid ${borderColor}`,
      borderBottom: `0.5px solid ${borderColor}`,
      px: { xs: "24px", sm: "48px", lg: "80px" },
      py: { xs: "80px", sm: "100px", md: "130px" },
      position: "relative", overflow: "hidden",
      transition: "background-color 0.4s ease, border-color 0.4s ease",
    }}>
      <Box ref={containerRef} sx={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none",
        opacity: isLight ? 0.45 : 0.65,
        transition: "opacity 0.4s ease",
      }} />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          gap={4}
          mb={{ xs: "56px", md: "72px" }}
        >
          <Box>
            <Typography sx={{
              fontSize: "11px", color: eyebrowColor,
              letterSpacing: "0.08em", textTransform: "uppercase",
              fontWeight: 600, mb: "16px",
              transition: "color 0.4s ease",
            }}>
              ✦ Why we're different
            </Typography>
            <Typography sx={{
              fontSize: { xs: "32px", sm: "44px", md: "56px" },
              fontWeight: 500, color: headlineColor,
              lineHeight: 1.1, letterSpacing: "-0.02em",
              fontFamily: "Prompt" , maxWidth: "520px",
              transition: "color 0.4s ease",
            }}>
              We consult and{" "}
              <Box component="span" sx={{ color: headlineFaded, transition: "color 0.4s ease" }}>
                We build.
              </Box>
            </Typography>
          </Box>

          <Typography sx={{
            fontSize: "15px", color: subTextColor,
            lineHeight: 1.75, maxWidth: "340px",
            transition: "color 0.4s ease",
          }}>
            We start by understanding how your operations work today — then
            identify where automation and intelligent systems can create
            measurable impact.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: "1px", md: "1px" }} sx={{
          backgroundColor: gridGapColor,
          border: `2px solid ${gridBorder}`,
          transition: "background-color 0.4s ease, border-color 0.4s ease",
        }}>
          {PRINCIPLES.map((p, i) => (
            <Grid key={p.index} size={{ xs: 12, sm: 6 }}>
              <Box
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  p: { xs: "28px", sm: "36px" },
                  backgroundColor: cardBg,
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "crosshair",
                  position: "relative",
                  "&:hover": { backgroundColor: cardHoverBg },
                }}
              >
                <Box sx={{
                  position: "absolute", top: 0, left: 0,
                  width: "4px", height: "100%",
                  backgroundColor: hoveredIndex === i ? accentColor : "transparent",
                  transition: "background-color 0.3s ease",
                }} />

                <Typography sx={{
                  fontSize: "11px",
                  color: hoveredIndex === i ? accentColor : indexColor,
                  fontFamily: "Prompt", mb: "20px",
                  letterSpacing: "0.04em",
                  transition: "color 0.3s ease",
                }}>
                  {p.index}
                </Typography>

                <Typography sx={{
                  fontSize: { xs: "18px", sm: "20px" },
                  fontWeight: 500, color: titleColor,
                  mb: "12px", letterSpacing: "-0.01em",
                  transition: "color 0.4s ease",
                }}>
                  {p.title}
                </Typography>

                <Typography sx={{
                  fontSize: "14px", color: bodyColor,
                  lineHeight: 1.75, transition: "color 0.4s ease",
                }}>
                  {p.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
```

### src/views/Home/subComponents/FirstGeneralSection/index.ts
```typescript
export { FirstGeneralSection } from './FirstGeneralSection';
```

### src/views/Home/subComponents/FirstImageSection/FirstImageSection.tsx
```typescript
import { FC, useEffect, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import * as THREE from "three";
import { Snowflake, Sparkles } from "lucide-react";
import { useSharedTokens } from "../../../../theme/sharedTokens";
import AgentTerminal from "../../../../components/AgentTerminal/AgentTerminal";
import { PerformanceNodes } from "../../../../components/model3DAnimation";

const TopGlow: FC<{ tokens: ReturnType<typeof useSharedTokens> }> = ({ tokens }) => (
  <Box sx={{
    position: "absolute", top: 0, left: "50%",
    transform: "translateX(-50%)",
    width: "60%", height: "1px",
    background: tokens.glowTop,
    pointerEvents: "none", zIndex: 2,
  }} />
);

const CornerAccents: FC<{ color: string }> = ({ color }) => (
  <>
    <Box sx={{ position: "absolute", top: "16px", left: "16px", width: "20px", height: "20px", borderTop: `0.5px solid ${color}`, borderLeft: `0.5px solid ${color}`, zIndex: 2 }} />
    <Box sx={{ position: "absolute", bottom: "16px", right: "16px", width: "20px", height: "20px", borderBottom: `0.5px solid ${color}`, borderRight: `0.5px solid ${color}`, zIndex: 2 }} />
  </>
);

interface ColdAnimationProps { type: "frost-nodes" | "crystal-cage"; isDark: boolean; }

const ColdAnimation: FC<ColdAnimationProps> = ({ type, isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width  = container.clientWidth  || 300;
    const height = container.clientHeight || 300;

    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    let animationFrameId: number;

    const primaryColor   = isDark ? 0xBBC0C6 : 0x001932;
    const secondaryColor = isDark ? 0x3a3a3a : 0x3a5a7a;

    if (type === "frost-nodes") {
      const particleCount = 180;
      const positions  = new Float32Array(particleCount * 3);
      const colors     = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      const baseColor  = new THREE.Color(primaryColor);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        colors[i * 3]     = baseColor.r;
        colors[i * 3 + 1] = baseColor.g;
        colors[i * 3 + 2] = baseColor.b;
        velocities[i * 3]     = (Math.random() - 0.5) * 0.005;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color",    new THREE.BufferAttribute(colors,    3));

      const material = new THREE.PointsMaterial({
        size: 0.06, vertexColors: true, transparent: true,
        opacity: isDark ? 0.8 : 0.55,
        blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      });
      const points = new THREE.Points(geometry, material);
      group.add(points);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const pos = points.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3]     += velocities[i * 3];
          pos[i * 3 + 1] += velocities[i * 3 + 1];
          pos[i * 3 + 2] += velocities[i * 3 + 2];
          if (Math.abs(pos[i * 3])     > 4) velocities[i * 3]     *= -1;
          if (Math.abs(pos[i * 3 + 1]) > 4) velocities[i * 3 + 1] *= -1;
          if (Math.abs(pos[i * 3 + 2]) > 4) velocities[i * 3 + 2] *= -1;
        }
        points.geometry.attributes.position.needsUpdate = true;
        group.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();

    } else {
      const outerGeo  = new THREE.IcosahedronGeometry(2, 0);
      const outerMat  = new THREE.MeshBasicMaterial({
        color: secondaryColor, wireframe: true, transparent: true,
        opacity: isDark ? 0.4 : 0.25,
      });
      group.add(new THREE.Mesh(outerGeo, outerMat));

      const innerGeo  = new THREE.OctahedronGeometry(1, 0);
      const innerMat  = new THREE.MeshBasicMaterial({
        color: primaryColor, wireframe: true, transparent: true,
        opacity: isDark ? 0.6 : 0.45,
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      group.add(innerMesh);

      const ringGeo = new THREE.RingGeometry(2.5, 2.6, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: primaryColor, side: THREE.DoubleSide, transparent: true,
        opacity: isDark ? 0.2 : 0.15,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      group.add(ring);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        group.rotation.y     += 0.002;
        group.rotation.x     += 0.001;
        innerMesh.rotation.y -= 0.005;
        renderer.render(scene, camera);
      };
      animate();
    }

    const handleResize = () => {
      const w = container.clientWidth, h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      scene.clear();
    };
  }, [type, isDark]);

  return (
    <Box ref={containerRef} sx={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} />
  );
};

export const FirstImageSection: FC = () => {
  const T = useSharedTokens();
  const isDark = T.isDark;

  return (
    <Box sx={{
      backgroundColor: T.bg,
      px: { xs: "24px", sm: "48px", lg: "80px" },
      py: { xs: "80px", sm: "100px", md: "130px" },
      transition: "background-color 0.4s ease",
    }}>

      <Box id="about" sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "5fr 4fr" },
        gap: "1px",
        backgroundColor: T.border,
        border: `1px solid ${T.gridBorder}`,
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: T.boxShadow,
        isolation: "isolate",
        transition: "border-color 0.4s ease, background-color 0.4s ease",
      }}>

        <Box sx={{
          backgroundColor: T.bg,
          p: { xs: "32px", sm: "40px", md: "48px" },
          display: "flex", flexDirection: "column",
          justifyContent: "space-between", gap: "32px",
          position: "relative",
          transition: "background-color 0.4s ease",
        }}>
          <TopGlow tokens={T} />

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography sx={{ fontSize: "11px", color: T.secondaryText, fontFamily: "Prompt", letterSpacing: "0.06em" }}>01</Typography>
            <Box sx={{ width: "40px", height: "1px", backgroundColor: T.stroke }} />
            <Typography sx={{ fontSize: "11px", color: T.secondaryText, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
              How it works
            </Typography>
          </Box>

          <Box>
            <Typography sx={{
              fontSize: { xs: "30px", sm: "38px", md: "46px", lg: "52px" },
              fontWeight: 500, color: T.primaryText,
              lineHeight: 1.1, letterSpacing: "-0.025em",
              fontFamily: "Prompt", mb: "12px",
              transition: "color 0.4s ease",
            }}>
              Built for scale,
            </Typography>
            <Typography sx={{
              fontSize: { xs: "30px", sm: "38px", md: "46px", lg: "52px" },
              fontWeight: 500, lineHeight: 1.1,
              letterSpacing: "-0.025em", fontFamily: "Prompt",
              color: T.fadedText, transition: "color 0.4s ease",
            }}>
              not just for demos.
            </Typography>
          </Box>

          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.8, maxWidth: "420px", transition: "color 0.4s ease" }}>
            Built to reduce manual dependency and help teams reclaim 21–35% of operational labor time through connected workflows.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Production-grade", "Scalable", "AI-native"].map((tag) => (
              <Box key={tag} sx={{
                px: "12px", py: "5px",
                border: `1px solid ${T.pillBorder}`,
                borderRadius: "99px",
                backgroundColor: T.tagBg,
                transition: "background-color 0.4s ease, border-color 0.4s ease",
              }}>
                <Typography sx={{ fontSize: "12px", color: T.secondaryText, transition: "color 0.4s ease" }}>
                  {tag}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{
          backgroundColor: T.bg,
          position: "relative",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          p: { xs: "28px", sm: "32px" },
          minHeight: { xs: "300px", md: "420px" },
          overflow: "hidden",
          transition: "background-color 0.4s ease",
        }}>
          <TopGlow tokens={T} />
          <Box sx={{
            position: "absolute", top: "40%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "280px", height: "280px",
            background: `radial-gradient(ellipse, ${T.accentGlow} 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />
          <ColdAnimation type="frost-nodes" isDark={isDark} />
          <AgentTerminal />
          <Box sx={{ zIndex: 12, position: "absolute", bottom: "16px", left: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Snowflake size={13} color={T.accent} />
            <Typography sx={{ fontSize: "10px", color: T.accent, fontFamily: "Prompt", letterSpacing: "0.06em" }}>
              LIVE: COLD FROST NODES SYSTEM
            </Typography>
          </Box>
        </Box>

        <Box sx={{
          backgroundColor: T.cardBgAlt,
          gridColumn: { xs: "1", md: "1 / -1" },
          p: { xs: "24px 32px", sm: "28px 48px" },
          display: "flex", flexDirection: { xs: "column", sm: "row" },
          borderTop: `1px solid ${T.border}`,
          transition: "background-color 0.4s ease, border-color 0.4s ease",
        }}>
          {[
            { num: "50+",    label: "Products shipped" },
            { num: "40–60%", label: "Faster delivery"  },
            { num: "100%",   label: "Human reviewed"   },
          ].map(({ num, label }, i) => (
            <Box key={label} sx={{
              flex: 1,
              px: { xs: "0", sm: "24px" },
              py: { xs: "16px", sm: "8px" },
              borderLeft: { xs: "none", sm: i === 0 ? "none" : `1px solid ${T.border}` },
              borderTop:  { xs: i === 0 ? "none" : `1px solid ${T.border}`, sm: "none" },
              transition: "border-color 0.4s ease",
            }}>
              <Typography sx={{ fontSize: { xs: "20px", sm: "24px" }, fontWeight: 500, color: T.primaryText, lineHeight: 1, mb: "6px", transition: "color 0.4s ease" }}>
                {num}
              </Typography>
              <Typography sx={{ fontSize: "11px", color: T.secondaryText, letterSpacing: "0.04em", transition: "color 0.4s ease" }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ my: { xs: "72px", sm: "96px", md: "120px" }, display: "flex", alignItems: "center", gap: "20px" }}>
        <Box sx={{ flex: 1, height: "0.5px", backgroundColor: T.border, transition: "background-color 0.4s ease" }} />
        <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", border: `0.5px solid ${T.secondaryText}`, backgroundColor: T.cardBg, transition: "border-color 0.4s ease, background-color 0.4s ease" }} />
        <Box sx={{ flex: 1, height: "0.5px", backgroundColor: T.border, transition: "background-color 0.4s ease" }} />
      </Box>

      <Box id="products" sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: "1px",
        backgroundColor: T.border,
        border: `2px solid ${T.gridBorder}`,
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: T.boxShadow,
        transition: "border-color 0.4s ease, background-color 0.4s ease",
      }}>

        <Box sx={{
          backgroundColor: T.bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          p: { xs: "32px", sm: "40px" },
          position: "relative",
          minHeight: { xs: "280px", md: "420px" },
          overflow: "hidden",
          order: { xs: 2, md: 1 },
          transition: "background-color 0.4s ease",
        }}>
          <TopGlow tokens={T} />
          <CornerAccents color={T.secondaryText} />
          <PerformanceNodes />
          <Box sx={{ zIndex: 12, position: "absolute", bottom: "16px", left: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Sparkles size={13} color={T.accent} />
            <Typography sx={{ fontSize: "10px", color: T.accent, fontFamily: "Prompt", letterSpacing: "0.06em" }}>
              LIVE: 3D CYBERNETIC GEOMETRY
            </Typography>
          </Box>
        </Box>

        <Box sx={{
          backgroundColor: T.bg,
          p: { xs: "32px", sm: "40px", md: "48px" },
          display: "flex", flexDirection: "column",
          justifyContent: "center", gap: "28px",
          position: "relative",
          order: { xs: 1, md: 2 },
          transition: "background-color 0.4s ease",
        }}>
          <TopGlow tokens={T} />

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography sx={{ fontSize: "11px", color: T.secondaryText, fontFamily: "Prompt", letterSpacing: "0.06em" }}>02</Typography>
            <Box sx={{ width: "40px", height: "0.5px", backgroundColor: T.stroke }} />
            <Typography sx={{ fontSize: "11px", color: T.secondaryText, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
              Our approach
            </Typography>
          </Box>

          <Typography sx={{
            fontSize: { xs: "30px", sm: "36px", md: "42px" },
            fontWeight: 500, color: T.primaryText,
            lineHeight: 1.1, letterSpacing: "-0.02em",
            fontFamily: "Prompt" , transition: "color 0.4s ease",
          }}>
            Engineers first.{" "}
            <Box component="span" sx={{ color: T.fadedText, transition: "color 0.4s ease" }}>
              AI-enhanced.
            </Box>
          </Typography>

          <Stack gap={2}>
            <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.8, transition: "color 0.4s ease" }}>
              We combine structured systems thinking with intelligent automation to create workflows that are efficient, scalable, and built for real operational use. Every system is designed to reduce manual friction, improve operational clarity, and support teams.
            </Typography>
          </Stack>

          <Box sx={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "1px", backgroundColor: T.border,
            border: `0.5px solid ${T.border}`,
            borderRadius: "12px", overflow: "hidden",
            transition: "background-color 0.4s ease, border-color 0.4s ease",
          }}>
            {[
              { num: "40–60%", label: "Faster delivery" },
              { num: "100%",   label: "Human reviewed"  },
            ].map(({ num, label }) => (
              <Box key={label} sx={{ backgroundColor: T.cardBgAlt, px: "20px", py: "18px", transition: "background-color 0.4s ease" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: 500, color: T.primaryText, lineHeight: 1, mb: "6px", transition: "color 0.4s ease" }}>
                  {num}
                </Typography>
                <Typography sx={{ fontSize: "11px", color: T.secondaryText, letterSpacing: "0.04em", transition: "color 0.4s ease" }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
```

### src/views/Home/subComponents/FirstImageSection/index.ts
```typescript
export { FirstImageSection } from './FirstImageSection';
```

### src/views/Home/subComponents/SecondGeneralSection/SecondGeneralSection.tsx
```typescript
import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { RightArrow } from "../../../../assets/Icons";
import { useSharedTokens } from "../../../../theme/sharedTokens";

function useInView(threshold = 0.15) {
  const ref  = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
}
const Reveal: FC<RevealProps> = ({ children, delay = 0, from = "bottom" }) => {
  const { ref, visible } = useInView();
  const base = {
    bottom: { transform: "translateY(28px)", opacity: 0 },
    left:   { transform: "translateX(-28px)", opacity: 0 },
    right:  { transform: "translateX(28px)",  opacity: 0 },
    scale:  { transform: "scale(0.94)",        opacity: 0 },
  }[from];
  return (
    <Box
      ref={ref}
      sx={{
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                     transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...(visible ? { opacity: 1, transform: "none" } : base),
      }}
    >
      {children}
    </Box>
  );
};

const AnimatedNumber: FC<{ target: string; color: string; visible: boolean; delay: number }> = ({
  target, color, visible, delay,
}) => {
  const [display, setDisplay] = useState("0");

  const numMatch = /^\d+/.test(target);
  const num      = numMatch ? parseInt(target, 10) : 0;
  const suffix   = target.replace(/^\d+/, "");

  useEffect(() => {
    if (!visible) return;
    if (!numMatch) { setDisplay(target); return; }

    let rafId: number;
    let start: number | null = null;
    const duration = 1200;

    const step = (ts: number) => {
      if (!start) start = ts;
      const prog  = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      setDisplay(`${Math.round(eased * num)}${suffix}`);
      if (prog < 1) { rafId = requestAnimationFrame(step); }
    };

    const timer = setTimeout(() => { rafId = requestAnimationFrame(step); }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, [visible, target, delay, numMatch, num, suffix]);

  return (
    <Typography sx={{
      fontSize: { xs: "22px", sm: "28px" }, fontWeight: 500,
      color, lineHeight: 1,
      transition: "color 0.4s ease",
      fontVariantNumeric: "tabular-nums",
    }}>
      {display}
    </Typography>
  );
};

export const SecondGeneralSection: FC = () => {
  const T = useSharedTokens();
  const isDark = T.isDark;

  const { ref: statsRef, visible: statsVisible } = useInView(0.3);

  const STATS = [
    { num: "50+",   label: "Clients shipped"   },
    { num: "12+",   label: "Countries"         },
    { num: "6 wks", label: "Avg. MVP delivery" },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: T.inputBg,
      borderRadius: "8px",
      color: T.inputText,
      fontSize: "14px",
      transition: "border-color 0.2s ease",
      "& fieldset": { borderColor: T.inputBorder, borderWidth: "0.5px" },
      "&:hover fieldset": { borderColor: T.inputHoverBorder },
      "&.Mui-focused fieldset": { borderColor: T.inputFocusBorder, borderWidth: "1px" },
    },
    "& .MuiInputLabel-root": { color: T.inputLabel, fontSize: "14px" },
    "& .MuiInputLabel-root.Mui-focused": { color: T.inputFocusBorder },
  };

  return (
    <Box
     id="contact"
      sx={{
        backgroundColor: T.bg,
        borderTop: `0.5px solid ${T.border}`,
        position: "relative",
        overflow: "hidden",
        px: { xs: "24px", sm: "48px", lg: "80px" },
        py: { xs: "100px", sm: "130px", md: "160px" },
        transition: "background-color 0.5s ease, border-color 0.5s ease",
      }}
    >
      <Box sx={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(${T.gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        zIndex: 0, pointerEvents: "none",
      }} />

      <Box sx={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "400px",
        background: T.radialGlow,
        zIndex: 0, pointerEvents: "none",
        transition: "background 0.5s ease",
      }} />

      <Box
        sx={{
          position: "relative", zIndex: 2,
          maxWidth: "1200px", mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "56px", md: "72px" },
          alignItems: "center",
        }}
      >
        <Stack alignItems="flex-start" textAlign="left" gap={4}>

          <Reveal delay={0}>
            <Typography sx={{
              fontSize: "11px", color: T.eyebrow,
              letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500,
              transition: "color 0.4s ease",
            }}>
              ✦ Let's talk
            </Typography>
          </Reveal>

          <Box>
            <Reveal delay={80}>
              <Typography sx={{
                fontSize: { xs: "36px", sm: "48px", md: "56px", lg: "64px" },
                fontWeight: 600, color: T.headline,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontFamily: "Prompt",
                transition: "color 0.4s ease",
              }}>
                Ready to ship
              </Typography>
            </Reveal>

            <Reveal delay={160}>
              <Typography sx={{
                fontSize: { xs: "36px", sm: "48px", md: "56px", lg: "64px" },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontFamily: "Prompt",
                ...(isDark
                  ? { color: "transparent", WebkitTextStroke: `1.5px ${T.headlineStroke}` }
                  : { color: T.headlineFaded }
                ),
                transition: "color 0.4s ease",
              }}>
                production AI?
              </Typography>
            </Reveal>
          </Box>

          <Reveal delay={240}>
            <Typography sx={{
              fontSize: { xs: "14px", sm: "16px" }, color: T.subText,
              maxWidth: "480px",
              lineHeight: 1.8,
              fontFamily: "Prompt", fontStyle: "italic",
              transition: "color 0.4s ease",
            }}>
              Build systems that remove operational bottlenecks, reduce repetitive
              work, and support scalable execution across your business.
            </Typography>
          </Reveal>

          <Box
            ref={statsRef}
            sx={{
              mt: "8px", pt: "32px",
              borderTop: `0.5px solid ${T.statsDivider}`,
              width: "100%", maxWidth: "480px",
              display: "flex", justifyContent: "flex-start",
              gap: { xs: "28px", sm: "56px" },
              transition: "border-color 0.4s ease",
            }}
          >
            {STATS.map(({ num, label }, i) => (
              <Box
                key={label}
                textAlign="center"
                sx={{
                  opacity:   statsVisible ? 1 : 0,
                  transform: statsVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms,
                               transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
                }}
              >
                <AnimatedNumber
                  target={num}
                  color={T.statsNum}
                  visible={statsVisible}
                  delay={i * 120}
                />
                <Typography sx={{
                  fontSize: "11px", color: T.statsLabel,
                  mt: "6px", letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "color 0.4s ease",
                }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

        </Stack>

        <Reveal delay={200} from="right">
          <Box component="form" onSubmit={handleSubmit} sx={{
            p: { xs: "24px", sm: "32px" },
            borderRadius: "16px",
            backgroundColor: T.formBg,
            border: `0.5px solid ${T.formBorder}`,
            transition: "background-color 0.4s ease, border-color 0.4s ease",
          }}>
            {sent ? (
              <Stack alignItems="center" justifyContent="center" gap={1.5} sx={{ minHeight: "260px", textAlign: "center" }}>
                <Typography sx={{ fontFamily: "Prompt", fontSize: "22px", color: T.formTitle }}>
                  Thanks for reaching out
                </Typography>
                <Typography sx={{ fontSize: "14px", color: T.formSub, lineHeight: 1.7, maxWidth: "320px" }}>
                  We've received your message and will get back to you shortly.
                </Typography>
              </Stack>
            ) : (
              <>
                <Typography sx={{ fontFamily: "Prompt", fontSize: { xs: "18px", sm: "20px" }, color: T.formTitle }}>
                  Tell us about your project
                </Typography>
                <Typography sx={{ fontSize: "13px", color: T.formSub, mt: "6px", mb: "24px", lineHeight: 1.6 }}>
                  Share a few details and we'll be in touch within one business day.
                </Typography>

                <Stack gap={2.5}>
                  <TextField
                    required label="Name" fullWidth size="small"
                    value={form.name} onChange={handleChange("name")} sx={inputSx}
                  />
                  <TextField
                    required type="email" label="Email" fullWidth size="small"
                    value={form.email} onChange={handleChange("email")} sx={inputSx}
                  />
                  <TextField
                    required label="Message" fullWidth multiline minRows={4}
                    value={form.message} onChange={handleChange("message")} sx={inputSx}
                  />

                  <Button
                    type="submit" fullWidth endIcon={<RightArrow />}
                    sx={{
                      mt: "4px", py: "13px",
                      backgroundColor: T.ctaPrimaryBg,
                      color:           T.ctaPrimaryText,
                      fontSize: "14px", fontWeight: 500,
                      textTransform: "none", borderRadius: "8px",
                      letterSpacing: "0.01em",
                      transition: "background-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease",
                      boxShadow: isDark
                        ? "0 4px 20px rgba(255,244,227,0.12)"
                        : "0 4px 20px rgba(0,25,50,0.18)",
                      "&:hover": {
                        backgroundColor: T.ctaPrimaryHover,
                        transform: "translateY(-2px)",
                        boxShadow: isDark
                          ? "0 8px 32px rgba(255,244,227,0.18)"
                          : "0 8px 32px rgba(0,25,50,0.26)",
                      },
                      "&:active": { transform: "scale(0.97)" },
                      "& .MuiButton-endIcon svg": { filter: T.ctaPrimaryIcon },
                    }}
                  >
                    Work with us
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        </Reveal>

      </Box>
    </Box>
  );
};
```

### src/views/Home/subComponents/SecondGeneralSection/index.ts
```typescript
export { SecondGeneralSection } from './SecondGeneralSection';
```

---

## Additional Notes

### Key Features Implemented:
1. **Smooth Scrolling**: Lenis library with custom easing
2. **Theme System**: Centralized shared tokens for light/dark modes
3. **3D Graphics**: Three.js particle systems and animations
4. **Animations**: Framer Motion for scroll reveals and transitions
5. **Responsive Design**: Mobile-first approach with MUI breakpoints
6. **Form Handling**: Contact form with validation
7. **Navigation**: Smooth scroll to sections with active state tracking

### Design Tokens:
- **Light Theme**: Cream (#FFF4E3) background, Midnight (#001932) text
- **Dark Theme**: Black (#161616) background, Cream (#FFF4E3) text
- **Accent**: Grey Cloud (#BBC0C6) for secondary elements
- **Font**: Prompt (Google Fonts)

### Performance Optimizations:
- Lazy loading for 3D components
- Optimized Three.js renderers with pixel ratio limits
- CSS transitions for smooth animations
- Code splitting ready (manual chunks can be configured)

---

## Usage Instructions for LLM Redesign

To use this documentation for redesigning the website with an LLM:

1. **Preserve Structure**: Maintain the component hierarchy and folder structure
2. **Theme System**: Use the `useSharedTokens()` hook for all styling
3. **Animations**: Keep Lenis for smooth scrolling and Framer Motion for animations
4. **3D Elements**: Preserve Three.js implementations in FirstImageSection
5. **Responsive**: Maintain MUI breakpoint system
6. **Colors**: Use the centralized color palette from sharedTokens.ts
7. **Typography**: Keep Prompt font family
8. **Spacing**: Maintain consistent padding/margins using MUI spacing system

This complete codebase documentation provides everything needed to understand, modify, or redesign the website while maintaining its core functionality and design system.
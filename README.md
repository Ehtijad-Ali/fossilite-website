# Fossilite Website

This repository is a React + TypeScript + Vite landing/marketing website for Fossilite AI. It is structured as a modern single-page experience with section-based navigation, custom theming, smooth scrolling, and reusable UI components.

This README is designed to be a single handoff file for an LLM or another developer who needs to understand and redesign the project.

---

## 1. Project Summary

- App type: marketing / product website
- Stack: React, TypeScript, Vite, Material UI, React Router, Framer Motion, Lenis, Three.js
- Main goals:
  - present the brand and product story
  - provide polished animated sections and a premium visual language
  - support smooth in-page navigation and a light/dark visual system

---

## 2. Tech Stack

- React 18
- TypeScript
- Vite
- Material UI (MUI)
- Emotion
- React Router DOM
- Framer Motion / Motion
- Lenis (smooth scrolling)
- Three.js / React Three Fiber / Drei
- ESLint + Prettier

---

## 3. Scripts

Run these from the project root:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Package scripts are defined in package.json:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "start": "vite preview --host 0.0.0.0"
  }
}
```

---

## 4. Project Structure

```text
fossilite-website-main/
├── public/
│   └── fonts/
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── fonts/
│   │   ├── Icons/
│   │   │   ├── FeaturedIcon1.tsx
│   │   │   ├── index.ts
│   │   │   ├── LogoIcon.tsx
│   │   │   ├── MenuIconDark.tsx
│   │   │   ├── MenuIconLight.tsx
│   │   │   ├── RightArrow.tsx
│   │   │   └── animated/
│   │   ├── Images/
│   │   │   ├── CodeImages/
│   │   │   ├── Featured/
│   │   │   ├── SocialIcons/
│   │   │   └── Fossilite.svg
│   │   └── videos/
│   ├── components/
│   │   ├── AIBrain.tsx
│   │   ├── index.ts
│   │   ├── model3DAnimation.tsx
│   │   ├── PageLoader.tsx
│   │   ├── AgentTerminal/
│   │   │   └── AgentTerminal.tsx
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── Navbar/
│   │       ├── Navbar.tsx
│   │       └── index.ts
│   ├── layout/
│   │   └── MainLayout/
│   │       ├── MainLayout.tsx
│   │       └── index.ts
│   ├── models/
│   ├── theme/
│   │   ├── components.ts
│   │   ├── index.ts
│   │   ├── palette.ts
│   │   ├── theme.tsx
│   │   └── typography.ts
│   ├── utils/
│   │   ├── lenis.ts
│   │   └── scrollToSection.ts
│   └── views/
│       ├── index.ts
│       ├── About/
│       │   ├── About.tsx
│       │   └── index.ts
│       ├── Home/
│       │   ├── Home.tsx
│       │   ├── index.ts
│       │   └── subComponents/
│       │       ├── index.ts
│       │       ├── CaseStudiesSection/
│       │       ├── ChatBoxSection/
│       │       ├── FirstGeneralSection/
│       │       ├── FirstImageSection/
│       │       ├── HeroSection/
│       │       ├── LogoStrip/
│       │       ├── SecondGeneralSection/
│       │       └── SecondImageSection/
│       └── Products/
│           ├── Products.tsx
│           └── index.ts
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 5. Core Application Flow

### App entry
The application bootstraps in src/main.tsx and wraps everything in the theme provider and browser router.

```tsx
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './theme'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
```

### Routing
Routing is defined in src/App.tsx.

```tsx
// src/App.tsx
import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from "./components";
import { Home, Products } from './views'
import About from './views/About/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prodcuts' element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
```

### Home page composition
The home page is assembled from reusable sections under src/views/Home/subComponents.

```tsx
// src/views/Home/Home.tsx
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

---

## 6. Theme System

The project uses a custom Material UI theme setup in src/theme.

```tsx
// src/theme/theme.tsx
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { FC, ReactNode, useMemo, createContext, useContext } from 'react';
import getComponents from './components';
import getPalette from './palette';
import typography from './typography';

const ThemeModeContext = createContext<{
  toggleMode: () => void;
  mode: 'light' | 'dark';
}>({
  toggleMode: () => {},
  mode: 'light',
});

export const useThemeMode = () => useContext(ThemeModeContext);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const mode: 'light' | 'dark' = 'light';
  const toggleMode = () => {};

  const baseTheme = useMemo(
    () => createTheme({ typography, palette: getPalette(mode) }),
    [mode],
  );

  const theme = useMemo(
    () => createTheme(baseTheme, { components: getComponents(baseTheme) }),
    [baseTheme]
  );

  return (
    <ThemeModeContext.Provider value={{ toggleMode, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProvider;
```

---

## 7. Key UI Components

### Navbar
The navbar uses MUI, custom theme tokens, scroll detection, and a mobile drawer.

```tsx
// src/components/Navbar/Navbar.tsx
const navItems = [
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Solutions", id: "solutions" },
  { label: "Resources", id: "resources" },
  { label: "Use Cases", id: "use-cases" },
];
```

### Footer
The footer includes navigation links, a newsletter input, social icons, and route-aware section scrolling.

```tsx
// src/components/Footer/Footer.tsx
const NAV_GROUPS = [
  {
    label: "Company",
    links: [
      { label: "About Us", id: "about" },
      { label: "Products", id: "products" },
      { label: "Solutions", id: "solutions" },
      { label: "Resources", id: "resources" },
      { label: "Use Cases", id: "use-cases" },
    ],
  },
];
```

---

## 8. Utilities

### Smooth scroll helper

```ts
// src/utils/scrollToSection.ts
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
```

### Lenis integration

```ts
// src/utils/lenis.ts
import Lenis from 'lenis';

export const lenis = new Lenis({ duration: 1.2, smooth: true });

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

---

## 9. Notes for Redesigning This Project

If you want to redesign this website with another LLM, give it this README plus the repository contents and ask for one of these prompts:

```text
Redesign this website while preserving the same structure, navigation, and premium visual style. Keep React, TypeScript, Vite, and MUI. Improve the layout, typography, spacing, color system, and section composition while retaining the same content architecture.
```

Or a more specific prompt:

```text
Create a modern, cinematic redesign of this Fossilite marketing website. Preserve the current routing structure and section hierarchy, but refresh the UI with a stronger brand system, better motion, and more polished component styling.
```

---

## 10. Quick Start

```bash
git clone <repo-url>
cd fossilite-website-main
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

---

## 11. Source Code Snapshot for Handoff

The sections above describe the architecture, but this project is also meant to be directly reusable by another LLM. The following source snapshots capture the most important implementation files so the repository can be understood without opening every file manually.

### 11.1 package.json

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
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/material": "^6.3.1",
    "@react-three/fiber": "^8.17.10",
    "framer-motion": "^12.38.0",
    "lenis": "^1.3.23",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1",
    "three": "^0.183.2"
  }
}
```

### 11.2 Main entry files

```tsx
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './theme'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
```

```tsx
// src/App.tsx
import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from "./components";
import { Home, Products } from './views'
import About from './views/About/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prodcuts' element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
```

### 11.3 Theme and design system

```tsx
// src/theme/theme.tsx
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { FC, ReactNode, useMemo, createContext, useContext } from 'react';
import getComponents from './components';
import getPalette from './palette';
import typography from './typography';

const ThemeModeContext = createContext({
  toggleMode: () => {},
  mode: 'light',
});

export const useThemeMode = () => useContext(ThemeModeContext);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const mode: 'light' | 'dark' = 'light';
  const toggleMode = () => {};

  const baseTheme = useMemo(
    () => createTheme({ typography, palette: getPalette(mode) }),
    [mode],
  );

  const theme = useMemo(
    () => createTheme(baseTheme, { components: getComponents(baseTheme) }),
    [baseTheme]
  );

  return (
    <ThemeModeContext.Provider value={{ toggleMode, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProvider;
```

```ts
// src/theme/palette.ts
const getPalette = (mode: 'light' | 'dark') => ({
  mode,
  primary: {
    main: mode === 'light' ? '#000000' : '#ffffff',
    contrastText: mode === 'light' ? '#ffffff' : '#000000',
  },
  background: {
    default: mode === 'light' ? '#ffffff' : '#040404',
    paper: mode === 'light' ? '#f5f5f5' : '#080808',
  },
  text: {
    primary: mode === 'light' ? '#0a0a0a' : '#ffffff',
    secondary: mode === 'light' ? '#555555' : '#888888',
  },
});
```

```ts
// src/theme/typography.ts
const typography = {
  fontFamily: ['Prompt', 'sans-serif'].join(','),
  h2: { fontSize: '32px' },
  h3: { fontWeight: 'bold', fontSize: '24px' },
  body2: { fontSize: '13px' },
  button: { fontSize: '13px' },
};
```

### 11.4 Layout, loaders, and scrolling

```tsx
// src/layout/MainLayout/MainLayout.tsx
export const Layout: FC<LayoutProps> = ({ children }) => {
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    setLenis(lenis);
    lenis.stop();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <Box>
      <AnimatePresence>
        {!loaderDone && <PageLoader onFinish={() => setLoaderDone(true)} />}
      </AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loaderDone ? 1 : 0 }}>
        <Box>{children}</Box>
      </motion.div>
    </Box>
  );
};
```

```ts
// src/utils/scrollToSection.ts
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = 100;
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(el, { offset: -offset });
  } else {
    const top = el.getBoundingClientRect().top + globalThis.scrollY - offset;
    globalThis.scrollTo({ top, behavior: 'smooth' });
  }
};
```

### 11.5 Main page composition

```tsx
// src/views/Home/Home.tsx
export const Home: FC = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: 'background.default' }}>
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

### 11.6 Section component implementations

```tsx
// src/views/Home/subComponents/HeroSection/Hero.tsx
export const Hero: FC = () => {
  const { mode } = useThemeMode();
  const isLight = mode === 'light';

  return (
    <Box sx={{ minHeight: '100vh', textAlign: 'center', px: { xs: '24px', sm: '48px', lg: '80px' } }}>
      <Typography variant="h1">Build Operational Intelligence.</Typography>
      <Button onClick={() => scrollToSection('contact')}>Start Your Project</Button>
    </Box>
  );
};
```

```tsx
// src/views/Home/subComponents/ChatBoxSection/ChatBoxSection.tsx
export const ChatBoxSection: FC = () => {
  const { mode } = useThemeMode();
  const isLight = mode === 'light';

  return (
    <Box>
      <Typography>Ask about AI systems</Typography>
      <TextField placeholder="Describe your workflow" />
    </Box>
  );
};
```

```tsx
// src/views/Home/subComponents/FirstGeneralSection/FirstGeneralSection.tsx
export const FirstGeneralSection: FC = () => {
  const { mode } = useThemeMode();
  const isLight = mode === 'light';

  return (
    <Box id="solutions">
      <Typography>We consult and we build.</Typography>
    </Box>
  );
};
```

```tsx
// src/views/Home/subComponents/FirstImageSection/FirstImageSection.tsx
export const FirstImageSection: FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box id="about">
      <Typography>Built for scale, not just for demos.</Typography>
      <AgentTerminal />
      <PerformanceNodes />
    </Box>
  );
};
```

```tsx
// src/views/Home/subComponents/SecondImageSection/SecondImageSection.tsx
export const SecondImageSection: FC = () => {
  return (
    <Box>
      <Typography>Automated data extraction and enterprise-ready APIs.</Typography>
    </Box>
  );
};
```

```tsx
// src/views/Home/subComponents/SecondGeneralSection/SecondGeneralSection.tsx
export const SecondGeneralSection: FC = () => {
  return (
    <Box id="contact">
      <Typography>Ready to ship production AI?</Typography>
      <Button>Book a call</Button>
    </Box>
  );
};
```

```tsx
// src/views/Home/subComponents/CaseStudiesSection/CaseStudiesSection.tsx
export const CaseStudiesSection: FC = () => {
  return (
    <Box id="case-studies">
      <Typography>Real Results. Real Impact.</Typography>
    </Box>
  );
};
```

### 11.7 Shared interactive components

```tsx
// src/components/AgentTerminal/AgentTerminal.tsx
export default function CodeAnimation() {
  return <div>Animated terminal-style code preview</div>;
}
```

```tsx
// src/components/model3DAnimation.tsx
export const PerformanceNodes: FC = () => {
  return <Box>Canvas-based 3D network visualization</Box>;
};
```

### 11.8 Full project inventory

The repository is organized around the following main areas:

- App shell: src/App.tsx, src/main.tsx
- Theme system: src/theme/
- Layout and loaders: src/layout/, src/components/PageLoader.tsx
- Shared UI: src/components/Navbar/, src/components/Footer/
- Home page sections: src/views/Home/subComponents/
- Route views: src/views/About/, src/views/Products/
- Utilities: src/utils/
- Static assets: src/assets/, public/fonts/

### 11.9 Media Assets Inventory

This section documents all images and videos used throughout the website, organized by folder and usage context. Understanding these assets is critical for redesigns, theme changes, and content updates.

#### Code Images (src/assets/Images/CodeImages/)

Code images are used in the **SecondImageSection** component to showcase AI data extraction capabilities. Each image has light and dark theme variants, plus animated GIF versions for enhanced presentation.

| File | Type | Usage | Component | Theme |
|------|------|-------|-----------|-------|
| `Code5imageLight.gif` | GIF (animated) | Light theme showcase | SecondImageSection | Light |
| `codeImage5Dark.gif` | GIF (animated) | Dark theme showcase | SecondImageSection | Dark |
| `CodeImage5Light.png` | PNG (static) | Fallback image | SecondImageSection | Light |
| `CodeImage5Dark.png` | PNG (static) | Fallback image | SecondImageSection | Dark |
| `CodeImage4LightExtraction.gif` | GIF (animated) | Extraction feature demo (Light) | SecondImageSection | Light |
| `codeImage4DarkExtraction.gif` | GIF (animated) | Extraction feature demo (Dark) | SecondImageSection | Dark |
| `CodeImage4Light.png` | PNG (static) | Fallback for extraction | SecondImageSection | Light |
| `CodeImage4Dark.png` | PNG (static) | Fallback for extraction | SecondImageSection | Dark |
| `Code6imageLight.gif` | GIF (animated) | Advanced feature demo (Light) | SecondImageSection | Light |
| `codeImage6Dark.gif` | GIF (animated) | Advanced feature demo (Dark) | SecondImageSection | Dark |
| `CodeImage6Light.png` | PNG (static) | Fallback image | SecondImageSection | Light |
| `CodeImage3LightChat.gif` | GIF (animated) | Chat interface demo | SecondImageSection | Light |
| `CodeImage3Light.png` | PNG (static) | Fallback image | SecondImageSection | Light |
| `CodeImage3Dark.png` | PNG (static) | Fallback image | SecondImageSection | Dark |
| `CodeImage3Dark.gif` | GIF (animated) | Chat interface demo | SecondImageSection | Dark |
| `CodeImageOneLight.gif` | GIF (animated) | First code example | SecondImageSection | Light |

**Implementation Detail**: These images are imported in [src/views/Home/subComponents/SecondImageSection/SecondImageSection.tsx](src/views/Home/subComponents/SecondImageSection/SecondImageSection.tsx) and selected based on the current theme mode using the `isDark` flag from `useThemeMode()`.

#### Featured Images (src/assets/Images/Featured/)

Featured images represent partner companies, case studies, or featured projects. These are used in the **CaseStudiesSection** to display client logos and project thumbnails.

| File | Type | Usage | Component | Theme |
|------|------|-------|-----------|-------|
| `Featured1Light.png` | PNG | Client/project showcase | CaseStudiesSection | Light |
| `Featured2Light.png` | PNG | Client/project showcase | CaseStudiesSection | Light |
| `Featured3Light.png` | PNG | Client/project showcase | CaseStudiesSection | Light |
| `Featured4Light.png` | PNG | Client/project showcase | CaseStudiesSection | Light |
| `Featured5Light.png` | PNG | Client/project showcase | CaseStudiesSection | Light |
| `Featured1Dark.png` | PNG | Client/project showcase | CaseStudiesSection | Dark |
| `Featured2Dark.png` | PNG | Client/project showcase | CaseStudiesSection | Dark |
| `Featured3Dark.png` | PNG | Client/project showcase | CaseStudiesSection | Dark |
| `Featured4Dark.png` | PNG | Client/project showcase | CaseStudiesSection | Dark |
| `Featured5Dark.png` | PNG | Client/project showcase | CaseStudiesSection | Dark |
| `Fossilite.svg` | SVG | Branding/logo | Featured section | Both |
| `Cuebig.png` | PNG | Case study thumbnail | CaseStudiesSection | Both |
| `Square.png` | PNG | Case study thumbnail | CaseStudiesSection | Both |
| `Paperz.png` | PNG | Case study thumbnail | CaseStudiesSection | Both |
| `Martino.png` | PNG | Case study thumbnail | CaseStudiesSection | Both |
| `Gobona.png` | PNG | Case study thumbnail | CaseStudiesSection | Both |

**Implementation Detail**: Featured images are exported from [src/assets/Images/Featured/index.ts](src/assets/Images/Featured/index.ts) as named exports (e.g., `Featured1Light`, `Featured1Dark`) and imported where needed. The selection between light and dark variants is made using theme mode context.

#### Videos (src/assets/videos/)

Videos are used in the **CaseStudiesSection** to provide dynamic background content and enhanced product demonstrations.

| File | Type | Duration | Usage | Component | Context |
|------|------|----------|-------|-----------|---------|
| `outfit.mp4` | MP4 | N/A | Product demo video | CaseStudiesSection | Product showcase, auto-looping background |
| `ar-tile.mp4` | MP4 | N/A | AR/interactive demo video | CaseStudiesSection | Feature showcase, demonstration |

**Implementation Detail**: These videos are imported in [src/views/Home/subComponents/CaseStudiesSection/CaseStudiesSection.tsx](src/views/Home/subComponents/CaseStudiesSection/CaseStudiesSection.tsx) and rendered as HTML5 video elements with autoplay, muted, and loop attributes for seamless integration into the case studies showcase.

#### Logo and Branding (src/assets/Images/)

| File | Type | Usage | Component |
|------|------|-------|-----------|
| `Fossilite.svg` | SVG | Main brand logo | Navbar, Footer, Header sections |

**Theme-Aware Image Selection Pattern**

The codebase follows a consistent pattern for theme-aware image selection:

```tsx
import { useThemeMode } from "../../../../theme/theme";
import ImageLight from "../../../../assets/Images/CodeImages/CodeImage5Light.gif";
import ImageDark from "../../../../assets/Images/CodeImages/codeImage5Dark.gif";

export const Component: FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  
  const selectedImage = isDark ? ImageDark : ImageLight;
  
  return <img src={selectedImage} alt="description" />;
};
```

This pattern ensures that:
- Light mode users see optimized light-themed imagery
- Dark mode users see optimized dark-themed imagery
- Assets are preloaded at import time for better performance
- Theme changes trigger seamless image swapping via React re-renders

---

## 12. Summary

This project is a polished React-based marketing website with:
- modular section-based page composition
- custom MUI theming
- responsive layout patterns
- animated and premium-feeling UI elements
- route-aware navigation and section scrolling

It is a strong candidate for a redesign because its structure is clear, component-driven, and already organized around reusable sections.

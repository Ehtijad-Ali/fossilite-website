import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {ThemeProvider} from './theme'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

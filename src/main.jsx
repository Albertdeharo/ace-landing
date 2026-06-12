import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./reset.css";
import { TranslationProvider } from "./TranslationContext.jsx";

import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </HelmetProvider>
  </StrictMode>,
);

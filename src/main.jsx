console.log("MAIN.JSX EJECUTANDOSE");

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

console.log("ANTES DE RENDER");

const rootElement = document.getElementById("root");

console.log("ROOT ELEMENT:", rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

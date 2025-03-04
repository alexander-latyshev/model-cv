import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <App />
      </Router>
    </LanguageProvider>
  </StrictMode>
);

import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LanguageProvider from "./store/LanguageProvider.tsx";
import { ThemeProvider } from "./store/ThemeContext.tsx";
import ScrollToTop from "./components/common/scrollToTop/ScrollToTop.tsx";
createRoot(document.getElementById("root")!).render(
  <Router>
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
      <ScrollToTop />
    </HelmetProvider>
  </Router>
);

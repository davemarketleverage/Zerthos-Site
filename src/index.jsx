import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Homepage } from "./screens/Homepage/Homepage";
import { ContactPage } from "./screens/ContactPage/ContactPage";
import { CareersPage } from "./screens/CareersPage/CareersPage";
import { IndustriesPage } from "./screens/IndustriesPage/IndustriesPage";
import { LeadershipPage } from "./screens/LeadershipPage/LeadershipPage";
import { TechnologyPage } from "./screens/TechnologyPage/TechnologyPage";
import { CookiesPolicyPage } from "./screens/CookiesPolicyPage";
import { LegalTermsPage } from "./screens/LegalTermsPage";
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage";
import { CookieConsent } from "./components/ui/cookie-consent";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
          <Route path="/legal-terms" element={<LegalTermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <CookieConsent />
      </Router>
    </HelmetProvider>
  </StrictMode>
); 
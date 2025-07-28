import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./screens/Homepage/Homepage";
import { ContactPage } from "./screens/ContactPage/ContactPage";
import { CareersPage } from "./screens/CareersPage/CareersPage";
import { JobDetailsPage } from "./screens/JobDetailsPage/JobDetailsPage";
import { IndustriesPage } from "./screens/IndustriesPage/IndustriesPage";
import { LeadershipPage } from "./screens/LeadershipPage/LeadershipPage";
import { TechnologyPage } from "./screens/TechnologyPage/TechnologyPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/job/:jobId" element={<JobDetailsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </Router>
  </StrictMode>
); 
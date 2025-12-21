import { useState } from "react";
import { Navigation } from "./components/Navigation";
import Footer from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { CommunityPage } from "./pages/CommunityPage";
import { ArtCulturePage } from "./pages/ArtCulturePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { LeadershipPage } from "./pages/LeadershipPage"; // ✅ Correct import name
import { WorkPage } from "./pages/WorkPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;

      case "community":
        return <CommunityPage />;

      case "art":
        return <ArtCulturePage />;

      case "projects":
        return <ProjectsPage />;

      case "leadership":
        return <LeadershipPage />; // ✅ Correct component

      case "work":
        return <WorkPage />;

      case "contact":
        return <ContactPage />;

      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-neutral-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

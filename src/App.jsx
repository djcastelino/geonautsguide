import { useRef, useState } from "react";
import { Compass } from "lucide-react";
import ExpeditionHome from "./components/ExpeditionHome";
import { JournalHeader, JournalFooter } from "./components/JournalShell";
import LandmarkGrid from "./components/LandmarkGrid";
import LandmarkDetail from "./components/LandmarkDetail";
import TripPlanner from "./components/TripPlanner";
import CityGuess from "./components/CityGuess";
import NotificationBanner from "./components/NotificationBanner";
import { fetchWikipediaSummary, generateNarration } from "./services/api";
import landmarksData from "./data/landmarks.json";
import "./components/Journal.css";

function App() {
  const [view, setView] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [narrationData, setNarrationData] = useState(null);
  const generation = useRef(0);
  const dayOfYear = Math.floor(
    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000,
  );
  const featured =
    landmarksData.landmarks[dayOfYear % landmarksData.landmarks.length];
  const onNavigate = (next) => {
    generation.current++;
    setView(next);
    setSelectedLandmark(null);
    setNarrationData(null);
    setError(null);
    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const onLandmarkSelect = async (landmark) => {
    const request = ++generation.current;
    setIsLoading(true);
    setError(null);
    try {
      const wiki = await fetchWikipediaSummary(landmark.name);
      const landmarkContext = Object.fromEntries(
        [
          "name",
          "description",
          "significance",
          "year",
          "category",
          "country",
          "city",
          "height",
        ].map((key) => [key === "name" ? "landmarkName" : key, landmark[key]]),
      );
      const narration = await generateNarration(
        landmark.name,
        wiki?.extract || landmark.description,
        landmark.name.replace(/ /g, "_"),
        landmarkContext,
      );
      if (request !== generation.current) return;
      if (!narration?.narration)
        throw new Error("No narration was returned. Please try again.");
      setSelectedLandmark(landmark);
      setNarrationData(narration);
      setView("detail");
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch (err) {
      if (request === generation.current)
        setError(err.message || "This guide could not load. Please try again.");
    } finally {
      if (request === generation.current) setIsLoading(false);
    }
  };
  return (
    <div className="journal-app">
      {view !== "home" && (
        <JournalHeader
          current={view === "detail" ? "grid" : view}
          onNavigate={onNavigate}
        />
      )}
      {error && (
        <div className="journal-error journal-global-error" role="alert">
          <span>{error}</span>
          <button onClick={() => setError(null)} aria-label="Dismiss error">
            ×
          </button>
        </div>
      )}
      <main>
        {view === "home" && (
          <ExpeditionHome
            landmarks={landmarksData.landmarks}
            featured={featured}
            onExplore={() => onNavigate("grid")}
            onPlan={() => onNavigate("planner")}
            onChallenge={() => onNavigate("cityguess")}
            onLandmarkSelect={onLandmarkSelect}
            isLoading={isLoading}
          />
        )}
        {view === "grid" && (
          <LandmarkGrid
            landmarks={landmarksData.landmarks}
            onLandmarkSelect={onLandmarkSelect}
            isLoading={isLoading}
          />
        )}
        {view === "planner" && <TripPlanner />}
        {view === "cityguess" && <CityGuess />}
        {view === "detail" && selectedLandmark && narrationData && (
          <LandmarkDetail
            landmark={selectedLandmark}
            narration={narrationData.narration}
            onBack={() => onNavigate("grid")}
            isDailyChallenge={selectedLandmark.id === featured.id}
          />
        )}
      </main>
      {view !== "home" && (
        <>
          <JournalFooter />
          <NotificationBanner />
        </>
      )}
      {isLoading && view !== "home" && (
        <div className="journal-loading-toast" role="status">
          <Compass size={20} className="journal-spin" /> Finding the story
          behind this place…
        </div>
      )}
    </div>
  );
}
export default App;

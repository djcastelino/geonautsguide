import { useEffect, useRef, useState } from "react";
import { Compass } from "lucide-react";
import PlaceThroughTime from "./components/PlaceThroughTime";
import WorldQuiz from "./components/WorldQuiz";
import FollowJourney from "./components/FollowJourney";
import About from "./components/About";
import WhyHere from "./components/WhyHere";
import PlanetConnections from "./components/PlanetConnections";
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

const routeView = () => { const value = new URLSearchParams(window.location.search).get("view"); return ["connections", "whyhere", "cityguess", "planner", "grid", "about", "throughtime", "journey", "worldquiz"].includes(value) ? value : "home"; };

function App() {
  const [view, setView] = useState(routeView);
  const [whyCity, setWhyCity] = useState(() => new URLSearchParams(window.location.search).get("city") || "");
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
  const onNavigate = (next, city = "") => {
    const url = new URL(window.location.href);
    if (next === "home") url.searchParams.delete("view"); else url.searchParams.set("view", next);
    if (["whyhere", "throughtime"].includes(next) && city) url.searchParams.set("city", city); else url.searchParams.delete("city");
    window.history.pushState({}, "", url);
    setWhyCity(city);
    generation.current++;
    setView(next);
    setSelectedLandmark(null);
    setNarrationData(null);
    setError(null);
    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  useEffect(() => {
    const restore = () => { generation.current++; setView(routeView()); setWhyCity(new URLSearchParams(window.location.search).get("city") || ""); setSelectedLandmark(null); setNarrationData(null); setIsLoading(false); setError(null); };
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
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
  if (view === "worldquiz") return <WorldQuiz onHome={() => onNavigate("home")} />;
  if (view === "journey") return <FollowJourney onHome={() => onNavigate("home")} />;
  if (view === "throughtime") return <PlaceThroughTime key={whyCity} initialCity={whyCity} onHome={() => onNavigate("home")} onWhyHere={(city) => onNavigate("whyhere", city)} />;
  if (view === "whyhere") return <WhyHere key={whyCity} initialCity={whyCity} onHome={() => onNavigate("home")} onChallenge={() => onNavigate("cityguess")} />;
  if (view === "connections") return <PlanetConnections onHome={() => onNavigate("home")} />;
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
            onConnections={() => onNavigate("connections")}
            onWhyHere={() => onNavigate("whyhere")}
            onThroughTime={() => onNavigate("throughtime")}
            onWorldQuiz={() => onNavigate("worldquiz")}
            onJourney={() => onNavigate("journey")}
            onAbout={() => onNavigate("about")}
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
        {view === "about" && <About />}
        {view === "planner" && <TripPlanner />}
        {view === "cityguess" && <CityGuess onWhyHere={(city) => onNavigate("whyhere", city)} />}
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

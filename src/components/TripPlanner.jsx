import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Backpack,
  Clock3,
  Compass,
  Download,
  Headphones,
  MapPin,
  Share2,
  Sun,
} from "lucide-react";
import { requestPlan } from "../services/planning";
import { apiUrl } from "../services/backend";
import { useState } from "react";

const TripPlanner = () => {
  const [shareMessage, setShareMessage] = useState("");
  const [plannerError, setPlannerError] = useState("");
  const [waitingMessage, setWaitingMessage] = useState("");
  const [activeTab, setActiveTab] = useState("itinerary"); // 'itinerary' or 'route'
  const [tripView, setTripView] = useState("form");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [tripData, setTripData] = useState(null);
  const [, setIsGenerating] = useState(false);

  // Route Planner state
  const [routeQuery, setRouteQuery] = useState("");
  const [routeResponse, setRouteResponse] = useState(null);
  const [isGeneratingRoute, setIsGeneratingRoute] = useState(false);

  const interestCategories = [
    { id: "culture", name: "Culture & History", emoji: "🏛️" },
    { id: "food", name: "Food & Dining", emoji: "🍜" },
    { id: "adventure", name: "Adventure", emoji: "⛰️" },
    { id: "beach", name: "Beach & Relaxation", emoji: "🏖️" },
    { id: "shopping", name: "Shopping", emoji: "🛍️" },
    { id: "nightlife", name: "Nightlife", emoji: "🎉" },
    { id: "nature", name: "Nature", emoji: "🌿" },
    { id: "art", name: "Art & Museums", emoji: "🎨" },
    { id: "religious", name: "Religious Sites", emoji: "⛪" },
  ];

  const handleInterestToggle = (interestId) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId],
    );
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const handleGenerateTrip = async () => {
    if (
      !destination ||
      !startDate ||
      !endDate ||
      selectedInterests.length === 0
    ) {
      alert("Please fill in all fields and select at least one interest");
      return;
    }

    if (calculateDays() < 1 || calculateDays() > 14) {
      setPlannerError(
        "Choose a departure on or after arrival, for a trip of up to 14 days.",
      );
      return;
    }
    setPlannerError("");
    setShareMessage("");
    setWaitingMessage("");
    setIsGenerating(true);
    setTripView("generating");

    try {
      const data = await requestPlan(
        apiUrl("/api/generate-trip"),
        { destination, startDate, endDate, interests: selectedInterests },
        { onWaiting: setWaitingMessage },
      );
      setTripData(data);
      setIsGenerating(false);
      setTripView("itinerary");
    } catch (error) {
      console.error("Error generating trip:", error);
      setPlannerError(error.message);
      setIsGenerating(false);
      setTripView("form");
    }
  };

  const handleBackToForm = () => {
    setTripView("form");
    setTripData(null);
  };

  const handleGenerateRoute = async () => {
    if (!routeQuery.trim()) {
      alert("Please enter your travel question");
      return;
    }

    setPlannerError("");
    setWaitingMessage("");
    setShareMessage("");
    setIsGeneratingRoute(true);

    try {
      const data = await requestPlan(
        apiUrl("/api/generate-route"),
        { query: routeQuery },
        { onWaiting: setWaitingMessage },
      );
      setRouteResponse(data);
    } catch (error) {
      console.error("Error generating route:", error);
      setPlannerError(error.message);
    } finally {
      setIsGeneratingRoute(false);
    }
  };

  const handleResetRoute = () => {
    setRouteQuery("");
    setRouteResponse(null);
  };

  const downloadPlan = () => {
    const text = tripData
      ? `${tripData.destination}\n\n${tripData.description}\n\n${tripData.itinerary.map((day) => `Day ${day.day}: ${day.title}\n${day.activities.map((a) => `${a.time}: ${a.name}\n${a.location} (${a.duration})\nTip: ${a.tip}\nMap: ${a.mapLink}`).join("\n\n")}`).join("\n\n")}`
      : `${routeQuery}\n\n${routeResponse?.response || routeResponse?.plan || ""}`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "geonauts-journey.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const sharePlan = async () => {
    const text = tripData
      ? `${tripData.destination}\n${tripData.description}\n\n${tripData.itinerary.map((day) => `Day ${day.day}: ${day.title}\n${day.activities.map((a) => `${a.time}: ${a.name} — ${a.location}`).join("\n")}`).join("\n\n")}`
      : `${routeQuery}\n\n${routeResponse?.response || routeResponse?.plan || ""}`;
    try {
      if (navigator.share)
        await navigator.share({ title: "My Geonauts journey", text });
      else {
        await navigator.clipboard.writeText(text);
        setShareMessage(
          "Your plan is copied. Share it wherever your journey begins.",
        );
      }
    } catch (error) {
      if (error.name !== "AbortError")
        setShareMessage(
          "Sharing is unavailable here. Use Download plan to save a copy.",
        );
    }
  };
  const planActions = (
    <div className="journal-plan-actions">
      <button className="journal-button" onClick={downloadPlan}>
        <Download size={16} /> Download plan
      </button>
      <button
        className="journal-button journal-button-outline"
        onClick={sharePlan}
      >
        <Share2 size={16} /> Share journey
      </button>
      {shareMessage && <p role="status">{shareMessage}</p>}
    </div>
  );

  if (tripView === "generating")
    return (
      <div className="journal-page journal-generating">
        <Compass size={65} strokeWidth={0.8} className="journal-spin" />
        <p className="journal-kicker">CONNECTING THE DOTS</p>
        <h1>
          Your next chapter
          <br />
          <em>is taking shape.</em>
        </h1>
        <p role="status">
          {waitingMessage ||
            `Finding a little more possibility in ${destination}…`}
        </p>
        <span>A thoughtful itinerary takes a moment. Stay curious.</span>
      </div>
    );

  if (tripView === "itinerary" && tripData)
    return (
      <div className="journal-page journal-itinerary">
        <button className="journal-back" onClick={handleBackToForm}>
          <ArrowLeft size={16} /> Plan another journey
        </button>
        <div className="journal-result-banner">
          <p className="journal-kicker">
            YOUR NEXT CHAPTER / {tripData.days}{" "}
            {tripData.days === 1 ? "DAY" : "DAYS"}
          </p>
          <h1>{tripData.destination}</h1>
          <p>{tripData.description}</p>
          <span>AI-CREATED ITINERARY · YOUR ADVENTURE, YOUR PACE</span>
        </div>
        <div className="journal-trip-essentials">
          <section>
            <p className="journal-kicker">
              <Sun size={15} /> SEASONAL PERSPECTIVE
            </p>
            <h3>{tripData.weather.temperature}</h3>
            <p>{tripData.weather.advice}</p>
            <small>Typical seasonal guidance, not a live forecast.</small>
          </section>
          <section>
            <p className="journal-kicker">
              <Backpack size={15} /> A FEW THINGS TO BRING
            </p>
            <ul>
              {tripData.packing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="journal-section-intro">
          <p className="journal-kicker">DAY BY DAY / ROOM FOR THE UNEXPECTED</p>
          <h2>
            A journey worth
            <br />
            <em>taking slowly.</em>
          </h2>
        </div>
        <div className="journal-timeline">
          {tripData.itinerary.map((day) => (
            <section className="journal-day" key={day.day}>
              <header>
                <span className="journal-day-number">
                  {String(day.day).padStart(2, "0")}
                </span>
                <div>
                  <p className="journal-kicker">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </p>
                  <h3>{day.title}</h3>
                </div>
                <span className="journal-day-weather">{day.weather}</span>
              </header>
              <div className="journal-activities">
                {day.activities.map((activity, index) => (
                  <article key={index}>
                    <span className="journal-kicker">{activity.time}</span>
                    <h4>{activity.name}</h4>
                    <a
                      href={activity.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin size={14} />
                      {activity.location}
                      <ArrowUpRight size={13} />
                    </a>
                    <p>
                      <Clock3 size={14} />
                      {activity.duration}
                    </p>
                    {activity.hasAudioTour && (
                      <span className="journal-audio-badge">
                        <Headphones size={13} /> Audio guide available
                      </span>
                    )}
                    <div className="journal-activity-tip">
                      FIELD NOTE / {activity.tip}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="journal-fine-print">
          Travel times and costs are estimates. Check opening hours, bookings,
          and local conditions before travelling.
        </p>
        {planActions}
      </div>
    );

  return (
    <div className="journal-page journal-planner">
      <div className="journal-page-heading">
        <div>
          <p className="journal-kicker">
            THE JOURNEY BEGINS WITH A POSSIBILITY
          </p>
          <h1>
            Less planning.
            <br />
            <em>More possibility.</em>
          </h1>
          <p>
            Bring your interests and a little curiosity.
            <br />
            We’ll help you turn a destination into a journey.
          </p>
        </div>
        <Compass
          className="journal-heading-compass"
          size={110}
          strokeWidth={0.65}
        />
      </div>
      <div
        className="journal-planner-tabs"
        role="tablist"
        aria-label="Travel planning tools"
      >
        {[
          ["itinerary", "Build an itinerary", "01"],
          ["route", "Find your route", "02"],
        ].map(([id, label, number]) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`planner-${id}`}
            id={`tab-${id}`}
            onClick={() => {
              setActiveTab(id);
              setPlannerError("");
            }}
          >
            <span>{number}</span>
            {label}
            <ArrowUpRight size={16} />
          </button>
        ))}
      </div>
      {plannerError && (
        <p role="alert" className="journal-error">
          {plannerError}
        </p>
      )}
      {activeTab === "itinerary" && (
        <section
          role="tabpanel"
          id="planner-itinerary"
          aria-labelledby="tab-itinerary"
          className="journal-planner-layout"
        >
          <div className="journal-planner-form">
            <div className="journal-form-step">
              <span>01</span>
              <div>
                <label htmlFor="trip-destination">
                  Where are you dreaming of?
                </label>
                <input
                  id="trip-destination"
                  type="text"
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  placeholder="A city, a region, a little escape…"
                />
              </div>
            </div>
            <div className="journal-form-step">
              <span>02</span>
              <div>
                <h2>Make a little time.</h2>
                <div className="journal-date-fields">
                  <label htmlFor="trip-start">
                    Arrival
                    <input
                      id="trip-start"
                      type="date"
                      value={startDate}
                      onChange={(event) => setStartDate(event.target.value)}
                    />
                  </label>
                  <ArrowRight size={18} />
                  <label htmlFor="trip-end">
                    Departure
                    <input
                      id="trip-end"
                      type="date"
                      min={startDate || undefined}
                      value={endDate}
                      onChange={(event) => setEndDate(event.target.value)}
                    />
                  </label>
                </div>
                <p className="journal-form-hint">
                  From a day’s discovery to a two-week adventure.
                </p>
              </div>
            </div>
            <div className="journal-form-step">
              <span>03</span>
              <div>
                <h2>What draws you in?</h2>
                <p className="journal-form-hint">
                  Choose the things that make a place yours.
                </p>
                <div className="journal-interests">
                  {interestCategories.map((interest) => (
                    <button
                      key={interest.id}
                      aria-pressed={selectedInterests.includes(interest.id)}
                      onClick={() => handleInterestToggle(interest.id)}
                    >
                      <span aria-hidden="true">{interest.emoji}</span>
                      {interest.name}
                      <span className="journal-interest-check">
                        {selectedInterests.includes(interest.id) ? "✓" : "+"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="journal-button journal-plan-submit"
              onClick={handleGenerateTrip}
              disabled={
                !destination.trim() ||
                !startDate ||
                !endDate ||
                selectedInterests.length === 0
              }
            >
              Create my itinerary <ArrowUpRight size={18} />
            </button>
            {calculateDays() > 0 && (
              <p className="journal-form-hint">
                A {calculateDays()}-day journey, shaped around you.
              </p>
            )}
          </div>
          <aside className="journal-planner-aside">
            <img
              src="/images/home/trolltunga.webp"
              alt="A rocky overlook above a blue Norwegian fjord"
            />
            <div>
              <p className="journal-kicker">LEAVE ROOM FOR WONDER</p>
              <h2>
                The best part
                <br />
                might be
                <br />
                <em>the detour.</em>
              </h2>
              <p>
                Thoughtful suggestions, practical stops, and space to find your
                own way.
              </p>
            </div>
          </aside>
        </section>
      )}
      {activeTab === "route" && (
        <section role="tabpanel" id="planner-route" aria-labelledby="tab-route">
          {!routeResponse ? (
            <div className="journal-route-layout">
              <div className="journal-planner-form">
                <p className="journal-kicker">BETWEEN HERE AND THERE</p>
                <h2>
                  Which way
                  <br />
                  <em>will you go?</em>
                </h2>
                <p>
                  Tell us where you’re starting, where you’d like to end up, and
                  how much time you have.
                </p>
                <label htmlFor="route-question" className="journal-field-label">
                  Your travel question
                </label>
                <textarea
                  id="route-question"
                  value={routeQuery}
                  onChange={(event) => setRouteQuery(event.target.value)}
                  placeholder="I have 5 days in Scotland. What’s a good route from Edinburgh to the Highlands?"
                  rows={6}
                  disabled={isGeneratingRoute}
                />
                <button
                  className="journal-button journal-plan-submit"
                  onClick={handleGenerateRoute}
                  disabled={!routeQuery.trim() || isGeneratingRoute}
                >
                  {isGeneratingRoute ? (
                    <>
                      <Compass size={18} className="journal-spin" />
                      {waitingMessage || "Finding your way…"}
                    </>
                  ) : (
                    <>
                      Find my route <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </div>
              <aside className="journal-route-prompts">
                <p className="journal-kicker">A LITTLE INSPIRATION</p>
                <h3>
                  Start with
                  <br />
                  <em>a question.</em>
                </h3>
                {[
                  "What’s a scenic route from Rome to the Amalfi Coast?",
                  "I have 6 days on Ireland’s west coast. Where should I stop?",
                  "Rome, Florence, Venice in 10 days. How should I travel?",
                ].map((question, index) => (
                  <button
                    key={question}
                    onClick={() => setRouteQuery(question)}
                    disabled={isGeneratingRoute}
                  >
                    <span>0{index + 1}</span>
                    {question}
                    <ArrowUpRight size={15} />
                  </button>
                ))}
                <small>
                  Transportation, timing, and costs are planning estimates—not
                  live bookings.
                </small>
              </aside>
            </div>
          ) : (
            <div className="journal-route-result">
              <button className="journal-back" onClick={handleResetRoute}>
                <ArrowLeft size={16} /> Ask another question
              </button>
              <div className="journal-result-banner">
                <p className="journal-kicker">A WAY FORWARD</p>
                <h2>
                  Your route,
                  <br />
                  <em>with perspective.</em>
                </h2>
                <p>“{routeQuery}”</p>
              </div>
              <div className="journal-route-response">
                {String(routeResponse.response || routeResponse.plan || "")
                  .split(/\n\s*\n/)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph.replace(/\*\*/g, "")}</p>
                  ))}
              </div>
              {planActions}
            </div>
          )}
        </section>
      )}
    </div>
  );
};
export default TripPlanner;

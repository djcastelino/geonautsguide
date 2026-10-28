import { useState } from "react";
import {
  ArrowUpRight,
  Headphones,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import LandmarkImage from "./LandmarkImage";

export default function LandmarkGrid({
  landmarks,
  onLandmarkSelect,
  isLoading,
}) {
  const [category, setCategory] = useState("All places");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [limit, setLimit] = useState(18);
  const categories = [
    "All places",
    ...new Set(landmarks.map((place) => place.category)),
  ];
  const filtered = landmarks.filter(
    (place) =>
      (category === "All places" || place.category === category) &&
      (type === "All" || place.type === type) &&
      `${place.name} ${place.city} ${place.country}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const reset = () => {
    setCategory("All places");
    setQuery("");
    setType("All");
    setLimit(18);
  };
  return (
    <div className="journal-page">
      <div className="journal-page-heading">
        <div>
          <p className="journal-kicker">
            THE EXPLORER’S COLLECTION / {landmarks.length} PLACES
          </p>
          <h1>
            Follow your
            <br />
            <em>curiosity.</em>
          </h1>
          <p>
            Remarkable landscapes. Centuries of stories.
            <br />
            Find a place that makes you want to know more.
          </p>
        </div>
        <div className="journal-heading-aside">
          <Headphones size={30} strokeWidth={1} />
          <span>
            EVERY PLACE HAS A STORY.
            <br />
            MAKE TIME TO LISTEN.
          </span>
        </div>
      </div>
      <div className="journal-discovery-tools">
        <label className="journal-search">
          <Search size={18} />
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setLimit(18);
            }}
            placeholder="A landmark, a city, a country…"
            aria-label="Search landmarks, cities, or countries"
          />
        </label>
        <div className="journal-segments" role="group" aria-label="Place type">
          {[
            ["All", "All places"],
            ["Man-made", "Human wonders"],
            ["Natural", "Wild places"],
          ].map(([value, title]) => (
            <button
              key={value}
              aria-pressed={type === value}
              onClick={() => {
                setType(value);
                setLimit(18);
              }}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
      <div className="journal-category-row">
        <span>
          <SlidersHorizontal size={14} /> FIND YOUR PERSPECTIVE
        </span>
        <label className="journal-select">
          <span className="sr-only">Landmark category</span>
          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              setLimit(18);
            }}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <span>
          {filtered.length}{" "}
          {filtered.length === 1 ? "discovery" : "discoveries"}
        </span>
      </div>
      <div className="journal-discovery-grid" aria-live="polite">
        {filtered.slice(0, limit).map((place, index) => (
          <button
            className="journal-place"
            key={place.id}
            onClick={() => onLandmarkSelect(place)}
            disabled={isLoading}
          >
            <div className="journal-place-photo">
              <LandmarkImage
                landmark={place}
                className="journal-cover-image"
                loading="lazy"
              />
              <span className="journal-photo-label">
                {String(index + 1).padStart(2, "0")} / {place.category}
              </span>
              <span className="journal-photo-audio">
                <Headphones size={13} /> AUDIO GUIDE
              </span>
              <span className="journal-round-arrow">
                <ArrowUpRight size={21} />
              </span>
            </div>
            <div className="journal-place-label">
              <span>
                {place.city}, {place.country}
              </span>
              <h2>{place.name}</h2>
              <p>{place.description}</p>
            </div>
          </button>
        ))}
      </div>
      {!filtered.length && (
        <div className="journal-empty">
          <h2>A different direction?</h2>
          <p>
            No places match these filters. Try another destination or start
            fresh.
          </p>
          <button className="journal-button" onClick={reset}>
            Reset discoveries <ArrowUpRight size={16} />
          </button>
        </div>
      )}
      {filtered.length > limit && (
        <div className="journal-load-more">
          <button
            className="journal-button journal-button-outline"
            onClick={() => setLimit((value) => value + 18)}
          >
            More places to discover <ArrowUpRight size={16} />
          </button>
          <p>
            Showing {Math.min(limit, filtered.length)} of {filtered.length}{" "}
            places
          </p>
        </div>
      )}
    </div>
  );
}

import {
  ArrowLeft,
  ArrowUpRight,
  Headphones,
  Pause,
  Play,
  Square,
} from "lucide-react";
import LandmarkImage from "./LandmarkImage";
import { createNarrationPlayback } from "../services/narrationPlayback";
import { createSpeechBlob } from "../services/backend";
import { useState, useRef, useEffect } from "react";

function LandmarkDetail({
  landmark,
  narration,
  onBack,
  isDailyChallenge = false,
  onStartQuiz,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioEnded, setAudioEnded] = useState(false);
  const audioRef = useRef(null);
  const backgroundMusicRef = useRef(null);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);

  const playbackRef = useRef(null);
  const audioUrlRef = useRef(null);
  const activeRef = useRef(true);
  const busyRef = useRef(false);
  const [audioError, setAudioError] = useState("");
  const [musicEnabled, setMusicEnabled] = useState(false);
  const musicEnabledRef = useRef(false);
  const [musicError, setMusicError] = useState("");

  const handlePlayAudio = async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    setAudioError("");
    setIsGeneratingAudio(true);
    try {
      if (!playbackRef.current) {
        const blob = await createSpeechBlob(
          narration,
          "en-US-AndrewMultilingualNeural",
        );
        if (!activeRef.current) return;
        audioUrlRef.current = URL.createObjectURL(blob);
        const audio = new Audio(audioUrlRef.current);
        audioRef.current = audio;
        playbackRef.current = createNarrationPlayback(
          audio,
          backgroundMusicRef.current,
          {
            onPlaying: () => {
              setIsPlaying(true);
              setIsPaused(false);
              setAudioEnded(false);
            },
            onDuration: setDuration,
            onMusicError: setMusicError,
            onTime: setCurrentTime,
            onEnded: () => {
              setIsPlaying(false);
              setIsPaused(false);
              setCurrentTime(0);
              setAudioEnded(true);
            },
            onError: (error) => {
              setIsPlaying(false);
              setIsPaused(false);
              if (audio.error) {
                playbackRef.current?.dispose();
                playbackRef.current = null;
                if (audioUrlRef.current)
                  URL.revokeObjectURL(audioUrlRef.current);
                audioUrlRef.current = null;
              }
              setAudioError(
                error.name === "NotAllowedError"
                  ? "Your browser blocked narration playback. Tap Play Audio Guide again."
                  : error.message ||
                      "Narration could not play. Please try again.",
              );
            },
          },
        );
      }
      playbackRef.current.setMusicEnabled(musicEnabledRef.current);
      if (!isPaused) audioRef.current.currentTime = 0;
      await playbackRef.current.play();
    } catch (error) {
      if (!activeRef.current) return;
      setAudioError(
        error.name === "NotAllowedError"
          ? "Your browser blocked narration playback. Tap Play Audio Guide again."
          : error.message || "Narration could not play. Please try again.",
      );
      setIsPlaying(false);
      // Keep successfully generated audio so a second tap can satisfy browser playback rules.
    } finally {
      busyRef.current = false;
      if (activeRef.current) setIsGeneratingAudio(false);
    }
  };

  const handlePauseAudio = () => {
    playbackRef.current?.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleStopAudio = () => {
    playbackRef.current?.stop();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    activeRef.current = true;
    const music = new Audio("/audio/guide-background.mp3");
    music.loop = true;
    music.volume = 0.12;
    music.preload = "metadata";
    backgroundMusicRef.current = music;
    return () => {
      activeRef.current = false;
      playbackRef.current?.dispose();
      music.pause();
      music.src = "";
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    };
  }, []);

  return (
    <article className="journal-detail">
      <div className="journal-detail-top">
        <button className="journal-back" onClick={onBack}>
          <ArrowLeft size={16} /> Back to discoveries
        </button>
        <span className="journal-kicker">
          A PLACE WORTH KNOWING / {landmark.category}
        </span>
      </div>
      <div className="journal-detail-hero">
        <LandmarkImage landmark={landmark} className="journal-cover-image" />
        <div className="journal-detail-hero-copy">
          <p className="journal-kicker">
            {landmark.city} / {landmark.country}
          </p>
          <h1>{landmark.name}</h1>
          <span>{landmark.category}</span>
        </div>
        <span className="journal-detail-coordinate">
          {landmark.coordinates.lat.toFixed(4)}°,{" "}
          {landmark.coordinates.lng.toFixed(4)}°
        </span>
      </div>
      <div className="journal-detail-facts">
        {[
          ["BUILT / FORMED", landmark.year],
          ["HEIGHT / SCALE", landmark.height],
          ["LOCATION", `${landmark.city}, ${landmark.country}`],
        ].map(([label, value]) => (
          <div key={label}>
            <span className="journal-kicker">{label}</span>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <div className="journal-detail-body">
        <div className="journal-story">
          <p className="journal-kicker">BEYOND THE POSTCARD</p>
          <h2>
            A little context.
            <br />
            <em>A new perspective.</em>
          </h2>
          <p className="journal-story-lead">{landmark.description}</p>
          <p>{landmark.significance}</p>
          <details className="journal-transcript" open>
            <summary>
              Read the guide <span>TRANSCRIPT</span>
            </summary>
            <div>
              {narration.split(/\n\s*\n/).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </details>
          {isDailyChallenge && landmark.didYouKnow && (
            <section className="journal-note">
              <p className="journal-kicker">A FEW DETAILS TO TAKE WITH YOU</p>
              <h3>Did you know?</h3>
              <ol>
                {landmark.didYouKnow.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ol>
            </section>
          )}
          {isDailyChallenge && landmark.explorerNotes && (
            <section className="journal-note">
              <p className="journal-kicker">THE PRACTICAL SIDE</p>
              <h3>Explorer’s notes</h3>
              <div className="journal-notes-grid">
                {[
                  [
                    "Best time to visit",
                    landmark.explorerNotes.bestTimeToVisit,
                  ],
                  ["Entrance fee", landmark.explorerNotes.entranceFee],
                  [
                    "Nearby",
                    landmark.explorerNotes.nearbyAttractions
                      ?.slice(0, 3)
                      .join(" · "),
                  ],
                  [
                    "Local cuisine",
                    landmark.explorerNotes.localCuisine
                      ?.slice(0, 3)
                      .join(" · "),
                  ],
                  ["Travel tip", landmark.explorerNotes.travelTip],
                  ["Weather", landmark.explorerNotes.avgWeather],
                ]
                  .filter(([, value]) => value)
                  .map(([label, value]) => (
                    <div key={label}>
                      <h4>{label}</h4>
                      <p>{value}</p>
                    </div>
                  ))}
              </div>
            </section>
          )}
          <section className="journal-sources">
            <p className="journal-kicker">KEEP EXPLORING</p>
            <p>
              AI-powered narration can make mistakes. Follow the sources and
              discover more.
            </p>
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(landmark.name.replace(/ /g, "_"))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Wikipedia <ArrowUpRight size={16} />
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${landmark.coordinates.lat},${landmark.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on map <ArrowUpRight size={16} />
            </a>
          </section>
        </div>
        <aside className="journal-player">
          <p className="journal-kicker">
            <Headphones size={14} /> YOUR PERSONAL AUDIO GUIDE
          </p>
          <h2>
            Let the place
            <br />
            <em>tell its story.</em>
          </h2>
          <p>
            Put on your headphones.
            <br />
            There’s more here than meets the eye.
          </p>
          <div className="journal-wave" aria-hidden="true">
            {Array.from({ length: 35 }, (_, index) => (
              <i
                key={index}
                style={{ height: `${14 + ((index * 17 + 9) % 43)}px` }}
              />
            ))}
          </div>
          {audioError && (
            <p role="alert" className="journal-player-error">
              {audioError}
            </p>
          )}
          {musicError && (
            <p role="status" className="journal-player-error">
              {musicError}
            </p>
          )}
          <button
            className="journal-button journal-button-lime"
            onClick={isPlaying ? handlePauseAudio : handlePlayAudio}
            disabled={isGeneratingAudio}
          >
            {isPlaying ? <Pause size={17} /> : <Play size={17} />}
            {isGeneratingAudio
              ? "Preparing your audio…"
              : isPlaying
                ? "Pause guide"
                : isPaused
                  ? "Resume guide"
                  : "Play audio guide"}
          </button>
          {(isPlaying || isPaused) && (
            <button className="journal-player-stop" onClick={handleStopAudio}>
              <Square size={12} /> Stop and reset
            </button>
          )}
          {duration > 0 && (
            <div className="journal-audio-progress">
              <div
                role="progressbar"
                aria-label="Narration progress"
                aria-valuenow={Math.round(currentTime)}
                aria-valuemin={0}
                aria-valuemax={Math.round(duration)}
              >
                <span style={{ width: `${(currentTime / duration) * 100}%` }} />
              </div>
              <p>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </p>
            </div>
          )}
          <label className="journal-music-toggle">
            <input
              type="checkbox"
              checked={musicEnabled}
              onChange={(event) => {
                setMusicError("");
                musicEnabledRef.current = event.target.checked;
                setMusicEnabled(event.target.checked);
                playbackRef.current?.setMusicEnabled(event.target.checked);
              }}
            />
            Background music<span>OPTIONAL</span>
          </label>
          {isDailyChallenge && audioEnded && onStartQuiz && (
            <button
              className="journal-button journal-button-lime"
              onClick={onStartQuiz}
            >
              Take the daily quiz <ArrowUpRight size={16} />
            </button>
          )}
          <span className="journal-player-footnote">
            AI NARRATION / LISTEN AT YOUR OWN PACE
          </span>
        </aside>
      </div>
    </article>
  );
}
export default LandmarkDetail;

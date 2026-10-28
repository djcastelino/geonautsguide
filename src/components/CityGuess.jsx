import { completeCityStats } from "../utils/cityStats";
import {
  Archive,
  ArrowUpRight,
  BarChart3,
  Check,
  Globe2,
  Headphones,
  LockKeyhole,
  Pause,
  Share2,
  X,
} from "lucide-react";
import { createSpeechBlob } from "../services/backend";
import { useState, useEffect, useRef } from "react";
import { getDailyCity, CITIES } from "../data/cities";

const readLocal = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}") || {};
  } catch {
    return {};
  }
};
const todayGame = (city) => {
  const game = readLocal("cityGuess");
  return game.date === new Date().toDateString() && game.cityId === city.id
    ? game
    : {};
};

const CityGuess = () => {
  const [initial] = useState(() => {
    const city = getDailyCity();
    return { city, game: todayGame(city) };
  });
  const [dailyCity, setDailyCity] = useState(initial.city);
  const [revealedClues, setRevealedClues] = useState(
    initial.game.revealedClues ?? 1,
  );
  const [guesses, setGuesses] = useState(initial.game.guesses || []);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameState, setGameState] = useState(
    initial.game.gameState || "playing",
  ); // 'playing', 'won', 'lost'
  const [attemptsRemaining, setAttemptsRemaining] = useState(
    initial.game.attemptsRemaining ?? 6,
  );
  const [showStats, setShowStats] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [archiveDate, setArchiveDate] = useState(null);
  const [isArchiveMode, setIsArchiveMode] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const audioRef = useRef(null);
  const inputRef = useRef(null);

  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [audioError, setAudioError] = useState("");
  const guessBoxRef = useRef(null);
  const dialogRef = useRef(null);
  const audioUrlRef = useRef(null);
  const activeRef = useRef(true);
  useEffect(() => {
    activeRef.current = true;
    return () => {
      activeRef.current = false;
      audioRef.current?.pause();
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    };
  }, []);
  useEffect(() => {
    if (!showStats && !showArchive) return;
    const previous = document.activeElement;
    dialogRef.current?.querySelector("button")?.focus();
    const keys = (event) => {
      if (event.key === "Escape") {
        setShowStats(false);
        setShowArchive(false);
      }
      if (event.key === "Tab") {
        const buttons = [
          ...(dialogRef.current?.querySelectorAll("button, a[href], input") ||
            []),
        ];
        if (!buttons.length) return;
        if (event.shiftKey && document.activeElement === buttons[0]) {
          event.preventDefault();
          buttons.at(-1).focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === buttons.at(-1)
        ) {
          event.preventDefault();
          buttons[0].focus();
        }
      }
    };
    document.addEventListener("keydown", keys);
    return () => {
      document.removeEventListener("keydown", keys);
      previous?.focus();
    };
  }, [showStats, showArchive]);

  const saveGame = (
    updatedGuesses,
    updatedRevealed,
    updatedState,
    updatedAttempts,
  ) => {
    // Don't save archive games
    if (isArchiveMode) return;

    const today = new Date().toDateString();
    const gameData = {
      date: today,
      cityId: dailyCity.id,
      guesses: updatedGuesses,
      revealedClues: updatedRevealed,
      gameState: updatedState,
      attemptsRemaining: updatedAttempts,
    };
    localStorage.setItem("cityGuess", JSON.stringify(gameData));

    // Update stats when game ends (not for archive games)
    if (updatedState === "won" || updatedState === "lost") {
      updateStats(updatedState === "won", updatedGuesses.length);
    }
  };

  const updateStats = (won, guessCount) => {
    const stats = completeCityStats(
      readLocal("cityGuessStats"),
      won,
      guessCount,
    );
    localStorage.setItem("cityGuessStats", JSON.stringify(stats));
  };

  const getStats = () => {
    const stats = readLocal("cityGuessStats");
    return {
      gamesPlayed: stats.gamesPlayed || 0,
      gamesWon: stats.gamesWon || 0,
      winRate: stats.gamesPlayed
        ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
        : 0,
      currentStreak: stats.currentStreak || 0,
      bestStreak: stats.bestStreak || 0,
      guessDistribution: stats.guessDistribution || [0, 0, 0, 0, 0, 0],
    };
  };

  const handleShare = () => {
    const emoji = gameState === "won" ? "✅" : "❌";
    const guessCount = guesses.length;
    const shareText = `🌍 Geonauts City Guess\n\n${emoji} ${dailyCity.name}\nGuessed in ${guessCount}/6 attempts\n\nPlay daily at geonautsguide.com`;

    if (navigator.share) {
      navigator
        .share({
          title: "Geonauts City Guess",
          text: shareText,
        })
        .catch(() => {
          // Fallback to clipboard
          navigator.clipboard.writeText(shareText);
          alert("Results copied to clipboard!");
        });
    } else {
      navigator.clipboard.writeText(shareText);
      alert("Results copied to clipboard!");
    }
  };

  const playArchiveGame = (date) => {
    const city = getDailyCity(date);
    setDailyCity(city);
    setArchiveDate(date);
    setIsArchiveMode(true);
    setGuesses([]);
    setRevealedClues(1);
    setGameState("playing");
    setAttemptsRemaining(6);
    setShowArchive(false);

    // Clear cached audio so it generates fresh for archived city
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlayingAudio(false);
  };

  const handlePlayFunFact = async () => {
    if (isGeneratingAudio) return;
    setAudioError("");
    if (audioRef.current && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
      return;
    }
    setIsGeneratingAudio(true);
    try {
      if (!audioRef.current) {
        const blob = await createSpeechBlob(
          dailyCity.funFact,
          "en-US-AndrewMultilingualNeural",
        );
        if (!activeRef.current) return;
        audioUrlRef.current = URL.createObjectURL(blob);
        const audio = new Audio(audioUrlRef.current);
        audio.onended = audio.onpause = () => setIsPlayingAudio(false);
        audio.onplaying = () => setIsPlayingAudio(true);
        audio.onerror = () => {
          setIsPlayingAudio(false);
          setAudioError("This audio could not play. Please try again.");
          audioRef.current = null;
        };
        audioRef.current = audio;
      }
      await audioRef.current.play();
    } catch {
      if (activeRef.current)
        setAudioError("Audio could not start. Tap Listen again to retry.");
    } finally {
      if (activeRef.current) setIsGeneratingAudio(false);
    }
  };

  const backToToday = () => {
    setArchiveDate(null);
    setIsArchiveMode(false);
    const city = getDailyCity();
    setDailyCity(city);

    // Clear cached audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlayingAudio(false);

    const game = todayGame(city);
    setGuesses(game.guesses || []);
    setRevealedClues(game.revealedClues ?? 1);
    setGameState(game.gameState || "playing");
    setAttemptsRemaining(game.attemptsRemaining ?? 6);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    if (!currentGuess.trim() || gameState !== "playing") return;

    const normalizedGuess = currentGuess.trim().toLowerCase();
    const normalizedAnswer = dailyCity.name.toLowerCase();
    const isCorrect = normalizedGuess === normalizedAnswer;

    const newGuesses = [...guesses, { text: currentGuess.trim(), isCorrect }];
    const newAttempts = attemptsRemaining - 1;

    setGuesses(newGuesses);
    setAttemptsRemaining(newAttempts);
    setCurrentGuess("");
    setShowAutocomplete(false);

    if (isCorrect) {
      setGameState("won");
      saveGame(newGuesses, revealedClues, "won", newAttempts);
    } else if (newAttempts === 0) {
      setGameState("lost");
      saveGame(newGuesses, 6, "lost", 0);
    } else {
      // Reveal next clue after wrong guess
      const newRevealed = Math.min(revealedClues + 1, 6);
      setRevealedClues(newRevealed);
      saveGame(newGuesses, newRevealed, "playing", newAttempts);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCurrentGuess(value);
    setActiveSuggestion(-1);

    if (value.trim().length > 0) {
      const matches = CITIES.filter((city) =>
        city.name.toLowerCase().startsWith(value.trim().toLowerCase()),
      ).slice(0, 8);
      setFilteredCities(matches);
      setShowAutocomplete(matches.length > 0);
    } else {
      setShowAutocomplete(false);
      setFilteredCities([]);
    }
  };

  const handleSelectCity = (cityName) => {
    setCurrentGuess(cityName);
    setActiveSuggestion(-1);
    setShowAutocomplete(false);
    setFilteredCities([]);
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guessBoxRef.current && !guessBoxRef.current.contains(event.target)) {
        setShowAutocomplete(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const date = archiveDate || new Date();
  const stats = getStats();
  const over = gameState !== "playing";
  return (
    <div className="journal-page journal-city">
      <div className="journal-page-heading">
        <div>
          <p className="journal-kicker">
            A SMALL DAILY ADVENTURE /{" "}
            {isArchiveMode ? "FROM THE ARCHIVE" : "TODAY’S EDITION"}
          </p>
          <h1>
            Somewhere
            <br />
            <em>in the world.</em>
          </h1>
          <p>
            Six clues. Six chances. One city.
            <br />
            Let your curiosity connect the dots.
          </p>
        </div>
        <div className="journal-city-date">
          <Globe2 size={55} strokeWidth={0.8} />
          <span>{date.toLocaleDateString("en-US", { weekday: "long" })}</span>
          <strong>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </strong>
          <span>A FRESH PERSPECTIVE, EVERY DAY</span>
        </div>
      </div>
      <div className="journal-city-toolbar">
        <span className="journal-kicker">
          {isArchiveMode ? "EXPLORING YESTERDAY" : "THE DAILY CITY GUESS"} /{" "}
          {over ? "CHAPTER COMPLETE" : `${attemptsRemaining} CHANCES REMAIN`}
        </span>
        <div>
          {isArchiveMode && (
            <button onClick={backToToday}>
              Back to today <ArrowUpRight size={14} />
            </button>
          )}
          <button onClick={() => setShowStats(true)}>
            <BarChart3 size={15} /> Your stats
          </button>
          <button onClick={() => setShowArchive(true)}>
            <Archive size={15} /> Archive
          </button>
        </div>
      </div>
      <div className="journal-city-layout">
        <section className="journal-clue-card" aria-labelledby="clues-heading">
          <p className="journal-kicker">READ BETWEEN THE LINES</p>
          <h2 id="clues-heading">
            Every clue
            <br />
            <em>is a little closer.</em>
          </h2>
          <ol className="journal-clues">
            {dailyCity.clues.map((clue, index) => (
              <li
                key={index}
                className={
                  index < revealedClues || over ? "is-revealed" : "is-locked"
                }
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>
                  {index < revealedClues || over ? (
                    clue
                  ) : (
                    <>
                      <LockKeyhole size={13} /> Another guess opens another
                      door.
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <aside className="journal-guess-panel">
          <p className="journal-kicker">TRUST YOUR INSTINCT</p>
          <h2>
            {over ? (
              gameState === "won" ? (
                <>
                  You found
                  <br />
                  <em>your way.</em>
                </>
              ) : (
                <>
                  A new place
                  <br />
                  <em>to remember.</em>
                </>
              )
            ) : (
              <>
                Where could
                <br />
                <em>this be?</em>
              </>
            )}
          </h2>
          <div
            className="journal-attempt-dots"
            aria-label={`${guesses.length} of 6 guesses used`}
          >
            {Array.from({ length: 6 }, (_, index) => (
              <span
                key={index}
                className={index < guesses.length ? "is-used" : ""}
              />
            ))}
          </div>
          {gameState === "playing" ? (
            <form onSubmit={handleGuess}>
              <label htmlFor="city-guess-input">Your city</label>
              <div className="journal-guess-input" ref={guessBoxRef}>
                <input
                  id="city-guess-input"
                  ref={inputRef}
                  role="combobox"
                  aria-autocomplete="list"
                  aria-expanded={showAutocomplete}
                  aria-controls="city-suggestions"
                  aria-activedescendant={
                    activeSuggestion >= 0
                      ? `city-option-${filteredCities[activeSuggestion]?.id}`
                      : undefined
                  }
                  value={currentGuess}
                  onChange={handleInputChange}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setShowAutocomplete(false);
                      setActiveSuggestion(-1);
                    }
                    if (
                      showAutocomplete &&
                      filteredCities.length &&
                      ["ArrowDown", "ArrowUp"].includes(event.key)
                    ) {
                      event.preventDefault();
                      setActiveSuggestion(
                        (value) =>
                          (value +
                            (event.key === "ArrowDown" ? 1 : -1) +
                            filteredCities.length) %
                          filteredCities.length,
                      );
                    }
                    if (
                      event.key === "Enter" &&
                      showAutocomplete &&
                      activeSuggestion >= 0
                    ) {
                      event.preventDefault();
                      handleSelectCity(filteredCities[activeSuggestion].name);
                    }
                  }}
                  placeholder="Start typing a city…"
                  autoComplete="off"
                />
                {showAutocomplete && filteredCities.length > 0 && (
                  <div
                    className="journal-city-suggestions"
                    role="listbox"
                    id="city-suggestions"
                  >
                    {filteredCities.map((city, index) => (
                      <button
                        type="button"
                        role="option"
                        aria-selected={activeSuggestion === index}
                        id={`city-option-${city.id}`}
                        key={city.id}
                        onClick={() => handleSelectCity(city.name)}
                      >
                        <span>
                          {city.name}
                          <small>
                            {city.country}, {city.continent}
                          </small>
                        </span>
                        <ArrowUpRight size={15} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="journal-button journal-button-lime"
                disabled={!currentGuess.trim()}
              >
                Make a guess <ArrowUpRight size={17} />
              </button>
              <p className="journal-guess-hint">
                A wrong turn reveals the next clue.
              </p>
            </form>
          ) : (
            <div className="journal-guess-outcome">
              <p>
                {gameState === "won"
                  ? `Found in ${guesses.length} ${guesses.length === 1 ? "guess" : "guesses"}. A little curiosity goes a long way.`
                  : "Every discovery starts somewhere. There’s another city waiting tomorrow."}
              </p>
              <span className="journal-kicker">THE CITY WAS</span>
              <h3>{dailyCity.name}</h3>
              <span>{dailyCity.country}</span>
              <button
                className="journal-button journal-button-lime"
                onClick={handleShare}
              >
                <Share2 size={16} /> Share your discovery
              </button>
            </div>
          )}
          <div className="journal-guess-history" aria-live="polite">
            <p className="journal-kicker">YOUR EXPLORATIONS</p>
            {!guesses.length ? (
              <p>No guesses yet. The world is wide open.</p>
            ) : (
              guesses.map((guess, index) => (
                <div key={index}>
                  <span>0{index + 1}</span>
                  <strong>{guess.text}</strong>
                  <small>
                    {guess.isCorrect ? (
                      <>
                        <Check size={13} /> FOUND IT
                      </>
                    ) : (
                      "NOT QUITE"
                    )}
                  </small>
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
      {over && (
        <section className="journal-city-reveal">
          <p className="journal-kicker">TAKE A LITTLE KNOWLEDGE WITH YOU</p>
          <h2>
            {dailyCity.name},<br />
            <em>beyond the answer.</em>
          </h2>
          <div className="journal-city-fact">
            <div>
              <p className="journal-kicker">DID YOU KNOW?</p>
              <p>{dailyCity.funFact}</p>
              <a
                href={dailyCity.funFactSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: {dailyCity.funFactSource} <ArrowUpRight size={14} />
              </a>
            </div>
            <button
              onClick={handlePlayFunFact}
              className="journal-button"
              disabled={isGeneratingAudio}
            >
              {isPlayingAudio ? <Pause size={16} /> : <Headphones size={16} />}
              {isGeneratingAudio
                ? "Preparing audio…"
                : isPlayingAudio
                  ? "Pause fact"
                  : "Listen to the story"}
            </button>
          </div>
          {audioError && (
            <p className="journal-error" role="alert">
              {audioError}
            </p>
          )}
          <div className="journal-city-fact-grid">
            {[
              ["CONTINENT", dailyCity.continent],
              ["POPULATION", dailyCity.population],
              ["BY THE WATER", dailyCity.waterFeature],
              ["KNOWN FOR", dailyCity.famousFor],
            ].map(([label, value]) => (
              <div key={label}>
                <span className="journal-kicker">{label}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {(showStats || showArchive) && (
        <div
          className="journal-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowStats(false);
              setShowArchive(false);
            }
          }}
        >
          <section
            ref={dialogRef}
            className="journal-modal"
            role="dialog"
            aria-modal="true"
            aria-label={
              showStats ? "Your City Guess statistics" : "City Guess archive"
            }
          >
            <button
              className="journal-modal-close"
              onClick={() => {
                setShowStats(false);
                setShowArchive(false);
              }}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
            <p className="journal-kicker">THE CURIOUS KEEP COMING BACK</p>
            <h2>
              {showStats ? (
                <>
                  Your explorer’s
                  <br />
                  <em>record.</em>
                </>
              ) : (
                <>
                  A little
                  <br />
                  <em>time travel.</em>
                </>
              )}
            </h2>
            {showStats ? (
              <>
                <div className="journal-stats-grid">
                  {[
                    [stats.gamesPlayed, "PLAYED"],
                    [`${stats.winRate}%`, "WIN RATE"],
                    [stats.currentStreak, "CURRENT STREAK"],
                    [stats.bestStreak, "BEST STREAK"],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="journal-kicker">GUESSES TO FIND YOUR WAY</p>
                <div className="journal-guess-distribution">
                  {stats.guessDistribution.map((count, index) => (
                    <div key={index}>
                      <span>{index + 1}</span>
                      <div>
                        <i
                          style={{
                            width: `${count ? Math.max((count / Math.max(...stats.guessDistribution, 1)) * 100, 10) : 0}%`,
                          }}
                        />
                      </div>
                      <strong>{count}</strong>
                    </div>
                  ))}
                </div>
                <p className="journal-fine-print">
                  Your record is saved in this browser. Archive games don’t
                  affect it.
                </p>
              </>
            ) : (
              <>
                <p>
                  Yesterday’s city is still out there. Explore it without
                  changing today’s score or your streak.
                </p>
                <button
                  className="journal-archive-choice"
                  onClick={() => {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    playArchiveGame(yesterday);
                  }}
                >
                  <Archive size={25} strokeWidth={1} />
                  <span>
                    YESTERDAY’S EDITION
                    <strong>
                      {new Date(Date.now() - 86400000).toLocaleDateString(
                        "en-US",
                        { weekday: "long", month: "short", day: "numeric" },
                      )}
                    </strong>
                  </span>
                  <ArrowUpRight size={20} />
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
};
export default CityGuess;

import { useState, useEffect, useRef } from 'react';
import { getDailyCity, CITIES } from '../data/cities';

const CityGuess = () => {
  const [dailyCity, setDailyCity] = useState(null);
  const [revealedClues, setRevealedClues] = useState(1);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameState, setGameState] = useState('playing'); // 'playing', 'won', 'lost'
  const [attemptsRemaining, setAttemptsRemaining] = useState(6);
  const [showStats, setShowStats] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [archiveDate, setArchiveDate] = useState(null);
  const [isArchiveMode, setIsArchiveMode] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const city = getDailyCity();
    setDailyCity(city);
    
    // Check localStorage for today's game
    const today = new Date().toDateString();
    const savedGame = localStorage.getItem('cityGuess');
    
    if (savedGame) {
      const game = JSON.parse(savedGame);
      if (game.date === today && game.cityId === city.id) {
        setGuesses(game.guesses || []);
        setRevealedClues(game.revealedClues || 1);
        setGameState(game.gameState || 'playing');
        setAttemptsRemaining(game.attemptsRemaining || 6);
      }
    }
  }, []);

  const saveGame = (updatedGuesses, updatedRevealed, updatedState, updatedAttempts) => {
    // Don't save archive games
    if (isArchiveMode) return;
    
    const today = new Date().toDateString();
    const gameData = {
      date: today,
      cityId: dailyCity.id,
      guesses: updatedGuesses,
      revealedClues: updatedRevealed,
      gameState: updatedState,
      attemptsRemaining: updatedAttempts
    };
    localStorage.setItem('cityGuess', JSON.stringify(gameData));
    
    // Update stats when game ends (not for archive games)
    if (updatedState === 'won' || updatedState === 'lost') {
      updateStats(updatedState === 'won', updatedGuesses.length);
    }
  };

  const updateStats = (won, guessCount) => {
    const stats = JSON.parse(localStorage.getItem('cityGuessStats') || '{}');
    const today = new Date().toDateString();
    
    // Initialize stats if empty
    if (!stats.gamesPlayed) {
      stats.gamesPlayed = 0;
      stats.gamesWon = 0;
      stats.currentStreak = 0;
      stats.bestStreak = 0;
      stats.lastPlayedDate = null;
      stats.guessDistribution = [0, 0, 0, 0, 0, 0];
    }
    
    stats.gamesPlayed++;
    
    if (won) {
      stats.gamesWon++;
      stats.guessDistribution[guessCount - 1]++;
      
      // Update streak
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();
      
      if (stats.lastPlayedDate === yesterdayStr || !stats.lastPlayedDate) {
        stats.currentStreak++;
      } else {
        stats.currentStreak = 1;
      }
      
      if (stats.currentStreak > stats.bestStreak) {
        stats.bestStreak = stats.currentStreak;
      }
    } else {
      stats.currentStreak = 0;
    }
    
    stats.lastPlayedDate = today;
    localStorage.setItem('cityGuessStats', JSON.stringify(stats));
  };

  const getStats = () => {
    const stats = JSON.parse(localStorage.getItem('cityGuessStats') || '{}');
    return {
      gamesPlayed: stats.gamesPlayed || 0,
      gamesWon: stats.gamesWon || 0,
      winRate: stats.gamesPlayed ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0,
      currentStreak: stats.currentStreak || 0,
      bestStreak: stats.bestStreak || 0,
      guessDistribution: stats.guessDistribution || [0, 0, 0, 0, 0, 0]
    };
  };

  const handleShare = () => {
    const emoji = gameState === 'won' ? '✅' : '❌';
    const guessCount = guesses.length;
    const shareText = `🌍 Geonauts City Guess\n\n${emoji} ${dailyCity.name}\nGuessed in ${guessCount}/6 attempts\n\nPlay daily at geonautsguide.com`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Geonauts City Guess',
        text: shareText
      }).catch(() => {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText);
        alert('Results copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Results copied to clipboard!');
    }
  };

  const playArchiveGame = (date) => {
    const city = getDailyCity(date);
    setDailyCity(city);
    setArchiveDate(date);
    setIsArchiveMode(true);
    setGuesses([]);
    setRevealedClues(1);
    setGameState('playing');
    setAttemptsRemaining(6);
    setShowArchive(false);
  };

  const handlePlayFunFact = async () => {
    if (audioRef.current && !isPlayingAudio) {
      audioRef.current.play();
      setIsPlayingAudio(true);
      return;
    }

    if (audioRef.current && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
      return;
    }

    setIsGeneratingAudio(true);
    try {
      const voices = [
        'en-US-AndrewMultilingualNeural',
        'en-US-EmmaMultilingualNeural'
      ];
      const selectedVoice = voices[Math.floor(Math.random() * voices.length)];
      
      const azureKey = import.meta.env.VITE_AZURE_SPEECH_KEY;
      const azureRegion = import.meta.env.VITE_AZURE_SPEECH_REGION;
      
      const response = await fetch(
        `https://${azureRegion}.tts.speech.microsoft.com/cognitiveservices/v1`,
        {
          method: 'POST',
          headers: {
            'Ocp-Apim-Subscription-Key': azureKey,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3'
          },
          body: `<speak version='1.0' xml:lang='en-US'><voice xml:lang='en-US' name='${selectedVoice}'>${dailyCity.funFact}</voice></speak>`
        }
      );

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onended = () => {
        setIsPlayingAudio(false);
      };
      
      audio.onpause = () => {
        setIsPlayingAudio(false);
      };
      
      audio.play();
      setIsPlayingAudio(true);
      setIsGeneratingAudio(false);
    } catch (error) {
      console.error('Error generating audio:', error);
      setIsGeneratingAudio(false);
      alert('Failed to generate audio. Please try again.');
    }
  };

  const backToToday = () => {
    setArchiveDate(null);
    setIsArchiveMode(false);
    const city = getDailyCity();
    setDailyCity(city);
    
    // Reload today's saved game
    const today = new Date().toDateString();
    const savedGame = localStorage.getItem('cityGuess');
    
    if (savedGame) {
      const game = JSON.parse(savedGame);
      if (game.date === today && game.cityId === city.id) {
        setGuesses(game.guesses || []);
        setRevealedClues(game.revealedClues || 1);
        setGameState(game.gameState || 'playing');
        setAttemptsRemaining(game.attemptsRemaining || 6);
      }
    }
  };

  const handleGuess = (e) => {
    e.preventDefault();
    
    if (!currentGuess.trim() || gameState !== 'playing') return;

    const guess = currentGuess.trim();
    const isCorrect = guess.toLowerCase() === dailyCity.name.toLowerCase();
    
    const newGuesses = [...guesses, { text: guess, isCorrect }];
    const newAttempts = attemptsRemaining - 1;
    
    setGuesses(newGuesses);
    setCurrentGuess('');
    
    if (isCorrect) {
      setGameState('won');
      saveGame(newGuesses, revealedClues, 'won', newAttempts);
    } else if (newAttempts === 0) {
      setGameState('lost');
      saveGame(newGuesses, 6, 'lost', 0);
      setRevealedClues(6); // Reveal all clues on loss
    } else {
      setAttemptsRemaining(newAttempts);
      // Reveal next clue after wrong guess
      const newRevealed = Math.min(revealedClues + 1, 6);
      setRevealedClues(newRevealed);
      saveGame(newGuesses, newRevealed, 'playing', newAttempts);
    }
  };

  if (!dailyCity) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🌍</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Daily City Guess
        </h1>
        <p className="text-xl text-gray-600">One puzzle per day - Guess the city from the clues!</p>
      </div>

      {/* Clues Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Clues:</h2>
        <div className="space-y-4">
          {dailyCity.clues.slice(0, revealedClues).map((clue, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-2xl font-bold text-purple-600">{index + 1}.</span>
              <p className="text-gray-800 text-lg flex-1">{clue}</p>
            </div>
          ))}
          
          {dailyCity.clues.slice(revealedClues).map((_, index) => (
            <div key={revealedClues + index} className="flex items-start gap-3">
              <span className="text-2xl font-bold text-gray-300">{revealedClues + index + 1}.</span>
              <p className="text-gray-400 italic text-lg flex-1">
                🔒 Make another guess to reveal
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Guesses Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Guesses:</h2>
        
        {guesses.length === 0 ? (
          <p className="text-center text-gray-500">No guesses yet...</p>
        ) : (
          <div className="space-y-3">
            {guesses.map((guess, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  guess.isCorrect
                    ? 'bg-purple-100 border-2 border-purple-500'
                    : 'bg-gray-50'
                }`}
              >
                <span className="text-2xl">
                  {guess.isCorrect ? '✅' : '❌'}
                </span>
                <span className={`text-lg font-medium ${
                  guess.isCorrect ? 'text-purple-700' : 'text-gray-700'
                }`}>
                  {guess.text}
                </span>
              </div>
            ))}
          </div>
        )}
        
        <p className="text-center mt-4 text-gray-600 font-semibold">
          Remaining: {attemptsRemaining}/6
        </p>
      </div>

      {/* Input Form */}
      {gameState === 'playing' && (
        <form onSubmit={handleGuess} className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
              autoFocus
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              Guess
            </button>
          </div>
        </form>
      )}

      {/* Win State */}
      {gameState === 'won' && (
        <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-2">Correct!</h2>
            <p className="text-xl mb-4">
              You got it in {guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}!
            </p>
          </div>

          {/* Answer Card */}
          <div className="bg-white rounded-xl p-6 mt-6 text-gray-900">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌍</span>
              <h3 className="text-2xl font-bold text-purple-600">{dailyCity.name}</h3>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg mb-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">💡</span>
                  <p className="font-semibold text-purple-900">Did You Know?</p>
                </div>
                <button
                  onClick={handlePlayFunFact}
                  disabled={isGeneratingAudio}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 text-sm"
                >
                  {isGeneratingAudio ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent"></div>
                      <span>Loading...</span>
                    </>
                  ) : isPlayingAudio ? (
                    <>
                      <span>⏸️</span>
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <span>🎙️</span>
                      <span>Listen</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-gray-700 mb-2">{dailyCity.funFact}</p>
              <a 
                href={dailyCity.funFactSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 italic hover:underline"
              >
                Source: {dailyCity.funFactSource}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-600">Country:</p>
                <p className="text-gray-900">{dailyCity.country}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Continent:</p>
                <p className="text-gray-900">{dailyCity.continent}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Water Feature:</p>
                <p className="text-gray-900">{dailyCity.waterFeature}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Population:</p>
                <p className="text-gray-900">{dailyCity.population}</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold text-gray-600">Famous For:</p>
                <p className="text-gray-900">{dailyCity.famousFor}</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold text-gray-600">Difficulty:</p>
                <p className="text-gray-900 capitalize">{dailyCity.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
              onClick={handleShare}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
            >
              🎊 Share Result & Invite Friends
            </button>
            <button 
              onClick={() => setShowStats(true)}
              className="flex-1 bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-6 rounded-xl transition-all shadow-lg border-2 border-purple-600"
            >
              📊 View Stats
            </button>
            <button 
              onClick={() => setShowArchive(true)}
              className="flex-1 bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-6 rounded-xl transition-all shadow-lg border-2 border-purple-600"
            >
              📚 Archive
            </button>
          </div>
        </div>
      )}

      {/* Loss State */}
      {gameState === 'lost' && (
        <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-3xl font-bold mb-2">Out of Guesses!</h2>
            <p className="text-xl mb-4">The answer was: <strong>{dailyCity.name}</strong></p>
          </div>

          {/* Answer Card */}
          <div className="bg-white rounded-xl p-6 mt-6 text-gray-900">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌍</span>
              <h3 className="text-2xl font-bold text-purple-600">{dailyCity.name}</h3>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg mb-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">💡</span>
                  <p className="font-semibold text-purple-900">Did You Know?</p>
                </div>
                <button
                  onClick={handlePlayFunFact}
                  disabled={isGeneratingAudio}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 text-sm"
                >
                  {isGeneratingAudio ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent"></div>
                      <span>Loading...</span>
                    </>
                  ) : isPlayingAudio ? (
                    <>
                      <span>⏸️</span>
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <span>🎙️</span>
                      <span>Listen</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-gray-700 mb-2">{dailyCity.funFact}</p>
              <a 
                href={dailyCity.funFactSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 italic hover:underline"
              >
                Source: {dailyCity.funFactSource}
              </a>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 mb-2">Come back tomorrow for a new challenge!</p>
            </div>
          </div>
        </div>
      )}

      {/* Archive Badge - Show if viewing old puzzle */}
      {archiveDate && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
            <span>📚 Archive Mode</span>
            <button
              onClick={backToToday}
              className="bg-white text-orange-500 px-4 py-1 rounded-full font-semibold hover:bg-orange-50 transition-all"
            >
              Back to Today
            </button>
          </div>
        </div>
      )}

      {/* Stats Modal */}
      {showStats && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-purple-600">📊 Your Stats</h2>
              <button
                onClick={() => setShowStats(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>

            {(() => {
              const stats = getStats();
              const maxGuesses = Math.max(...stats.guessDistribution, 1);

              return (
                <>
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-purple-600">{stats.gamesPlayed}</div>
                      <div className="text-sm text-gray-600">Played</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-purple-600">{stats.winRate}%</div>
                      <div className="text-sm text-gray-600">Win Rate</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-purple-600">{stats.currentStreak}</div>
                      <div className="text-sm text-gray-600">Current Streak</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-purple-600">{stats.bestStreak}</div>
                      <div className="text-sm text-gray-600">Best Streak</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4">Guess Distribution</h3>
                    <div className="space-y-2">
                      {stats.guessDistribution.map((count, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="w-4 text-sm font-semibold">{index + 1}</span>
                          <div className="flex-1 bg-gray-200 rounded overflow-hidden">
                            <div
                              className="bg-purple-600 text-white text-right pr-2 py-1 text-sm font-semibold transition-all"
                              style={{ width: `${count === 0 ? 0 : Math.max((count / maxGuesses) * 100, 10)}%` }}
                            >
                              {count > 0 ? count : ''}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowStats(false)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    Close
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Archive Modal */}
      {showArchive && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-purple-600">📚 Archive</h2>
              <button
                onClick={() => setShowArchive(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>

            <p className="text-gray-600 mb-6">Test your knowledge on yesterday's puzzle (won't affect your stats)</p>

            <div className="flex justify-center mb-6">
              {(() => {
                const today = new Date();
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                const city = getDailyCity(yesterday);
                
                return (
                  <button
                    onClick={() => playArchiveGame(yesterday)}
                    className="bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 p-6 rounded-xl transition-all text-center min-w-[200px]"
                  >
                    <div className="text-sm text-gray-600 mb-2">
                      {yesterday.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-2xl font-bold text-purple-900 mb-1">{city.name}</div>
                    <div className="text-sm text-gray-500 capitalize">{city.difficulty} difficulty</div>
                  </button>
                );
              })()}
            </div>

            <button
              onClick={() => setShowArchive(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityGuess;

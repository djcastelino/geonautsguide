import LandmarkImage from './LandmarkImage';
import { createNarrationPlayback } from '../services/narrationPlayback';
import { createSpeechBlob } from '../services/backend';
import { useState, useRef, useEffect } from 'react';

function LandmarkDetail({ landmark, narration, onBack, isDailyChallenge = false, onStartQuiz }) {
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
  const [audioError, setAudioError] = useState('');
  const [musicEnabled, setMusicEnabled] = useState(false);

  const handlePlayAudio = async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    setAudioError('');
    setIsGeneratingAudio(true);
    try {
      if (!playbackRef.current) {
        const blob = await createSpeechBlob(narration, 'en-US-AndrewMultilingualNeural');
        if (!activeRef.current) return;
        audioUrlRef.current = URL.createObjectURL(blob);
        const audio = new Audio(audioUrlRef.current);
        audioRef.current = audio;
        playbackRef.current = createNarrationPlayback(audio, backgroundMusicRef.current, {
          onPlaying: () => { setIsPlaying(true); setIsPaused(false); setAudioEnded(false); },
          onDuration: setDuration,
          onTime: setCurrentTime,
          onEnded: () => { setIsPlaying(false); setIsPaused(false); setCurrentTime(0); setAudioEnded(true); },
          onError: (error) => {
            setIsPlaying(false); setIsPaused(false);
            if (audio.error) {
              playbackRef.current?.dispose();
              playbackRef.current = null;
              if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
              audioUrlRef.current = null;
            }
            setAudioError(error.name === 'NotAllowedError'
              ? 'Your browser blocked narration playback. Tap Play Audio Guide again.'
              : error.message || 'Narration could not play. Please try again.');
          },
        });
      }
      playbackRef.current.setMusicEnabled(musicEnabled);
      if (!isPaused) audioRef.current.currentTime = 0;
      await playbackRef.current.play();
    } catch (error) {
      if (!activeRef.current) return;
      setAudioError(error.name === 'NotAllowedError'
        ? 'Your browser blocked narration playback. Tap Play Audio Guide again.'
        : error.message || 'Narration could not play. Please try again.');
      setIsPlaying(false);
      // Keep successfully generated audio so a second tap can satisfy browser playback rules.
    } finally {
      busyRef.current = false;
      if (activeRef.current) setIsGeneratingAudio(false);
    }
  };

  const handlePauseAudio = () => {
    playbackRef.current?.pause();
    setIsPlaying(false); setIsPaused(true);
  };

  const handleStopAudio = () => {
    playbackRef.current?.stop();
    setIsPlaying(false); setIsPaused(false); setCurrentTime(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    activeRef.current = true;
    const music = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
    music.loop = true;
    music.volume = 0.04;
    music.preload = 'none';
    backgroundMusicRef.current = music;
    return () => {
      activeRef.current = false;
      playbackRef.current?.dispose();
      music.pause();
      music.src = '';
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">Back to landmarks</span>
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-96 bg-gray-300">
            <LandmarkImage
              landmark={landmark}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-3">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-sm font-semibold rounded-full text-gray-800">
                  {landmark.category}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">
                {landmark.name}
              </h1>
              <p className="text-xl text-white/90 flex items-center gap-2">
                <span>📍</span>
                {landmark.city}, {landmark.country}
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-500 mb-1">Built/Formed</p>
                <p className="text-lg font-semibold text-gray-900">{landmark.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Height/Size</p>
                <p className="text-lg font-semibold text-gray-900">{landmark.height}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-lg font-semibold text-gray-900">
                  {landmark.coordinates.lat.toFixed(4)}°, {landmark.coordinates.lng.toFixed(4)}°
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {landmark.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {landmark.significance}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎙️</span>
                <h2 className="text-xl font-bold text-gray-900">AI Audio Guide</h2>
              </div>
              
              <div className="bg-white rounded-xl p-6 mb-4">
                <p className="text-gray-700 leading-relaxed max-h-48 overflow-y-auto">
                  {narration}
                </p>
              </div>

              {audioError && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-red-700">{audioError}</p>}
              <label className="flex items-center gap-2 mb-4 text-sm text-gray-700">
                <input type="checkbox" checked={musicEnabled} onChange={event => {
                  setMusicEnabled(event.target.checked);
                  playbackRef.current?.setMusicEnabled(event.target.checked);
                }} />
                Background music
              </label>
              <div className="flex items-center gap-4">
                {!isPlaying && !isPaused ? (
                  <button
                    onClick={handlePlayAudio}
                    disabled={isGeneratingAudio}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isGeneratingAudio ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Generating audio...
                      </>
                    ) : (
                      <>
                        <span className="text-xl">▶️</span>
                        Play Audio Guide
                      </>
                    )}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={isPlaying ? handlePauseAudio : handlePlayAudio}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <span className="text-xl">{isPlaying ? '⏸️' : '▶️'}</span>
                      {isPlaying ? 'Pause' : 'Resume'}
                    </button>
                    <button
                      onClick={handleStopAudio}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <span className="text-xl">⏹️</span>
                      Stop
                    </button>
                  </>
                )}
              </div>
              
              {duration > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {/* Daily Challenge Quiz Button */}
              {isDailyChallenge && audioEnded && onStartQuiz && (
                <button
                  onClick={onStartQuiz}
                  className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span className="text-xl">🎯</span>
                  Take Quiz & Complete Challenge
                </button>
              )}
            </div>

            {/* Did You Know - Featured Landmark Only */}
            {isDailyChallenge && landmark.didYouKnow && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💡</span>
                  <h2 className="text-xl font-bold text-gray-900">Did You Know?</h2>
                  <span className="ml-auto bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Today's Featured Only</span>
                </div>
                <ul className="space-y-3">
                  {landmark.didYouKnow.map((fact, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-orange-500 font-bold text-lg flex-shrink-0">{index + 1}.</span>
                      <p className="text-gray-700 leading-relaxed">{fact}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Explorer's Notes - Featured Landmark Only */}
            {isDailyChallenge && landmark.explorerNotes && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🧳</span>
                  <h2 className="text-xl font-bold text-gray-900">Explorer's Notes</h2>
                  <span className="ml-auto bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Today's Featured Only</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>⏰</span> Best Time to Visit
                    </h3>
                    <p className="text-gray-700 text-sm">{landmark.explorerNotes.bestTimeToVisit}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>💰</span> Entrance Fee
                    </h3>
                    <p className="text-gray-700 text-sm">{landmark.explorerNotes.entranceFee}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>🗺️</span> Nearby Attractions
                    </h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      {landmark.explorerNotes.nearbyAttractions.slice(0, 3).map((attraction, idx) => (
                        <li key={idx}>• {attraction}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>🍽️</span> Local Cuisine
                    </h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      {landmark.explorerNotes.localCuisine.slice(0, 3).map((food, idx) => (
                        <li key={idx}>• {food}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:col-span-2">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>💡</span> Travel Tip
                    </h3>
                    <p className="text-gray-700 text-sm">{landmark.explorerNotes.travelTip}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:col-span-2">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>🌤️</span> Weather
                    </h3>
                    <p className="text-gray-700 text-sm">{landmark.explorerNotes.avgWeather}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Sources & Further Reading</h3>
              <p className="text-sm text-gray-600 mb-4">Verify facts and explore more about {landmark.name}</p>
              <div className="flex gap-4">
                <a
                  href={`https://en.wikipedia.org/wiki/${landmark.name.replace(/ /g, '_')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
                >
                  📖 Wikipedia
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${landmark.coordinates.lat},${landmark.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
                >
                  🗺️ View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandmarkDetail;

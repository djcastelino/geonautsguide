import { useState, useEffect } from 'react';
import Header from './components/Header';
import LandmarkGrid from './components/LandmarkGrid';
import LandmarkDetail from './components/LandmarkDetail';
import MapView from './components/MapView';
import DailyChallenge from './components/DailyChallenge';
import ChallengeBanner from './components/ChallengeBanner';
import TripPlanner from './components/TripPlanner';
import CityGuess from './components/CityGuess';
import { fetchWikipediaSummary, generateNarration } from './services/api';
import landmarksData from './data/landmarks.json';

function App() {
  const [currentView, setCurrentView] = useState('grid');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [narrationData, setNarrationData] = useState(null);
  const [showChallenge, setShowChallenge] = useState(false);
  const [isDailyChallenge, setIsDailyChallenge] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const loadLandmarkNarration = async (landmark) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const wiki = await fetchWikipediaSummary(landmark.name);
      const wikiContext = wiki?.extract || landmark.description;
      
      const landmarkContext = {
        landmarkName: landmark.name,
        description: landmark.description,
        significance: landmark.significance,
        year: landmark.year,
        category: landmark.category,
        country: landmark.country
      };
      
      const narration = await generateNarration(
        landmark.name,
        wikiContext,
        landmark.name.replace(/ /g, '_'),
        landmarkContext
      );
      
      console.log('Generated narration:', narration);
      
      if (!narration || !narration.narration) {
        throw new Error('No narration text received from API');
      }
      
      setNarrationData(narration);
      setCurrentView('detail');
    } catch (err) {
      console.error('Failed to load narration:', err);
      setError(`Failed to load narration: ${err.message}. Please try again.`);
      setCurrentView('grid'); // Stay on grid view if error
      setIsDailyChallenge(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLandmarkSelect = async (landmark) => {
    setSelectedLandmark(landmark);
    await loadLandmarkNarration(landmark);
  };

  const handleBackToGrid = () => {
    setCurrentView('grid');
    setSelectedLandmark(null);
    setNarrationData(null);
    setError(null);
    setIsDailyChallenge(false);
    setShowQuiz(false);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleChallengeStart = async (landmark) => {
    // Mark this as a daily challenge and start the audio tour
    setIsDailyChallenge(true);
    setSelectedLandmark(landmark); // Set the landmark so detail view can render
    await loadLandmarkNarration(landmark);
  };

  const handleChallengeClose = () => {
    setShowChallenge(false);
  };

  const handleStartQuiz = () => {
    // Show quiz after audio completes
    setShowQuiz(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50">
      {currentView === 'grid' && (
        <Header 
          showBack={false} 
          onBack={handleBackToGrid} 
        />
      )}
      
      <main className="flex-1">
        {error && (
          <div className="max-w-7xl mx-auto px-4 mt-6">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              <p className="font-medium">{error}</p>
            </div>
          </div>
        )}

        {currentView === 'grid' ? (
          <div>
            {/* Daily Challenge Banner */}
            <div className="mt-8">
              <ChallengeBanner
                landmarks={landmarksData.landmarks}
                onClick={() => {
                  setViewMode('grid'); // Switch to grid view to prevent map interference
                  setShowChallenge(true);
                }}
              />
            </div>

            {/* View Toggle */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => toggleViewMode('grid')}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                    viewMode === 'grid'
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  📱 Grid
                </button>
                <button
                  onClick={() => toggleViewMode('map')}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                    viewMode === 'map'
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  🗺️ Map
                </button>
                <button
                  onClick={() => toggleViewMode('planner')}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                    viewMode === 'planner'
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  ✈️ Planner
                </button>
                <button
                  onClick={() => toggleViewMode('cityguess')}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                    viewMode === 'cityguess'
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  🌍 City Guess
                </button>
              </div>
            </div>

            {/* Content */}
            {viewMode === 'grid' ? (
              <LandmarkGrid 
                landmarks={landmarksData.landmarks}
                onLandmarkSelect={handleLandmarkSelect}
                isLoading={isLoading}
              />
            ) : viewMode === 'map' ? (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MapView
                  landmarks={landmarksData.landmarks}
                  onLandmarkSelect={handleLandmarkSelect}
                  selectedCategory="All"
                />
              </div>
            ) : viewMode === 'planner' ? (
              <TripPlanner landmarks={landmarksData.landmarks} />
            ) : (
              <CityGuess />
            )}
          </div>
        ) : currentView === 'detail' && selectedLandmark && narrationData ? (
          <LandmarkDetail
            landmark={selectedLandmark}
            narration={narrationData.narration}
            audioContent={narrationData.audioContent}
            onBack={handleBackToGrid}
            isDailyChallenge={isDailyChallenge}
            onStartQuiz={handleStartQuiz}
          />
        ) : null}
      </main>

      <footer className="py-8 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Geonauts Guide. Your daily geography adventure.
      </footer>

      {/* Daily Challenge Modal */}
      {showChallenge && !showQuiz && (
        <DailyChallenge
          landmarks={landmarksData.landmarks}
          onStartChallenge={handleChallengeStart}
          onClose={handleChallengeClose}
        />
      )}
      
      {/* Quiz Modal */}
      {showQuiz && (
        <DailyChallenge
          landmarks={landmarksData.landmarks}
          onStartChallenge={handleChallengeStart}
          onClose={() => {
            setShowQuiz(false);
            setIsDailyChallenge(false);
            handleBackToGrid();
          }}
          startWithQuiz={true}
        />
      )}
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchScreen from './components/SearchScreen';
import ViewerScreen from './components/ViewerScreen';
import { LocationData } from './types';
import { geocodeLocation, fetchWikipediaSummary, generateNarration } from './services/api';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'search' | 'viewer'>('search');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  // Dynamically load Google Maps script
  useEffect(() => {
    // Cast window to any to safely check if the google object is already loaded
    if ((window as any).google) return;
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // 1. Geocode
      const geo = await geocodeLocation(query);
      if (!geo) {
        setError("We couldn't find that location. Please try a different name.");
        setIsLoading(false);
        return;
      }

      // 2. Wikipedia Summary
      const wiki = await fetchWikipediaSummary(query);
      if (!wiki) {
        setError("We found the location but couldn't find historical details for it.");
        setIsLoading(false);
        return;
      }

      // 3. AI Narration
      const narration = await generateNarration(geo.name, wiki.extract);

      // 4. Set State
      setLocationData({
        name: geo.name,
        lat: geo.lat,
        lng: geo.lng,
        narration,
        historicalContext: wiki
      });
      setCurrentView('viewer');
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetToSearch = () => {
    setCurrentView('search');
    setError(null);
    setLocationData(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        showBack={currentView === 'viewer'} 
        onBack={resetToSearch} 
      />
      
      <main className="flex-1">
        {error && (
          <div className="max-w-2xl mx-auto px-4 mt-6">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              <p className="font-medium">{error}</p>
            </div>
          </div>
        )}

        {currentView === 'search' ? (
          <SearchScreen onSearch={handleSearch} isLoading={isLoading} />
        ) : (
          locationData && (
            <ViewerScreen 
              data={locationData} 
              onReset={resetToSearch} 
            />
          )
        )}
      </main>

      <footer className="py-8 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} PathFinder AI Explorer. Powered by Google Maps & Gemini.
      </footer>
    </div>
  );
};

export default App;

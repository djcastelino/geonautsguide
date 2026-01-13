import { useState, useMemo } from 'react';

const TripPlanner = ({ landmarks }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLandmarks, setSelectedLandmarks] = useState([]);
  const [tripView, setTripView] = useState('selector'); // 'selector' or 'itinerary'

  // Get unique countries with landmark counts
  const countries = useMemo(() => {
    const countryMap = {};
    landmarks.forEach(landmark => {
      if (!countryMap[landmark.country]) {
        countryMap[landmark.country] = {
          name: landmark.country,
          count: 0,
          landmarks: []
        };
      }
      countryMap[landmark.country].count++;
      countryMap[landmark.country].landmarks.push(landmark);
    });
    return Object.values(countryMap).sort((a, b) => a.name.localeCompare(b.name));
  }, [landmarks]);

  // Get landmarks for selected country grouped by city
  const landmarksByCity = useMemo(() => {
    if (!selectedCountry) return {};
    
    const cityMap = {};
    const countryLandmarks = landmarks.filter(l => l.country === selectedCountry);
    
    countryLandmarks.forEach(landmark => {
      if (!cityMap[landmark.city]) {
        cityMap[landmark.city] = [];
      }
      cityMap[landmark.city].push(landmark);
    });
    
    return cityMap;
  }, [selectedCountry, landmarks]);

  const handleLandmarkToggle = (landmark) => {
    setSelectedLandmarks(prev => {
      const exists = prev.find(l => l.id === landmark.id);
      if (exists) {
        return prev.filter(l => l.id !== landmark.id);
      }
      return [...prev, landmark];
    });
  };

  const handleCreateTrip = () => {
    if (selectedLandmarks.length > 0) {
      setTripView('itinerary');
    }
  };

  const handleBackToSelector = () => {
    setTripView('selector');
  };

  if (tripView === 'itinerary') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-6">
          <button
            onClick={handleBackToSelector}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl">←</span>
            <span className="font-medium">Back to selection</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Your {selectedCountry} Trip</h2>
            <p className="text-gray-600">{selectedLandmarks.length} landmarks selected</p>
          </div>

          <div className="space-y-6">
            {selectedLandmarks.map((landmark, index) => (
              <div
                key={landmark.id}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{landmark.name}</h3>
                        <p className="text-sm text-gray-600">📍 {landmark.city}</p>
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {landmark.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{landmark.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                        🎙️ Audio Tour
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                        🍴 Restaurants
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                        🗺️ View on Map
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg">
              💾 Save Trip
            </button>
            <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all">
              📤 Share Trip
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Plan Your Trip</h2>
        <p className="text-gray-600 text-lg">
          Select a country and choose landmarks to create your perfect itinerary
        </p>
      </div>

      {/* Country Selector */}
      {!selectedCountry ? (
        <div>
          <h3 className="text-xl font-bold mb-4">Choose a Country</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map(country => (
              <button
                key={country.name}
                onClick={() => setSelectedCountry(country.name)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <h4 className="text-xl font-bold mb-2">{country.name}</h4>
                <p className="text-sm text-gray-600">
                  {country.count} landmark{country.count !== 1 ? 's' : ''}
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <button
                onClick={() => {
                  setSelectedCountry('');
                  setSelectedLandmarks([]);
                }}
                className="text-blue-600 hover:text-blue-700 font-semibold mb-2"
              >
                ← Change Country
              </button>
              <h3 className="text-2xl font-bold">{selectedCountry}</h3>
              <p className="text-gray-600">
                {selectedLandmarks.length} landmark{selectedLandmarks.length !== 1 ? 's' : ''} selected
              </p>
            </div>
            
            {selectedLandmarks.length > 0 && (
              <button
                onClick={handleCreateTrip}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg"
              >
                Create Trip →
              </button>
            )}
          </div>

          {/* Landmarks by City */}
          <div className="space-y-8">
            {Object.entries(landmarksByCity).map(([city, cityLandmarks]) => (
              <div key={city}>
                <h4 className="text-xl font-bold mb-4 text-gray-800">📍 {city}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cityLandmarks.map(landmark => {
                    const isSelected = selectedLandmarks.some(l => l.id === landmark.id);
                    
                    return (
                      <div
                        key={landmark.id}
                        onClick={() => handleLandmarkToggle(landmark)}
                        className={`bg-white border-2 rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                          isSelected
                            ? 'border-blue-500 shadow-lg'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="relative">
                          <img
                            src={landmark.imageUrl}
                            alt={landmark.name}
                            className="w-full h-48 object-cover"
                          />
                          {isSelected && (
                            <div className="absolute top-2 right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                              ✓
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h5 className="font-bold text-lg mb-1">{landmark.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{landmark.category}</p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {landmark.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlanner;

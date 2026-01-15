import { useState } from 'react';

const TripPlanner = ({ landmarks }) => {
  const [tripView, setTripView] = useState('form');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [tripData, setTripData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const interestCategories = [
    { id: 'culture', name: 'Culture & History', emoji: '🏛️' },
    { id: 'food', name: 'Food & Dining', emoji: '🍜' },
    { id: 'adventure', name: 'Adventure', emoji: '⛰️' },
    { id: 'beach', name: 'Beach & Relaxation', emoji: '🏖️' },
    { id: 'shopping', name: 'Shopping', emoji: '🛍️' },
    { id: 'nightlife', name: 'Nightlife', emoji: '🎉' },
    { id: 'nature', name: 'Nature', emoji: '🌿' },
    { id: 'art', name: 'Art & Museums', emoji: '🎨' },
    { id: 'religious', name: 'Religious Sites', emoji: '⛪' }
  ];

  const handleInterestToggle = (interestId) => {
    setSelectedInterests(prev =>
      prev.includes(interestId) ? prev.filter(id => id !== interestId) : [...prev, interestId]
    );
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const handleGenerateTrip = async () => {
    if (!destination || !startDate || !endDate || selectedInterests.length === 0) {
      alert('Please fill in all fields and select at least one interest');
      return;
    }

    setIsGenerating(true);
    setTripView('generating');

    try {
      const response = await fetch('https://workflowly.online/webhook/generate-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination,
          startDate,
          endDate,
          interests: selectedInterests,
          landmarks
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate trip');
      }

      const data = await response.json();
      setTripData(data);
      setIsGenerating(false);
      setTripView('itinerary');
    } catch (error) {
      console.error('Error generating trip:', error);
      alert('Failed to generate trip. Please try again.');
      setIsGenerating(false);
      setTripView('form');
    }
  };

  const handleBackToForm = () => {
    setTripView('form');
    setTripData(null);
  };

  if (tripView === 'generating') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-6xl mb-6 animate-bounce">✨</div>
          <h2 className="text-3xl font-bold mb-4">Creating Your Perfect Trip...</h2>
          <p className="text-gray-600 mb-6">
            Our AI is analyzing {destination} and crafting a personalized itinerary just for you
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (tripView === 'itinerary' && tripData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <button
          onClick={handleBackToForm}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">Plan Another Trip</span>
        </button>

        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-2xl p-8 sm:p-12 text-white mb-6 shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{tripData.destination}</h1>
          <p className="text-lg sm:text-xl mb-6 opacity-90">{tripData.description}</p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-xl">📅</span>
            <span className="font-semibold">{tripData.days} days</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">☀️</span>
              <h3 className="text-xl font-bold">Weather</h3>
            </div>
            <p className="text-gray-700 mb-2">{tripData.weather.advice}</p>
            <div className="text-2xl font-bold text-orange-600">{tripData.weather.temperature}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎒</span>
              <h3 className="text-xl font-bold">Pack These</h3>
            </div>
            <ul className="space-y-2">
              {tripData.packing.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-center gap-2">
                  <span className="text-green-600">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">✨</span>
            <h2 className="text-3xl font-bold">Your Day-by-Day Adventure</h2>
          </div>

          <div className="space-y-6">
            {tripData.itinerary.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Day {day.day}: {day.title}</h3>
                      <p className="opacity-90">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span>☀️</span>
                      <span className="font-semibold">{day.weather}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="mb-6 last:mb-0">
                      <div className="border-l-4 border-purple-500 pl-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{activity.emoji}</span>
                          <h4 className="font-bold text-gray-500 uppercase text-sm">{activity.time}</h4>
                        </div>
                        
                        <h5 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h5>
                        
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>📍</span>
                            <a 
                              href={activity.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              {activity.location}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>⏱️</span>
                            <span>{activity.duration}</span>
                          </div>
                          {activity.hasAudioTour && (
                            <div className="flex items-center gap-2 text-green-700 font-semibold">
                              <span>🎙️</span>
                              <span>Audio Tour Available</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-amber-600">💡</span>
                            <p className="text-sm text-gray-700">Tip: {activity.tip}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg">
            💾 Save Trip
          </button>
          <button className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg">
            📤 Share Trip
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">✈️</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          TripCraft AI
        </h1>
        <p className="text-xl text-gray-600">Create your perfect trip in seconds with AI</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <div className="mb-8">
          <label className="flex items-center gap-2 text-lg font-bold mb-3">
            <span>📍</span>
            Where do you want to go?
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g., Paris, France"
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="flex items-center gap-2 text-lg font-bold mb-3">
              <span>📅</span>
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-lg font-bold mb-3">
              <span>📅</span>
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500"
            />
          </div>
        </div>

        <div className="mb-10">
          <label className="flex items-center gap-2 text-lg font-bold mb-4">
            <span>❤️</span>
            What are you interested in?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {interestCategories.map(interest => {
              const isSelected = selectedInterests.includes(interest.id);
              return (
                <button
                  key={interest.id}
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 sm:p-6 rounded-xl border-2 transition-all ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-3xl sm:text-4xl mb-2">{interest.emoji}</div>
                  <div className="text-xs sm:text-sm font-semibold">{interest.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleGenerateTrip}
          disabled={!destination || !startDate || !endDate || selectedInterests.length === 0}
          className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 sm:py-5 px-8 rounded-xl text-lg sm:text-xl flex items-center justify-center gap-3"
        >
          <span>✨</span>
          Plan My Perfect Trip
        </button>

        {calculateDays() > 0 && (
          <p className="text-center mt-4 text-gray-600">
            Planning a {calculateDays()}-day adventure
          </p>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;

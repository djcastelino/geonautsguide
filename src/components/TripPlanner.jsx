import { useState } from 'react';

const TripPlanner = ({ landmarks }) => {
  const [tripView, setTripView] = useState('form');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interestCategories = [
    { id: 'culture', name: 'Culture & History', emoji: '🏛️' },
    { id: 'food', name: 'Food & Dining', emoji: '🍜' },
    { id: 'adventure', name: 'Adventure', emoji: '⛰️' },
    { id: 'beach', name: 'Beach & Relaxation', emoji: '🏖️' },
    { id: 'shopping', name: 'Shopping', emoji: '🛍️' },
    { id: 'nightlife', name: 'Nightlife', emoji: '🎉' },
    { id: 'nature', name: 'Nature', emoji: '🌿' },
    { id: 'art', name: 'Art & Museums', emoji: '🎨' }
  ];

  const handleInterestToggle = (interestId) => {
    setSelectedInterests(prev =>
      prev.includes(interestId) ? prev.filter(id => id !== interestId) : [...prev, interestId]
    );
  };

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
          disabled={!destination || !startDate || !endDate || selectedInterests.length === 0}
          className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-bold py-4 sm:py-5 px-8 rounded-xl text-lg sm:text-xl flex items-center justify-center gap-3"
        >
          <span>✨</span>
          Plan My Perfect Trip
        </button>
      </div>
    </div>
  );
};

export default TripPlanner;

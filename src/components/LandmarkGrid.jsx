import { useState } from 'react';

function LandmarkGrid({ landmarks, onLandmarkSelect, isLoading }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllLandmarks, setShowAllLandmarks] = useState(false);

  // Get daily featured landmark (rotates daily)
  const getDailyLandmark = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    return landmarks[dayOfYear % landmarks.length];
  };

  // Get 3 most recent landmarks (last 3 in array)
  const recentLandmarks = landmarks.slice(-3).reverse();
  const featuredLandmark = getDailyLandmark();

  const categories = ['All', 'Ancient Wonder', 'Modern Icon', 'Sacred Architecture', 'Natural Wonder', 
                      'Archaeological Site', 'Medieval Castle', 'Palace', 'Engineering Marvel', 'Museum', 'Historic Site'];

  const filteredLandmarks = landmarks.filter(landmark => {
    const matchesCategory = selectedCategory === 'All' || landmark.category === selectedCategory;
    const matchesSearch = landmark.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          landmark.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          landmark.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (showAllLandmarks) {
    // Full browse view
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <button
            onClick={() => setShowAllLandmarks(false)}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-4 transition-colors"
          >
            <span>←</span> Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse All Landmarks</h1>
          <p className="text-gray-600">Explore 100 of the world's most iconic places</p>
        </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search landmarks, countries, cities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:bg-purple-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredLandmarks.length} landmark{filteredLandmarks.length !== 1 ? 's' : ''}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLandmarks.map(landmark => (
            <div
              key={landmark.id}
              onClick={() => onLandmarkSelect(landmark)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-gray-300">
                <img
                  src={landmark.imageUrl}
                  alt={landmark.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Image failed for ${landmark.name}:`, landmark.imageUrl);
                    e.target.style.backgroundColor = '#e5e7eb';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800">
                    {landmark.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold mb-1 drop-shadow-lg">
                    {landmark.name}
                  </h3>
                  <p className="text-white/90 text-sm flex items-center gap-1">
                    <span>📍</span>
                    {landmark.city}, {landmark.country}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {landmark.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {landmark.year}
                  </span>
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                    Discover →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredLandmarks.length === 0 && !isLoading && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 mb-2">No landmarks found</p>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
    );
  }

  // Home view with featured landmark + recent landmarks
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover World Landmarks</h1>
        <p className="text-gray-600">Your daily journey through history and culture</p>
      </div>

      {/* Featured Daily Landmark - Large Hero Card */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>✨</span> Today's Featured Landmark
        </h2>
        <div
          onClick={() => onLandmarkSelect(featuredLandmark)}
          className="group cursor-pointer bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="relative h-96 overflow-hidden">
            <img
              src={featuredLandmark.imageUrl}
              alt={featuredLandmark.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-white text-purple-600 text-sm font-bold rounded-full shadow-lg">
                {featuredLandmark.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white text-4xl font-bold mb-3 drop-shadow-2xl">
                {featuredLandmark.name}
              </h3>
              <p className="text-white/90 text-lg flex items-center gap-2 mb-4">
                <span>📍</span>
                {featuredLandmark.city}, {featuredLandmark.country}
              </p>
              <p className="text-white/80 text-base mb-6 max-w-3xl">
                {featuredLandmark.description}
              </p>
              <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all shadow-lg">
                Explore with AI Guide →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Added Landmarks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recently Added</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentLandmarks.map(landmark => (
            <div
              key={landmark.id}
              onClick={() => onLandmarkSelect(landmark)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-300">
                <img
                  src={landmark.imageUrl}
                  alt={landmark.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold mb-1 drop-shadow-lg">
                    {landmark.name}
                  </h3>
                  <p className="text-white/90 text-sm flex items-center gap-1">
                    <span>📍</span>
                    {landmark.city}, {landmark.country}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {landmark.description}
                </p>
                <button className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  Discover →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse All Landmarks Button */}
      <div className="text-center">
        <button
          onClick={() => setShowAllLandmarks(true)}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          📚 Browse All {landmarks.length} Landmarks
        </button>
      </div>
    </div>
  );
}

export default LandmarkGrid;

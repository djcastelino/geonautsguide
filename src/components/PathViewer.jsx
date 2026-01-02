import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import StreetView from './StreetView'

export default function PathViewer({ path, currentLocationIndex, onBack, onNext, onPrev }) {
  const [aiNarration, setAiNarration] = useState(null)
  const [historicalContext, setHistoricalContext] = useState(null)
  const [loadingNarration, setLoadingNarration] = useState(false)
  
  const currentLocation = path.locations[currentLocationIndex]
  const isFirstLocation = currentLocationIndex === 0
  const isLastLocation = currentLocationIndex === path.locations.length - 1

  useEffect(() => {
    fetchAINarration()
  }, [currentLocationIndex])

  const fetchAINarration = async () => {
    setLoadingNarration(true)
    setAiNarration(null)
    setHistoricalContext(null)
    
    try {
      const response = await fetch('https://workflowly.online/webhook/pathfinder-narration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pathId: path.id,
          locationId: currentLocation.id,
          locationTitle: currentLocation.title,
          locationDescription: currentLocation.description,
          wikipediaPage: currentLocation.wikipediaPage
        })
      })
      const data = await response.json()
      setAiNarration(data.narration)
      setHistoricalContext(data.historicalContext)
    } catch (error) {
      console.error('Error fetching narration:', error)
      setAiNarration('Unable to load narration. Please try again.')
    } finally {
      setLoadingNarration(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-lg p-5 mb-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Paths</span>
            </button>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900">{path.title}</h2>
              <p className="text-sm text-blue-600 font-medium">
                Location {currentLocationIndex + 1} of {path.locations.length}
              </p>
            </div>
            <div className="w-32"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Street View */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <StreetView
              lat={currentLocation.lat}
              lng={currentLocation.lng}
              heading={0}
              pitch={0}
            />
          </div>

          {/* Information Panel */}
          <div className="space-y-4">
            {/* Location Info */}
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {currentLocation.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{currentLocation.title}</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">{currentLocation.description}</p>
              <p className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg inline-block">
                📍 {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}
              </p>
            </div>

            {/* AI Narration */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-5 border-2 border-purple-200">
              <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🤖</span> AI Tour Guide
              </h4>
              {loadingNarration ? (
                <div className="flex items-center gap-3 text-purple-700">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-600 border-t-transparent"></div>
                  <span className="font-medium">Loading narration...</span>
                </div>
              ) : aiNarration ? (
                <p className="text-gray-800 leading-relaxed">{aiNarration}</p>
              ) : null}
            </div>

            {/* Wikipedia Info */}
            {historicalContext && (
              <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">📚</span> Historical Context
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">{historicalContext.extract}</p>
                {historicalContext.url && (
                  <a
                    href={historicalContext.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more on Wikipedia →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={onPrev}
            disabled={isFirstLocation}
            className={`px-6 py-3 rounded-lg font-semibold transition-all shadow-md ${
              isFirstLocation
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-blue-600 border-2 border-blue-500 hover:bg-blue-50'
            }`}
          >
            ← Previous Location
          </button>

          <button
            onClick={onNext}
            disabled={isLastLocation}
            className={`px-6 py-3 rounded-lg font-semibold transition-all shadow-md ${
              isLastLocation
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
            }`}
          >
            Next Location →
          </button>
        </div>

        {/* Completion Message */}
        {isLastLocation && (
          <div className="mt-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg p-6 text-center text-white">
            <p className="text-2xl font-bold mb-2">🎉 Path Complete!</p>
            <p className="text-lg mb-4">
              You've explored all {path.locations.length} locations on this historic journey
            </p>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 shadow-md transition-all"
            >
              Explore More Paths
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PathSelection({ paths, onSelectPath }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">PathFinder</h1>
          <p className="text-gray-600 mb-8">Select a historical path to explore</p>
          
          <div className="space-y-4">
            {paths.map((path) => (
              <div
                key={path.id}
                onClick={() => onSelectPath(path)}
                className="border-2 border-gray-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all bg-gradient-to-r from-white to-blue-50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                    <p className="text-gray-600 mb-3">{path.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="font-medium">📍 {path.locationCount} locations</span>
                      <span>•</span>
                      <span className="font-medium">⏱️ {path.duration}</span>
                      <span>•</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{path.category}</span>
                    </div>
                  </div>
                  <button className="ml-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md">
                    Start Path
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

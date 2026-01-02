import { ArrowLeft, Compass } from 'lucide-react';

export default function Header({ showBack, onBack }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-xl p-2.5 shadow-md">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">PathFinder</h1>
            <p className="text-xs text-gray-500">Historical AI Tour Guide</p>
          </div>
        </div>
        
        {showBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </button>
        )}
      </div>
    </header>
  );
}

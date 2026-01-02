
import React, { useEffect, useRef } from 'react';
import { BookOpen, MapPin, ExternalLink, Bot, RotateCcw } from 'lucide-react';
import { LocationData } from '../types';

interface ViewerScreenProps {
  data: LocationData;
  onReset: () => void;
}

const ViewerScreen: React.FC<ViewerScreenProps> = ({ data, onReset }) => {
  const streetViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadStreetView = () => {
      // Use type casting on window to safely access the global google object
      if (typeof (window as any).google === 'undefined') return;
      
      if (streetViewRef.current) {
        // Use type casting on window to access google.maps namespace
        const panorama = new (window as any).google.maps.StreetViewPanorama(streetViewRef.current, {
          position: { lat: data.lat, lng: data.lng },
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
          addressControl: false,
          fullscreenControl: true,
          motionTracking: true,
          motionTrackingControl: true
        });
      }
    };

    // Use type casting on window to safely check for the google object
    if ((window as any).google) {
      loadStreetView();
    } else {
      const checkInterval = setInterval(() => {
        // Use type casting on window to safely check for the google object
        if ((window as any).google) {
          loadStreetView();
          clearInterval(checkInterval);
        }
      }, 500);
      return () => clearInterval(checkInterval);
    }
  }, [data]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Street View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div 
              ref={streetViewRef} 
              className="w-full aspect-video bg-gray-200"
              style={{ minHeight: '400px' }}
            >
              {/* Google Street View will mount here */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Loading Street View...
              </div>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold">{data.name}</span>
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {data.lat.toFixed(4)}, {data.lng.toFixed(4)}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI & History */}
        <div className="space-y-6">
          {/* AI Tour Guide Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Bot className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Bot className="w-3 h-3" />
                AI Tour Guide
              </div>
              <p className="text-lg font-medium leading-relaxed italic">
                "{data.narration}"
              </p>
            </div>
          </div>

          {/* Historical Context Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 space-y-4">
            <div className="flex items-center gap-2 text-green-700 font-bold">
              <BookOpen className="w-5 h-5" />
              Historical Context
            </div>
            <div className="space-y-3">
              {data.historicalContext.thumbnail && (
                <img 
                  src={data.historicalContext.thumbnail.source} 
                  alt={data.name} 
                  className="w-full h-32 object-cover rounded-xl"
                />
              )}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
                {data.historicalContext.extract}
              </p>
              <a 
                href={data.historicalContext.content_urls.desktop.page}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:underline"
              >
                Read more on Wikipedia
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
          >
            <RotateCcw className="w-5 h-5" />
            Explore Another Place
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewerScreen;

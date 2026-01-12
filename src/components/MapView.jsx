import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icons in production
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Category color mapping
const categoryColors = {
  'Ancient Wonder': '#F59E0B',
  'Modern Icon': '#3B82F6',
  'Sacred Architecture': '#8B5CF6',
  'Archaeological Site': '#D97706',
  'Engineering Marvel': '#10B981',
  'Medieval Castle': '#DC2626',
  'Palace': '#EC4899',
  'Natural Wonder': '#059669',
  'Medieval Wonder': '#DC2626'
};

// Component to fix map rendering
const MapResizer = () => {
  const map = useMap();
  
  useEffect(() => {
    // Invalidate size after a short delay to ensure proper rendering
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [map]);
  
  return null;
};

const MapView = ({ landmarks, onLandmarkSelect, selectedCategory }) => {
  // Filter landmarks by category
  const filteredLandmarks = selectedCategory === 'All' 
    ? landmarks 
    : landmarks.filter(l => l.category === selectedCategory);

  return (
    <div className="h-[600px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
      <MapContainer
        key="landmark-map" // Key forces proper rendering
        center={[20, 0]}
        zoom={2}
        className="h-full w-full"
        minZoom={2}
        maxZoom={18}
        worldCopyJump={true}
        style={{ height: '100%', width: '100%' }}
      >
        <MapResizer />
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          maxZoom={20}
        />
        
        {filteredLandmarks.map((landmark) => (
          <Marker
            key={landmark.id}
            position={[landmark.coordinates.lat, landmark.coordinates.lng]}
          >
            <Popup className="custom-popup" maxWidth={300}>
              <div className="p-2">
                <img 
                  src={landmark.imageUrl} 
                  alt={landmark.name}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <h3 className="font-bold text-lg mb-1">{landmark.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  📍 {landmark.city}, {landmark.country}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  <span 
                    className="inline-block px-2 py-1 rounded-full text-white text-xs font-medium"
                    style={{ backgroundColor: categoryColors[landmark.category] || '#6B7280' }}
                  >
                    {landmark.category}
                  </span>
                </p>
                <button
                  onClick={() => onLandmarkSelect(landmark)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Explore →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;

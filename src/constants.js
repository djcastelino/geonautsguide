// Destination Categories
export const DESTINATION_CATEGORIES = {
  SACRED: 'Sacred Paths',
  ARCHITECTURE: 'Architecture',
  LANDMARKS: 'Geographic Landmarks'
};

// Tours Feature
export const GUIDED_TOURS = [
  {
    id: 'stations-of-the-cross',
    name: 'Stations of the Cross',
    icon: '✝️',
    description: 'Walk the path Jesus took to his crucifixion through 14 sacred stations',
    duration: '14 stops',
    category: 'Sacred',
    stops: [
      { name: 'Station I', query: 'Via Dolorosa', description: 'Jesus is condemned to death by Pontius Pilate', landmark: 'Al-Omariya School courtyard, near Antonia Fortress ruins', coords: { lat: 31.78037, lng: 35.23545 } },
      { name: 'Station II', query: 'Via Dolorosa', description: 'Jesus receives the cross and takes it upon his shoulders', landmark: 'Church of the Condemnation and Church of the Flagellation', coords: { lat: 31.78058, lng: 35.23559 } },
      { name: 'Station III', query: 'Via Dolorosa', description: 'Jesus falls for the first time under the weight of the cross', landmark: 'Polish Catholic Chapel', coords: { lat: 31.78023, lng: 35.23497 } },
      { name: 'Station IV', query: 'Via Dolorosa', description: 'Jesus meets his mother Mary along the way', landmark: 'Armenian Catholic Church (Our Lady of the Spasm)', coords: { lat: 31.78007, lng: 35.23447 } },
      { name: 'Station V', query: 'Via Dolorosa', description: 'Simon of Cyrene is compelled to help Jesus carry the cross', landmark: 'Franciscan Chapel', coords: { lat: 31.77985, lng: 35.23399 } },
      { name: 'Station VI', query: 'Via Dolorosa', description: 'Veronica wipes the face of Jesus with her veil', landmark: 'Church of the Holy Face (Little Sisters of Jesus)', coords: { lat: 31.77952, lng: 35.23353 } },
      { name: 'Station VII', query: 'Via Dolorosa', description: 'Jesus falls for the second time', landmark: 'Chapel at junction of Via Dolorosa and Souk Khan ez-Zeit', coords: { lat: 31.77819, lng: 35.23092 } },
      { name: 'Station VIII', query: 'Via Dolorosa', description: 'Jesus meets and consoles the women of Jerusalem', landmark: 'Greek Orthodox Monastery with Latin cross on wall', coords: { lat: 31.77793, lng: 35.23050 } },
      { name: 'Station IX', query: 'Via Dolorosa', description: 'Jesus falls for the third and final time', landmark: 'Entrance to Coptic Patriarchate on roof of Church of the Holy Sepulchre', coords: { lat: 31.77842, lng: 35.22970 } },
      { name: 'Station X', query: 'Church of the Holy Sepulchre', description: 'Jesus is stripped of his garments at Calvary', landmark: 'Chapel inside Church of the Holy Sepulchre', coords: { lat: 31.7784, lng: 35.2294 } },
      { name: 'Station XI', query: 'Church of the Holy Sepulchre', description: 'Jesus is nailed to the cross', landmark: 'Latin altar on Calvary, Church of the Holy Sepulchre', coords: { lat: 31.7784, lng: 35.2294 } },
      { name: 'Station XII', query: 'Church of the Holy Sepulchre', description: 'Jesus dies on the cross', landmark: 'Greek Orthodox altar on Calvary, Church of the Holy Sepulchre', coords: { lat: 31.7784, lng: 35.2294 } },
      { name: 'Station XIII', query: 'Church of the Holy Sepulchre', description: 'Jesus is taken down from the cross', landmark: 'Stone of Anointing, Church of the Holy Sepulchre', coords: { lat: 31.7785, lng: 35.2293 } },
      { name: 'Station XIV', query: 'Church of the Holy Sepulchre', description: 'Jesus is laid in the tomb', landmark: 'The Holy Sepulchre (Aedicule), Church of the Holy Sepulchre', coords: { lat: 31.7786, lng: 35.2292 } }
    ]
  }
];

export const POPULAR_DESTINATIONS = [
  // Sacred Paths
  { name: 'Western Wall', icon: '🕍', query: 'Western Wall, Jerusalem', category: 'SACRED' },
  { name: 'Dome of the Rock', icon: '🕌', query: 'Dome of the Rock, Jerusalem', category: 'SACRED' },
  
  // Architecture
  { name: 'Colosseum', icon: '🏛️', query: 'Colosseum, Rome, Italy', category: 'ARCHITECTURE' },
  { name: 'Taj Mahal', icon: '🕌', query: 'Taj Mahal, Agra, India', category: 'ARCHITECTURE' },
  { name: 'Eiffel Tower', icon: '🗼', query: 'Eiffel Tower, Paris, France', category: 'ARCHITECTURE' },
  { name: 'Big Ben', icon: '🕰️', query: 'Big Ben, London, United Kingdom', category: 'ARCHITECTURE' },
  
  // Geographic Landmarks
  { name: 'Giza Pyramids', icon: '🔺', query: 'Pyramids of Giza, Egypt', category: 'LANDMARKS' },
  { name: 'Machu Picchu', icon: '⛰️', query: 'Machu Picchu, Peru', category: 'LANDMARKS' },
  { name: 'Grand Canyon', icon: '🏜️', query: 'Grand Canyon South Rim, Arizona, USA', category: 'LANDMARKS' },
  { name: 'Great Wall', icon: '🧱', query: 'Great Wall of China, Badaling, China', category: 'LANDMARKS' }
];

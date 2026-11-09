import { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import land from '../data/connection-land.json';
import './ThreePins.css';

const bounds = { west: -13, east: 20, south: 32, north: 56 };
const width = 660;
const height = 480;
const target = [39.47, -0.38];
const tolerance = 75;
const radius = 6371;
const radians = degrees => degrees * Math.PI / 180;
const degrees = angle => angle * 180 / Math.PI;
const project = ([lat, lon]) => [(lon - bounds.west) * 20, (bounds.north - lat) * 20];

const coastline = land.features.flatMap(({ geometry }) =>
  geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates],
).flatMap(polygon => polygon.map(ring =>
  ring.map(([lon, lat], i) => `${i ? 'L' : 'M'}${project([lat, lon]).join(',')}`).join(' ') + ' Z',
)).join(' ');

function distance([lat, lon], [otherLat, otherLon]) {
  const a = Math.sin(radians(otherLat - lat) / 2) ** 2
    + Math.cos(radians(lat)) * Math.cos(radians(otherLat)) * Math.sin(radians(otherLon - lon) / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(Math.min(1, a)));
}

function ring([lat, lon], km) {
  const phi = radians(lat);
  const angular = km / radius;
  return Array.from({ length: 181 }, (_, i) => {
    const bearing = radians(i * 2);
    const nextLat = Math.asin(Math.sin(phi) * Math.cos(angular) + Math.cos(phi) * Math.sin(angular) * Math.cos(bearing));
    const nextLon = radians(lon) + Math.atan2(Math.sin(bearing) * Math.sin(angular) * Math.cos(phi),
      Math.cos(angular) - Math.sin(phi) * Math.sin(nextLat));
    return project([degrees(nextLat), degrees(nextLon)]).join(',');
  }).join(' ');
}

const labels = [
  ['Dublin', 53.35, -6.26], ['London', 51.51, -.13], ['Paris', 48.86, 2.35],
  ['Madrid', 40.42, -3.70], ['Lisbon', 38.72, -9.14], ['Rome', 41.90, 12.50],
  ['Algiers', 36.75, 3.06], ['Geneva', 46.20, 6.14],
];

export default function ThreePins({ onBack }) {
  const [pins, setPins] = useState([]);
  const [candidate, setCandidate] = useState(null);
  const won = pins.some(pin => pin.km <= tolerance);
  const done = won || pins.length === 3;

  function choose(event) {
    if (done) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const lat = bounds.north - (event.clientY - rect.top) / rect.height * (bounds.north - bounds.south);
    const lon = bounds.west + (event.clientX - rect.left) / rect.width * (bounds.east - bounds.west);
    setCandidate([lat, lon]);
  }

  function move(event) {
    if (done) return;
    const offset = { ArrowUp: [.2, 0], ArrowDown: [-.2, 0], ArrowLeft: [0, -.2], ArrowRight: [0, .2] }[event.key];
    if (!offset) return;
    event.preventDefault();
    const [lat, lon] = candidate || [44, 3];
    setCandidate([
      Math.max(bounds.south, Math.min(bounds.north, lat + offset[0])),
      Math.max(bounds.west, Math.min(bounds.east, lon + offset[1])),
    ]);
  }

  function confirm() {
    if (!candidate || done) return;
    setPins([...pins, { point: candidate, km: distance(candidate, target) }]);
    setCandidate(null);
  }

  return <section className="tp-page">
    <button className="tp-back" onClick={onBack}><ArrowLeft size={16}/> Daily City Guess</button>
    <p className="tp-kicker">MAP CHALLENGE · PREVIEW</p>
    <h1>Three Pins</h1>
    <p>Find the mystery city in three guesses. Land within {tolerance} km to solve it.</p>
    <div className="tp-layout">
      <figure>
        <svg viewBox={`0 0 ${width} ${height}`} role="group" aria-label="Guessing map. Use the arrow keys to move your pin, then confirm below."
          tabIndex={done ? -1 : 0} onClick={choose} onKeyDown={move}>
          <path d={coastline} fill="#577766" stroke="#acc1a5" strokeWidth="1" fillRule="evenodd"/>
          {labels.map(([name, lat, lon]) => {
            const [x, y] = project([lat, lon]);
            return <g key={name}><circle cx={x} cy={y} r="2"/><text x={x + 5} y={y - 5}>{name}</text></g>;
          })}
          {pins.map(({ point, km }, i) => {
            const [x, y] = project(point);
            return <g key={i}>
              {km > tolerance && <polyline points={ring(point, km)} fill="none" stroke={i === 0 ? '#ffe49a' : '#8de7f6'} strokeWidth="2" vectorEffect="non-scaling-stroke"/>}
              <circle cx={x} cy={y} r="9" fill="#172f2a" stroke="#fff"/>
              <text x={x} y={y + 4} textAnchor="middle">{i + 1}</text>
            </g>;
          })}
          {candidate && <circle cx={project(candidate)[0]} cy={project(candidate)[1]} r="7" fill="#fff" stroke="#172f2a" strokeWidth="2"/>}
          {done && <g>
            <polyline points={ring(target, tolerance)} fill="#cce77c55" stroke="#dcf48d" strokeWidth="2" />
            <circle cx={project(target)[0]} cy={project(target)[1]} r="4" fill="#dcf48d"/>
            <text x={project(target)[0] + 8} y={project(target)[1] - 8}>Valencia</text>
          </g>}
        </svg>
        <figcaption>Coastlines from <a href="https://www.naturalearthdata.com/about/terms-of-use/">Natural Earth</a> · Distances measured as the crow flies</figcaption>
      </figure>
      <section className="tp-panel">
        <p className="tp-kicker">THE CLUE</p>
        <h2>A park where a river once ran</h2>
        <p>After a flood, this Mediterranean city diverted its river. The old channel became a long park through the city.</p>
        <div aria-live="polite">
          <p><strong>{pins.length} / 3 pins used</strong></p>
          <ol>{pins.map(({ km }, i) => <li key={i}>Pin {i + 1} · {Math.round(km)} km away</li>)}</ol>
          {done && <p><strong>{won ? 'You found it!' : 'The city was Valencia, Spain.'}</strong> {won && 'The mystery city is Valencia, Spain.'} The green ring shows the {tolerance} km target area.</p>}
          {!done && pins.length > 0 && <p>{pins.length === 1 ? 'The city lies somewhere along the gold ring.' : 'Look where the rings meet. Which spot fits the clue?'}</p>}
        </div>
        {done ? <>
          <p><a href="https://blog.visitvalencia.com/en/erasmus-in-valencia">Explore the Turia Garden</a></p>
          <button onClick={() => { setPins([]); setCandidate(null); }}>Reset the map</button>
        </> : <>
          <p>{candidate ? `Selected: ${candidate[0].toFixed(2)}°, ${candidate[1].toFixed(2)}°` : 'Tap the map to choose your next pin.'}</p>
          <button disabled={!candidate} onClick={confirm}><MapPin size={16}/> Place pin {pins.length + 1}</button>
        </>}
      </section>
    </div>
  </section>;
}

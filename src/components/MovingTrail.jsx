import { useState } from 'react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import './MovingTrail.css';

const legs = [
  {
    from: 'Istanbul', clue: 'The courier’s ticket was booked for an inland destination.',
    witness: '“They said they were headed to the capital of Türkiye.”',
    stops: [['Bursa', 'Coach', 170, 165], ['Ankara', 'Train', 425, 130], ['İzmir', 'Coach', 105, 235]],
    origin: [125, 80], correct: 'Ankara',
    reason: 'Ankara is Türkiye’s capital, and the case manifest shows a train from Istanbul.',
  },
  {
    from: 'Ankara', clue: '“The courier took a ferry to Konya.”',
    witness: '“I saw a train ticket to Konya in their coat pocket.”',
    stops: [['Eskişehir', 'Train', 150, 120], ['Kayseri', 'Coach', 450, 160], ['Konya', 'Train', 285, 235]],
    origin: [285, 75], correct: 'Konya',
    reason: 'The ferry account conflicts with the manifest. The recorded connection to Konya is by train.',
  },
  {
    from: 'Konya', clue: 'The transfer slip names a railway stop northwest of Konya.',
    witness: '“The handoff is in a city on the Porsuk River.”',
    stops: [['Ankara', 'Train', 430, 65], ['Eskişehir', 'Train', 180, 90, 'Porsuk River'], ['Karaman', 'Train', 390, 240]],
    origin: [300, 175], correct: 'Eskişehir',
    reason: 'Eskişehir is northwest of Konya, and the Porsuk runs through it.',
  },
];

export default function MovingTrail({ onBack }) {
  const [index, setIndex] = useState(0);
  const [evidence, setEvidence] = useState('');
  const [message, setMessage] = useState('');
  const [solved, setSolved] = useState(false);
  const [complete, setComplete] = useState(false);
  const leg = legs[index];

  function travel(city) {
    const correct = city === leg.correct;
    setSolved(correct);
    setMessage(correct ? leg.reason : `The courier wasn’t in ${city}. Check both clues against the map and try again.`);
  }

  function advance() {
    if (index === legs.length - 1) {
      setComplete(true);
      return;
    }
    setIndex(index + 1);
    setEvidence('');
    setMessage('');
    setSolved(false);
  }

  function reset() {
    setIndex(0);
    setEvidence('');
    setMessage('');
    setSolved(false);
    setComplete(false);
  }

  return <div className="tt-page mt-page">
    <header className="tt-header">
      <button className="tt-brand" onClick={onBack}><Compass size={28}/><span>GEONAUTS<small>GUIDE</small></span></button>
      <button className="tt-home" onClick={onBack}><ArrowLeft size={16}/> Daily City Guess</button>
    </header>
    <main>
      <section className="mt-intro">
        <p className="tt-eyebrow">THE MOVING TRAIL · CASE 01</p>
        <h1>The Missing <em>Map</em></h1>
        <p>A rare map has vanished from an exhibition in Istanbul. Follow the courier and recover it before the handoff.</p>
      </section>
      {complete ? <section className="mt-panel mt-complete" aria-live="polite">
        <p className="tt-eyebrow">CASE CLOSED</p>
        <h2>Map recovered in Eskişehir.</h2>
        <p>You traced the courier from Istanbul through Ankara and Konya, and caught a ferry story that didn’t fit the evidence.</p>
        <button onClick={reset}>Reopen the case</button>
      </section> : <div className="mt-layout">
        <figure className="mt-map">
          <figcaption>CASE ROUTE MAP · FROM {leg.from.toUpperCase()}</figcaption>
          <svg viewBox="0 0 560 290" role="img" aria-label={`Routes from ${leg.from}: ${leg.stops.map(([city, mode, , , detail]) => `${city} by ${mode}${detail ? `, ${detail}` : ''}`).join('; ')}`}>
            <defs><pattern id="mt-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#77988a" opacity=".25"/></pattern></defs>
            <rect width="560" height="290" fill="url(#mt-grid)"/>
            <text x="520" y="32" textAnchor="middle">↑ N</text>
            {leg.stops.map(([city, mode, x, y, detail]) => <g key={city}>
              <line x1={leg.origin[0]} y1={leg.origin[1]} x2={x} y2={y} stroke={solved && city === leg.correct ? '#e8ef99' : '#91b4a2'} strokeWidth="2" strokeDasharray={mode === 'Coach' ? '5 5' : undefined}/>
              <circle cx={x} cy={y} r="6" fill="#e8ef99"/>
              <text x={x} y={y + 25} textAnchor="middle">{city} · {mode}</text>
              {detail && <text x={x} y={y + 45} textAnchor="middle">{detail}</text>}
            </g>)}
            <circle cx={leg.origin[0]} cy={leg.origin[1]} r="8" fill="#fff"/>
            <text x={leg.origin[0]} y={leg.origin[1] - 17} textAnchor="middle">{leg.from}</text>
          </svg>
          <p>Fictional case manifest with selected routes shown schematically.</p>
        </figure>
        <section className="mt-panel" aria-label="Case evidence">
          <p className="tt-eyebrow">LEG {index + 1} / {legs.length} · {leg.from}</p>
          <h2>{index === 1 ? 'Two witnesses disagree.' : 'Where did the courier go?'}</h2>
          <ol><li>{leg.clue}</li><li>{leg.witness}</li></ol>
          {index === 1 && evidence !== 'ferry' && <div className="mt-actions">
            <p>Which account conflicts with the map?</p>
            <button onClick={() => setEvidence('ferry')}>The ferry account</button>
            <button onClick={() => setEvidence('train')}>The train account</button>
          </div>}
          <div aria-live="polite">
            {index === 1 && evidence === 'train' && <p>Check the route labels. Does the map show a train to Konya?</p>}
            {index === 1 && evidence === 'ferry' && <p><strong>Bad lead caught.</strong> There’s no ferry to Konya in the case manifest.</p>}
            {message && <p>{message}</p>}
          </div>
          {solved ? <button onClick={advance}>{index === legs.length - 1 ? 'Recover the map' : 'Follow the trail'} <ArrowRight size={16}/></button>
            : (index !== 1 || evidence === 'ferry') && <div className="mt-actions">{leg.stops.map(([city]) => <button key={city} onClick={() => travel(city)}>Travel to {city}</button>)}</div>}
        </section>
      </div>}
    </main>
  </div>;
}

import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import './MovingTrail.css';

const lockers = [
  ['Swallow', 'A fork-tailed bird in flight'],
  ['Heron', 'A long-legged bird waiting in shallow water'],
  ['Owl', 'A round-eyed bird on a branch'],
];

const legs = [
  {
    from: 'Istanbul', clue: 'The booking record shows a rail ticket. On the back, someone wrote: “If I’m delayed, leave it with the bird that fishes.”',
    witness: '“Their destination was east of Istanbul.”',
    stops: [['Kayseri', 'Coach', 465, 205], ['Ankara', 'Train', 360, 125], ['Edirne', 'Train', 80, 105]],
    origin: [225, 80], correct: 'Ankara',
    reason: 'Both Ankara and Kayseri are east of Istanbul. Ankara is the one reached by rail in the case manifest.',
  },
  {
    from: 'Ankara', clue: '“I watched the courier board from the east concourse at 20:20.”',
    witness: '“The train was bound almost due south. I saw the courier from the main hall.”',
    stops: [['Eskişehir', 'Train', 150, 120], ['Kayseri', 'Coach', 450, 160], ['Konya', 'Train', 285, 235]],
    origin: [285, 75], correct: 'Konya',
    reason: 'Two rail routes leave Ankara in the case manifest. Eskişehir lies mostly west, while Konya is almost due south.',
  },
  {
    from: 'Konya', clue: 'The transfer slip points northwest of Konya.',
    witness: '“The handoff is in a city on the Porsuk River.”',
    stops: [['Afyonkarahisar', 'Train', 108, 135], ['Eskişehir', 'Train', 195, 65, 'Porsuk River'], ['Karaman', 'Train', 390, 240]],
    origin: [300, 175], correct: 'Eskişehir',
    reason: 'Eskişehir is northwest of Konya, and the Porsuk runs through it.',
  },
];

export default function MovingTrail({ onBack }) {
  const [opened, setOpened] = useState(false);
  const caseHeading = useRef(null);
  const [index, setIndex] = useState(0);
  const [evidence, setEvidence] = useState('');
  const [message, setMessage] = useState('');
  const [solved, setSolved] = useState(false);
  const [proof, setProof] = useState('');
  const [proofMessage, setProofMessage] = useState('');
  const [locker, setLocker] = useState(false);
  const [complete, setComplete] = useState(false);
  const leg = legs[index];

  function travel(city) {
    const correct = city === leg.correct;
    setSolved(correct);
    setMessage(correct ? leg.reason : `The courier wasn’t in ${city}. Compare the direction and route details on the map, then try again.`);
  }

  function advance() {
    if (index === legs.length - 1) {
      setLocker(true);
      setMessage('');
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
    setLocker(false);
    setProof('');
    setProofMessage('');
  }

  return <div className="tt-page mt-page">
    <header className="tt-header">
      <button className="tt-brand" onClick={onBack}><Compass size={28}/><span>GEONAUTS<small>GUIDE</small></span></button>
      <button className="tt-home" onClick={onBack}><ArrowLeft size={16}/> Daily City Guess</button>
    </header>
    <main>
      <section className={`mt-intro ${opened ? 'mt-arrived' : ''}`}>
        <div className="mt-city-scene" aria-hidden="true">
          <div className="mt-city-photo"/>
          <div className="mt-city-haze"/>
          <svg className="mt-ferry" viewBox="0 0 480 140">
            <path className="mt-wake" d="M0 119 Q107 105 230 119 T480 120 M0 131 Q112 118 223 133 T480 132"/>
            <path fill="#132a2c" d="M75 91 H405 L369 113 H114 Z"/>
            <path fill="#d4c8a7" d="M113 90 V71 H142 V52 H319 L348 70 H373 V90 Z"/>
            <path fill="#f6d793" d="M154 63 H181 V75 H154 Z M190 63 H217 V75 H190 Z M226 63 H253 V75 H226 Z M262 63 H289 V75 H262 Z M298 63 H319 V75 H298 Z"/>
            <path fill="#233938" d="M220 52 L225 23 H230 L234 52 Z M135 48 H321 V52 H135 Z"/>
          </svg>
          <div className="mt-city-shade"/>
        </div>
        <div className="mt-opening-copy">
        <p className="tt-eyebrow">THE MOVING TRAIL · CASE 01</p>
        <h1>The Missing <em>Map</em></h1>
        <p>A rare map has vanished from an exhibition in Istanbul. Follow the courier and recover it before the handoff.</p>
        {!opened && <button className="mt-open" onClick={() => {
          setOpened(true);
          requestAnimationFrame(() => caseHeading.current?.focus({ preventScroll: true }));
        }}>Open the case <ArrowRight size={18}/></button>}
        </div>
      </section>
      {opened && <div className="mt-dossier">
      <h2 className="mt-dossier-heading" tabIndex={-1} ref={caseHeading}>Case file <span>01 · Istanbul</span></h2>
      {complete ? <section className="mt-panel mt-complete" aria-live="polite">
        <p className="tt-eyebrow">CASE CLOSED</p>
        <h2>Map recovered in Eskişehir.</h2>
        <div className="mt-recovered" aria-label="Recovered map">Istanbul → Ankara → Konya → Eskişehir</div>
        <p>You traced the courier from Istanbul through Ankara and Konya, and proved a witness’s timeline couldn’t be right.</p>
        <button onClick={reset}>Reopen the case</button>
      </section> : locker ? <section className="mt-panel mt-complete">
        <p className="tt-eyebrow">ESKİŞEHİR · LEFT LUGGAGE</p>
        <h2>Three lockers. One handoff.</h2>
        <p>Each locker has a different emblem. The courier left instructions somewhere in the evidence.</p>
        <div className="mt-lockers">{lockers.map(([name, detail], i) => <button key={name} onClick={() => {
          if (name === 'Heron') setComplete(true);
          else setMessage(`The ${name.toLowerCase()} locker is empty. Look back at the courier’s note.`);
        }}><svg viewBox="0 0 120 110" aria-hidden="true"><rect x="18" y="8" width="84" height="94" rx="5"/><path d={['M32 51 Q50 27 60 48 Q71 27 88 49 L67 57 L61 69 L55 57 Z','M53 72 L53 55 Q46 50 57 45 Q69 39 62 31 L83 30 L67 36 Q75 48 62 53 L62 72 M35 78 H88','M39 38 L48 44 Q60 36 72 44 L81 38 V62 Q60 82 39 62 Z M46 53 H54 M66 53 H74'][i]}/><circle cx="91" cy="76" r="3"/></svg><strong>{name}</strong><small>{detail}</small></button>)}</div>
        <p role="status">{message}</p>
      </section> : <div className="mt-layout">
        <figure className="mt-map">
          <figcaption>CASE ROUTE MAP · FROM {leg.from.toUpperCase()}</figcaption>
          <svg viewBox="0 0 560 290" role="img" aria-label={`Routes from ${leg.from}: ${leg.stops.map(([city, mode, , , detail]) => `${city} by ${mode}${detail ? `, ${detail}` : ''}`).join('; ')}`}>
            <defs><pattern id="mt-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#77988a" opacity=".25"/></pattern></defs>
            <rect width="560" height="290" fill="url(#mt-grid)"/>
            <text x="520" y="32" textAnchor="middle">↑ N</text>
            {leg.stops.map(([city, mode, x, y, detail]) => <g key={city}>
              <line className={solved && city === leg.correct ? 'mt-travel' : undefined} pathLength="100" x1={leg.origin[0]} y1={leg.origin[1]} x2={x} y2={y} stroke={solved && city === leg.correct ? '#e8ef99' : '#91b4a2'} strokeWidth="2" strokeDasharray={mode === 'Coach' ? '5 5' : undefined}/>
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
          {index === 1 && evidence !== 'proven' && <div className="mt-proof">
            <p><strong>Station notice</strong> · East concourse closed from 20:00 to 22:00. Main hall open.</p>
            <label>Challenge an account<select value={evidence} onChange={event => setEvidence(event.target.value)}><option value="">Choose a witness</option><option value="east">East concourse sighting</option><option value="south">Southbound train sighting</option></select></label>
            <label>Choose your evidence<select value={proof} onChange={event => setProof(event.target.value)}><option value="">Choose a document</option><option value="notice">Station closure notice</option><option value="routes">Route manifest</option></select></label>
            <button disabled={!evidence || !proof} onClick={() => {
              if (evidence === 'east' && proof === 'notice') { setEvidence('proven'); setProofMessage(''); }
              else setProofMessage('That pairing doesn’t prove a contradiction. Compare the time and place in each account.');
            }}>Check the evidence</button>
          </div>}
          <div aria-live="polite">
            {proofMessage && <p>{proofMessage}</p>}
            {index === 1 && evidence === 'proven' && <p><strong>Bad lead caught.</strong> The east concourse was closed at 20:20. Follow the other account.</p>}
            {message && <p>{message}</p>}
          </div>
          {solved ? <button onClick={advance}>{index === legs.length - 1 ? 'Inspect the lockers' : 'Follow the trail'} <ArrowRight size={16}/></button>
            : (index !== 1 || evidence === 'proven') && <div className="mt-actions">{leg.stops.map(([city]) => <button key={city} onClick={() => travel(city)}>Travel to {city}</button>)}</div>}
        </section>
      </div>}
      <details className="mt-evidence">
        <summary>Evidence file · {Math.min(index + 1, legs.length) * 2} clues</summary>
        <div>{legs.slice(0, index + 1).map(item => <article key={item.from}><p className="tt-eyebrow">{item.from}</p><p>{item.clue}</p><p>{item.witness}</p></article>)}</div>
      </details>
      </div>}
      <p className="mt-credit">Istanbul photograph by <a href="https://commons.wikimedia.org/wiki/File:Galata_Bridge_from_Galata_Tower.JPG">Rrburke</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a> · Cropped and shaded for display. Ferry foreground is an illustration.</p>
    </main>
  </div>;
}

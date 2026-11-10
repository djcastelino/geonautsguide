import { useEffect, useRef, useState } from 'react';
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
  const [sound, setSound] = useState(() => {
    try { return window.localStorage.getItem('moving-trail-sound') !== 'muted'; }
    catch { return true; }
  });
  const [soundError, setSoundError] = useState('');
  const horn = useRef(null);

  function playSound(player) {
    setSoundError('');
    if (!player) return;
    player.currentTime = 0;
    void player.play().catch(() => setSoundError('Sound could not play.'));
  }
  const [departing, setDeparting] = useState(false);
  const [hint, setHint] = useState(false);
  const chime = useRef(null);
  const victory = useRef(null);
  const station = useRef(null);
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

  useEffect(() => {
    if (!opened) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => caseHeading.current?.focus(), reduced ? 0 : 1050);
    return () => window.clearTimeout(timer);
  }, [opened]);

  useEffect(() => {
    if (!departing) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => {
      setDeparting(false);
      setSolved(false);
      setMessage('');
      setIndex(1);
      requestAnimationFrame(() => station.current?.focus());
    }, reduced ? 0 : 1600);
    return () => window.clearTimeout(timer);
  }, [departing]);

  function travel(city) {
    const correct = city === leg.correct;
    setSolved(correct);
    setMessage(correct ? leg.reason : `The courier wasn’t in ${city}. Compare the direction and route details on the map, then try again.`);
  }

  function advance() {
    if (index === 0) {
      if (sound) playSound(chime.current);
      setDeparting(true);
      return;
    }
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
    setHint(false);
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
          <div className="mt-city-shade"/>
        </div>
        <div className="mt-opening-copy">
        <p className="tt-eyebrow">THE MOVING TRAIL · CASE 01</p>
        <h1>The Missing <em>Map</em></h1>
        <p>A rare map has vanished from an exhibition in Istanbul. Follow the courier and recover it before the handoff.</p>
        {!opened && <button className="mt-open" onClick={() => {
          if (sound) playSound(horn.current);
          setOpened(true);
        }}>Open the case <ArrowRight size={18}/></button>}
        <button className="mt-sound" aria-pressed={!sound} onClick={() => {
          setSound(!sound);
          try { window.localStorage.setItem('moving-trail-sound', sound ? 'muted' : 'enabled'); }
          catch { /* The sound choice still applies to this visit. */ }
          if (sound) [horn, chime, victory].forEach(clip => clip.current?.pause());
        }}>{sound ? 'Mute' : 'Unmute'}</button>
        <audio ref={horn} hidden preload="auto" src="/audio/moving-trail-horn.wav" aria-label="Play ferry horn"/>
        {soundError && <p role="status">{soundError}</p>}
        <p className="mt-scene-label">Istanbul · AI-generated scene</p>
        </div>
      </section>
      {opened && <div className="mt-dossier">
      <audio ref={victory} hidden preload="auto" src="/audio/moving-trail-victory.wav"/>
      <audio ref={chime} hidden preload="auto" src="/audio/moving-trail-departure.wav"/>
      <h2 className="mt-dossier-heading" tabIndex={-1} ref={caseHeading}>Case file <span>01 · Istanbul</span></h2>
      {index === 0 && <aside className="mt-brief"><span>FROM THE EXHIBITION CURATOR</span><p><strong>Agent Meridian,</strong> a rare map has vanished from our exhibition. We found a rail ticket and a witness account at the waterfront. Put them together and find the courier.</p></aside>}
      {index === 1 && <section className="mt-station" ref={station} tabIndex={-1}><span>ARRIVAL BOARD · ANKARA</span><h2>Ankara Station</h2><p>Two witnesses are waiting. A station closure notice may help you decide whose account holds up.</p></section>}
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
          if (name === 'Heron') {
            if (sound) playSound(victory.current);
            setComplete(true);
          }
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
            {departing && <g className="mt-train" aria-hidden="true">
              <animateMotion dur="1.5s" fill="freeze" path="M225 80 L360 125"/>
              <rect x="-13" y="-9" width="26" height="17" rx="5" fill="#f9db87"/>
              <path d="M-7 -4H7V0H-7Z M-7 9L-10 12 M7 9L10 12" fill="#213a31" stroke="#213a31" strokeWidth="2"/>
            </g>}
            <circle cx={leg.origin[0]} cy={leg.origin[1]} r="8" fill="#fff"/>
            <text x={leg.origin[0]} y={leg.origin[1] - 17} textAnchor="middle">{leg.from}</text>
          </svg>
          <p>Fictional case manifest with selected routes shown schematically.</p>
        </figure>
        <section className="mt-panel" aria-label="Case evidence">
          <p className="tt-eyebrow">LEG {index + 1} / {legs.length} · {leg.from}</p>
          <h2>{index === 1 ? 'Two witnesses disagree.' : 'Where did the courier go?'}</h2>
          {index === 0 ? <div className="mt-documents">
            <details><summary>Rail ticket</summary><p>{leg.clue}</p></details>
            <details><summary>Witness note</summary><p>{leg.witness}</p></details>
            <button onClick={() => setHint(!hint)} aria-expanded={hint}>{hint ? 'Hide hint' : 'Show hint'}</button>
            {hint && <p>Find the routes east of Istanbul, then check which of those use rail.</p>}
          </div> : <ol><li>{leg.clue}</li><li>{leg.witness}</li></ol>}
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
          {solved ? <button onClick={advance} disabled={departing}>{departing ? 'Train en route…' : index === 0 ? 'Board the train' : index === legs.length - 1 ? 'Inspect the lockers' : 'Follow the trail'} <ArrowRight size={16}/></button>
            : (index !== 1 || evidence === 'proven') && <div className="mt-actions">{leg.stops.map(([city]) => <button key={city} onClick={() => travel(city)}>Travel to {city}</button>)}</div>}
        </section>
      </div>}
      <details className="mt-evidence">
        <summary>Evidence file · {Math.min(index + 1, legs.length) * 2} clues</summary>
        <div>{legs.slice(0, index + 1).map(item => <article key={item.from}><p className="tt-eyebrow">{item.from}</p><p>{item.clue}</p><p>{item.witness}</p></article>)}</div>
      </details>
      </div>}
      <p className="mt-credit">Opening artwork is an AI-generated illustration of the fictional case.</p>
    </main>
  </div>;
}

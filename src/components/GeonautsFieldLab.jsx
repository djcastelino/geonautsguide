import React, { useState, useMemo } from 'react';
import { Compass, Globe2, Sparkles, ArrowUpRight, CheckCircle2, XCircle, Layers, Orbit } from 'lucide-react';
import './GeonautsFieldLab.css';

const LATITUDE_TWINS = [
  {
    id: 'venice-montreal',
    anchorCity: 'Venice, Italy',
    anchorLat: '45.44° N',
    anchorFact: 'Adriatic lagoon canals, Mediterranean cypress trees, and humid subtropical summers.',
    question: 'Which North American city sits at the exact same 45.5° N distance from the Equator as Venice?',
    options: [
      { id: 'nc', label: 'Wilmington, North Carolina', lat: '34.2° N' },
      { id: 'mtl', label: 'Montreal, Canada', lat: '45.50° N', isCorrect: true },
      { id: 'mia', label: 'Miami, Florida', lat: '25.7° N' },
      { id: 'dc', label: 'Washington, D.C.', lat: '38.9° N' }
    ],
    explanation: 'Montreal (45.50° N) and Venice (45.44° N) share the exact same parallel! Europe’s Atlantic Gulf Stream and the Alpine barrier keep Venice mild, while continental polar air plunges Montreal below −20°C every winter.',
    antipodeTitle: 'Direct Core Drill from Venice (45.44° N, 12.31° E)',
    antipodeCoords: '45.44° S, 167.69° W',
    antipodeResult: 'South Pacific Abyss — 1,150 km east of New Zealand’s Fiordland coast (depth: 4,900 m).'
  },
  {
    id: 'rome-chicago',
    anchorCity: 'Rome, Italy',
    anchorLat: '41.90° N',
    anchorFact: 'Umbrella pines, citrus courtyards, and open-air piazzas year-round.',
    question: 'If you travel due west along Rome’s 41.9° N latitude line across the Atlantic, which city do you hit directly?',
    options: [
      { id: 'atl', label: 'Atlanta, Georgia', lat: '33.7° N' },
      { id: 'chi', label: 'Chicago, Illinois', lat: '41.88° N', isCorrect: true },
      { id: 'hou', label: 'Houston, Texas', lat: '29.7° N' },
      { id: 'la', label: 'Los Angeles, California', lat: '34.0° N' }
    ],
    explanation: 'Chicago’s Loop (41.88° N) and the Roman Colosseum (41.89° N) sit on the exact same parallel of latitude. While Rome is buffered by the warm Tyrrhenian Sea, Chicago sits open to Arctic air sweeping across the Canadian plains.',
    antipodeTitle: 'Direct Core Drill from Rome (41.90° N, 12.50° E)',
    antipodeCoords: '41.90° S, 167.50° W',
    antipodeResult: 'Chatham Rise, South Pacific Ocean — 920 km east of Christchurch, New Zealand.'
  },
  {
    id: 'madrid-nyc',
    anchorCity: 'Madrid, Spain',
    anchorLat: '40.42° N',
    anchorFact: 'Sun-baked Castilian plateau, olive groves, and Europe’s highest capital elevation.',
    question: 'Which iconic coastal metropolis lies at the exact same 40.4°–40.7° N latitude as sun-drenched Madrid?',
    options: [
      { id: 'nyc', label: 'New York City, USA', lat: '40.71° N', isCorrect: true },
      { id: 'hav', label: 'Havana, Cuba', lat: '23.1° N' },
      { id: 'sd', label: 'San Diego, California', lat: '32.7° N' },
      { id: 'no', label: 'New Orleans, Louisiana', lat: '29.9° N' }
    ],
    explanation: 'Madrid (40.42° N) and Manhattan (40.71° N) receive the exact same solar angle every day of the year—and both sit on the same parallel as Beijing (39.9° N)!',
    antipodeTitle: 'Direct Core Drill from Madrid (40.42° N, 3.70° W)',
    antipodeCoords: '40.42° S, 176.30° E',
    antipodeResult: 'RARE LAND ANTIPODE! Weber, Manawatū-Whanganui, North Island, New Zealand — one of the very few cities on Earth whose exact opposite point is dry land!'
  }
];

const SPATIAL_PARADOXES = [
  {
    id: 'panama-canal',
    category: 'DIRECTIONAL ILLUSION',
    title: 'The Panama Canal Compass Paradox',
    prompt: 'When a cargo ship enters the Panama Canal from the Caribbean Sea (Atlantic) and exits into the Pacific Ocean, which compass direction does it actually travel?',
    options: [
      { id: 'w', label: 'Due West (Atlantic to Pacific)' },
      { id: 'se', label: 'Southeast — the Pacific exit is further EAST than the Atlantic entrance!', isCorrect: true },
      { id: 'sw', label: 'Due Southwest' },
      { id: 'nw', label: 'Northwest' }
    ],
    reveal: 'Because the Isthmus of Panama bends like a lying "S", the Atlantic entrance at Colón (79°55\' W) is actually 43 km FURTHER WEST than the Pacific exit at Balboa/Panama City (79°34\' W). Ships sail SOUTHEAST from the Atlantic to reach the Pacific!',
    metric: '43 km Eastward Shift'
  },
  {
    id: 'reno-los-angeles',
    category: 'LONGITUDE WARP',
    title: 'Reno, Nevada vs. Los Angeles, California',
    prompt: 'Nevada sits east of California on every US map. Which city lies further WEST by true longitude?',
    options: [
      { id: 'la', label: 'Los Angeles, California (118.24° W)' },
      { id: 'reno', label: 'Reno, Nevada (119.81° W) — further west than Los Angeles!', isCorrect: true },
      { id: 'same', label: 'They sit on the exact same meridian' }
    ],
    reveal: 'Southern California curves sharply eastward! Reno, Nevada sits at 119.81° W, while downtown Los Angeles sits at 118.24° W—meaning Reno is 138 km further WEST than Los Angeles.',
    metric: '1.57° Further West'
  },
  {
    id: 'brazil-longitude',
    category: 'CONTINENTAL GEOMETRY',
    title: 'Northernmost Brazil vs. All of Canada',
    prompt: 'Mount Caburaí sits at the northern tip of Brazil. Which country is physically closer to the northernmost point of Brazil?',
    options: [
      { id: 'arg', label: 'Argentina' },
      { id: 'can', label: 'Canada — Northern Brazil is closer to Canada than to Southern Brazil!', isCorrect: true },
      { id: 'chl', label: 'Southern Chile' }
    ],
    reveal: 'Brazil spans 4,395 km from north to south! From Monte Caburaí (5.27° N) in northern Brazil to Point Pelee, Ontario, Canada (41.9° N) is only 4,260 km—closer than Brazil’s own southernmost town of Chuí (4,395 km away)!',
    metric: '4,395 km Vertical Span'
  },
  {
    id: 'cleopatra-apollo',
    category: 'DEEP-TIME HORIZON',
    title: 'Cleopatra vs. The Great Pyramid of Giza',
    prompt: 'Cleopatra VII ruled Egypt from 51–30 BCE. Chronologically, which milestone was closer to Cleopatra’s lifetime?',
    options: [
      { id: 'giza', label: 'The building of the Great Pyramid of Giza (c. 2560 BCE)' },
      { id: 'moon', label: 'The Apollo 11 Moon Landing & iPhone era (500+ years closer!)', isCorrect: true }
    ],
    reveal: 'Khufu’s Great Pyramid was completed around 2560 BCE—2,530 years before Cleopatra’s death in 30 BCE. The 1969 Apollo 11 Moon landing (and even today, 2026) occurred less than 2,060 years after her reign!',
    metric: '500-Year Time Gap'
  }
];

export default function GeonautsFieldLab({ onOpenConnections, onOpenThroughTime, onOpenChallenge }) {
  const [activeTab, setActiveTab] = useState('twins');
  const [twinIdx, setTwinIdx] = useState(0);
  const [twinChoice, setTwinChoice] = useState(null);
  const [showDrill, setShowDrill] = useState(false);

  const [paradoxIdx, setParadoxIdx] = useState(0);
  const [paradoxChoice, setParadoxChoice] = useState(null);

  const currentTwin = LATITUDE_TWINS[twinIdx];
  const currentParadox = SPATIAL_PARADOXES[paradoxIdx];

  const twinAccuracy = useMemo(() => {
    if (!twinChoice) return null;
    const picked = currentTwin.options.find(o => o.id === twinChoice);
    return picked?.isCorrect ? 'exact' : 'missed';
  }, [twinChoice, currentTwin]);

  return (
    <section className="fieldlab-shell" aria-labelledby="fieldlab-heading">
      <div className="fieldlab-inner">
        <div className="fieldlab-header">
          <div>
            <p className="fieldlab-eyebrow">
              <Sparkles size={15} /> GEONAUTS INTERACTIVE CARTOGRAPHY LAB · NO SPOILERS
            </p>
            <h2 id="fieldlab-heading">
              Test your <em>spatial intuition.</em>
            </h2>
          </div>
          <p className="fieldlab-subtitle">
            Maps flatten a curved planet and distort our sense of direction, climate, and deep time.
            Put your mental globe to the test with two interactive cartography instruments.
          </p>
        </div>

        <div className="fieldlab-tabs" role="tablist" aria-label="Cartography Lab Instruments">
          <button
            role="tab"
            aria-selected={activeTab === 'twins'}
            className={'fieldlab-tab ' + (activeTab === 'twins' ? 'active' : '')}
            onClick={() => setActiveTab('twins')}
          >
            <span className="fieldlab-tab-num">01</span>
            <div>
              <strong>Latitude Twins & Antipode Drill</strong>
              <span>Same solar angle, wildly different worlds + core scanner</span>
            </div>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'paradox'}
            className={'fieldlab-tab ' + (activeTab === 'paradox' ? 'active' : '')}
            onClick={() => setActiveTab('paradox')}
          >
            <span className="fieldlab-tab-num">02</span>
            <div>
              <strong>Spatial & Deep-Time Paradoxes</strong>
              <span>Counter-intuitive compass anomalies & chronological shocks</span>
            </div>
          </button>
        </div>

        {activeTab === 'twins' && (
          <div className="fieldlab-panel" role="tabpanel">
            <div className="fieldlab-panel-bar">
              <div className="fieldlab-pills">
                {LATITUDE_TWINS.map((item, idx) => (
                  <button
                    key={item.id}
                    className={'fieldlab-pill ' + (idx === twinIdx ? 'active' : '')}
                    onClick={() => {
                      setTwinIdx(idx);
                      setTwinChoice(null);
                      setShowDrill(false);
                    }}
                  >
                    Parallel #{idx + 1}: {item.anchorCity.split(',')[0]} ({item.anchorLat})
                  </button>
                ))}
              </div>
              <span className="fieldlab-badge">
                <Globe2 size={14} /> SOLAR PARALLEL EXPERIMENT
              </span>
            </div>

            <div className="fieldlab-grid">
              <div className="fieldlab-anchor-card">
                <span className="fieldlab-card-tag">ANCHOR COORDINATE</span>
                <h3>{currentTwin.anchorCity}</h3>
                <div className="fieldlab-coord-readout">{currentTwin.anchorLat}</div>
                <p>{currentTwin.anchorFact}</p>

                <div className="fieldlab-antipode-box">
                  <div className="fieldlab-antipode-head">
                    <Orbit size={16} />
                    <span>PLANETARY CORE ANTIPODE DRILL</span>
                  </div>
                  <p className="fieldlab-antipode-desc">
                    What happens if you drill a straight tunnel 12,742 km through the Earth’s core from {currentTwin.anchorCity.split(',')[0]}?
                  </p>
                  {!showDrill ? (
                    <button className="fieldlab-drill-btn" onClick={() => setShowDrill(true)}>
                      Simulate Core Drill from {currentTwin.anchorCity.split(',')[0]} <ArrowUpRight size={15} />
                    </button>
                  ) : (
                    <div className="fieldlab-drill-result">
                      <strong>{currentTwin.antipodeCoords}</strong>
                      <p>{currentTwin.antipodeResult}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="fieldlab-quiz-card">
                <span className="fieldlab-card-tag">FIND THE LATITUDE TWIN</span>
                <h4>{currentTwin.question}</h4>
                <div className="fieldlab-options">
                  {currentTwin.options.map(opt => {
                    const isPicked = twinChoice === opt.id;
                    const showState = Boolean(twinChoice);
                    let stateClass = '';
                    if (showState && opt.isCorrect) stateClass = 'correct';
                    else if (showState && isPicked && !opt.isCorrect) stateClass = 'wrong';

                    return (
                      <button
                        key={opt.id}
                        className={'fieldlab-option ' + stateClass}
                        onClick={() => setTwinChoice(opt.id)}
                      >
                        <div className="fieldlab-option-main">
                          <span>{opt.label}</span>
                          {showState && <code className="fieldlab-lat-chip">{opt.lat}</code>}
                        </div>
                        {showState && opt.isCorrect && <CheckCircle2 size={18} />}
                        {showState && isPicked && !opt.isCorrect && <XCircle size={18} />}
                      </button>
                    );
                  })}
                </div>

                {twinChoice && (
                  <div className={'fieldlab-feedback ' + twinAccuracy}>
                    <strong>
                      {twinAccuracy === 'exact'
                        ? 'Bullseye! You nailed the parallel.'
                        : 'Climate Illusion! Ocean currents fool almost everyone.'}
                    </strong>
                    <p>{currentTwin.explanation}</p>
                    <div className="fieldlab-feedback-actions">
                      <button
                        className="fieldlab-next-btn"
                        onClick={() => {
                          setTwinIdx((twinIdx + 1) % LATITUDE_TWINS.length);
                          setTwinChoice(null);
                          setShowDrill(false);
                        }}
                      >
                        Try Next Latitude Twin <ArrowUpRight size={15} />
                      </button>
                      {onOpenConnections && (
                        <button className="fieldlab-secondary-btn" onClick={onOpenConnections}>
                          Explore Planet Connections <ArrowUpRight size={15} />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'paradox' && (
          <div className="fieldlab-panel" role="tabpanel">
            <div className="fieldlab-panel-bar">
              <div className="fieldlab-pills">
                {SPATIAL_PARADOXES.map((item, idx) => (
                  <button
                    key={item.id}
                    className={'fieldlab-pill ' + (idx === paradoxIdx ? 'active' : '')}
                    onClick={() => {
                      setParadoxIdx(idx);
                      setParadoxChoice(null);
                    }}
                  >
                    #{idx + 1}: {item.title.split(' vs.')[0].replace('The ', '')}
                  </button>
                ))}
              </div>
              <span className="fieldlab-badge">
                <Layers size={14} /> {currentParadox.category}
              </span>
            </div>

            <div className="fieldlab-paradox-card">
              <div className="fieldlab-paradox-top">
                <div>
                  <span className="fieldlab-card-tag">{currentParadox.category}</span>
                  <h3>{currentParadox.title}</h3>
                </div>
                <span className="fieldlab-metric-chip">{currentParadox.metric}</span>
              </div>

              <p className="fieldlab-paradox-prompt">{currentParadox.prompt}</p>

              <div className="fieldlab-options">
                {currentParadox.options.map(opt => {
                  const isPicked = paradoxChoice === opt.id;
                  const showState = Boolean(paradoxChoice);
                  let stateClass = '';
                  if (showState && opt.isCorrect) stateClass = 'correct';
                  else if (showState && isPicked && !opt.isCorrect) stateClass = 'wrong';

                  return (
                    <button
                      key={opt.id}
                      className={'fieldlab-option ' + stateClass}
                      onClick={() => setParadoxChoice(opt.id)}
                    >
                      <span>{opt.label}</span>
                      {showState && opt.isCorrect && <CheckCircle2 size={18} />}
                      {showState && isPicked && !opt.isCorrect && <XCircle size={18} />}
                    </button>
                  );
                })}
              </div>

              {paradoxChoice && (
                <div className="fieldlab-feedback exact">
                  <strong>Cartographic Reality Check:</strong>
                  <p>{currentParadox.reveal}</p>
                  <div className="fieldlab-feedback-actions">
                    <button
                      className="fieldlab-next-btn"
                      onClick={() => {
                        setParadoxIdx((paradoxIdx + 1) % SPATIAL_PARADOXES.length);
                        setParadoxChoice(null);
                      }}
                    >
                      Next Spatial Paradox <ArrowUpRight size={15} />
                    </button>
                    {onOpenThroughTime && (
                      <button className="fieldlab-secondary-btn" onClick={onOpenThroughTime}>
                        Explore Places Through Time <ArrowUpRight size={15} />
                      </button>
                    )}
                    {onOpenChallenge && (
                      <button className="fieldlab-secondary-btn" onClick={onOpenChallenge}>
                        Play Daily City Guess Radar <Compass size={15} />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

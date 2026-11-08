import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Headphones, Pause } from 'lucide-react';
import journeys from '../data/journeys.json';
import land from '../data/connection-land.json';
import useStoryAudio from '../hooks/useStoryAudio';
import './FollowJourney.css';

const landPath = land.features.flatMap(({ geometry }) =>
  geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates],
).flatMap(polygon => polygon.map(ring =>
  ring.map(([lon, lat], index) => `${index ? 'L' : 'M'}${lon},${-lat}`).join(' ') + ' Z',
)).join(' ');

function RouteMap({ stops, active }) {
  const longitudes = stops.map(([, lon]) => lon);
  const crossesDateLine = Math.max(...longitudes) - Math.min(...longitudes) > 180;
  const xs = longitudes.map(lon => crossesDateLine && lon < 0 ? lon + 360 : lon);
  const ys = stops.map(([, , lat]) => -lat);
  const left = Math.min(...xs), right = Math.max(...xs);
  const top = Math.min(...ys), bottom = Math.max(...ys);
  const width = Math.max(right - left, (bottom - top) * 1.7, 0.35) * 1.35;
  const height = width / 1.7;
  const viewBox = [((left + right) - width) / 2, ((top + bottom) - height) / 2, width, height];
  const points = stops.map(([, , lat], index) => `${xs[index]},${-lat}`);
  const radius = width / 55;

  return <figure className="fj-map">
    <svg viewBox={viewBox.join(' ')} role="img" aria-label={`Schematic route through ${stops.map(([place]) => place).join(', ')}`}>
      <path d={landPath} fill="#456153" fillRule="evenodd"/>
      {crossesDateLine && <path d={landPath} transform="translate(360 0)" fill="#456153" fillRule="evenodd"/>}
      <polyline points={points.join(' ')} fill="none" stroke="#a2af93" strokeDasharray="4 5" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
      <polyline points={points.slice(0, active + 1).join(' ')} fill="none" stroke="#dfeb99" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
      {stops.map(([place, , lat], index) => <g key={place}>
        <circle cx={xs[index]} cy={-lat} r={radius} fill={index === active ? '#dfeb99' : '#223a31'} stroke="#dfeb99" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
        <text x={xs[index]} y={-lat} dy=".35em" textAnchor="middle" fontSize={radius * 1.2} fill={index === active ? '#223a31' : '#fff'}>{index + 1}</text>
      </g>)}
    </svg>
    <figcaption>Selected stops · Schematic route · <a href="https://www.naturalearthdata.com/about/terms-of-use/">Natural Earth</a></figcaption>
  </figure>;
}

export default function FollowJourney({ onHome }) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(0);
  const audio = useStoryAudio();
  const journey = journeys[index];
  const [place, , , title, description] = journey.stops[active];
  const selectStop = index => { audio.reset(); setActive(index); };

  const selectJourney = next => { setIndex(next); selectStop(0); };

  return <div className="tt-page fj-page">
    <header className="tt-header">
      <button className="tt-brand" onClick={onHome}><Compass size={30} strokeWidth={1.2}/><span>GEONAUTS<small>GUIDE</small></span></button>
      <button className="tt-home" onClick={onHome}><ArrowLeft size={15}/> Back to the guide</button>
    </header>
    <main>
      <section className="fj-intro">
        <p className="tt-eyebrow">04 / FOLLOW THE JOURNEY</p>
        <h1>Every journey <em>leaves a trace.</em></h1>
        <p>Trace the routes that carried people, goods and ideas across the world.</p>
      </section>
      <section className="fj-content" aria-labelledby="fj-title">
        <div className="tt-picker">
          <label htmlFor="fj-journey">Choose a journey</label>
          <select id="fj-journey" value={index} onChange={event => selectJourney(Number(event.target.value))}>
            {journeys.map((item, position) => <option key={item.id} value={position}>{item.name}</option>)}
          </select>
          <div className="tt-picker-controls">
            <span aria-live="polite">{index + 1} / {journeys.length}</span>
            <button type="button" aria-label="Previous journey" onClick={() => selectJourney((index - 1 + journeys.length) % journeys.length)}><ArrowLeft size={16}/></button>
            <button type="button" aria-label="Next journey" onClick={() => selectJourney((index + 1) % journeys.length)}><ArrowRight size={16}/></button>
          </div>
        </div>
        <h2 id="fj-title">{journey.title}</h2>
        <p>{journey.intro}</p>
        <div className="fj-layout">
          <RouteMap stops={journey.stops} active={active}/>
          <article className="fj-stop" aria-labelledby="fj-stop-title">
            <div aria-live="polite">
              <p className="tt-eyebrow">STOP {active + 1} OF {journey.stops.length} / {place}</p>
              <h3 id="fj-stop-title">{title}</h3>
              <p>{description}</p>
            </div>
            <button className="tt-audio" disabled={audio.state === 'loading'} onClick={() => audio.toggle(`${place}. ${title}. ${description}`)}>
              {audio.state === 'playing' ? <Pause size={16}/> : <Headphones size={16}/>}
              {{ loading: 'Preparing audio…', playing: 'Pause', paused: 'Resume', idle: 'Listen to this stop' }[audio.state]}
            </button>
            {audio.error && <p role="alert">{audio.error}</p>}
            <div className="fj-step">
              <button disabled={active === 0} onClick={() => selectStop(active - 1)}><ArrowLeft size={16}/> Previous</button>
              <button disabled={active === journey.stops.length - 1} onClick={() => selectStop(active + 1)}>Next stop <ArrowRight size={16}/></button>
            </div>
          </article>
        </div>
        <ol className="fj-stops" aria-label="Journey stops">
          {journey.stops.map(([label], index) => <li key={label}><button aria-pressed={index === active} onClick={() => selectStop(index)}>{index + 1}. {label}</button></li>)}
        </ol>
        <section className="fj-sources">
          <h3>Sources</h3>
          {journey.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.name} <ArrowUpRight size={14}/></a>)}
        </section>
      </section>
    </main>
    <footer className="tt-footer"><span>GEONAUTS GUIDE</span><a href="?view=about">About & credits</a></footer>
  </div>;
}

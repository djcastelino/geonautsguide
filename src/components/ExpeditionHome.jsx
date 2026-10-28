import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Compass, Globe2, Headphones, Map, Search } from 'lucide-react';
import LandmarkImage from './LandmarkImage';
import './ExpeditionHome.css';

const startingPlaces = ['machu-picchu', 'petra', 'taj-mahal', 'dolomites', 'colosseum', 'trolltunga'];
const homeImage = place => startingPlaces.includes(place.id) ? { ...place, imageUrl: `/images/home/${place.id}.webp` } : place;
const collections = ['All discoveries', 'Ancient worlds', 'Wild places', 'Human wonders'];

export default function ExpeditionHome({ landmarks, featured, onExplore, onPlan, onChallenge, onLandmarkSelect, isLoading }) {
  const [collection, setCollection] = useState('All discoveries');
  const [query, setQuery] = useState('');
  const countries = new Set(landmarks.map(place => place.country)).size;
  const hero = landmarks.find(place => place.id === 'dolomites') || featured;
  const places = query.trim() ? landmarks : startingPlaces.map(id => landmarks.find(place => place.id === id)).filter(Boolean);
  const filtered = places.filter(place => {
    const matchesQuery = `${place.name} ${place.city} ${place.country}`.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCollection = collection === 'All discoveries' ||
      (collection === 'Wild places' ? place.type === 'Natural' :
        collection === 'Ancient worlds' ? ['Ancient Wonder', 'Archaeological Site', 'Historic Site'].includes(place.category) : place.type !== 'Natural');
    return matchesQuery && matchesCollection;
  }).slice(0, 6);

  const browse = () => document.getElementById('discoveries')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });

  return (
    <div className="expedition-home">
      <section className="expedition-hero" aria-labelledby="expedition-title">
        <img className="expedition-landscape" src="/images/home/dolomites.webp" alt="Sunlight across the jagged peaks and green valleys of the Dolomites" fetchPriority="high" />
        <div className="expedition-shade" />
        <header className="expedition-nav">
          <a className="expedition-brand" href="#" aria-label="Geonauts Guide home"><Compass size={34} strokeWidth={1.25} /><span>GEONAUTS<span className="brand-guide">GUIDE</span></span></a>
          <nav aria-label="Main navigation">
            <button onClick={browse}>Discover</button>
            <button onClick={onPlan}>Travel planner</button>
            <button onClick={onChallenge}>Daily City Guess</button>
          </nav>
          <button className="expedition-nav-plan" onClick={onPlan}>Plan a journey <ArrowUpRight size={16} /></button>
        </header>
        <div className="expedition-hero-content">
          <p className="expedition-eyebrow"><span className="expedition-dot" /> FOR THE ENDLESSLY CURIOUS</p>
          <h1 id="expedition-title">The world has<br />a story.<br /><em>Go hear it.</em></h1>
          <p className="expedition-intro">Beyond the familiar. Beneath the surface.<br />Discover extraordinary places through the stories that bring them to life.</p>
          <button className="expedition-button expedition-button-lime" onClick={browse}>Find your next discovery <ArrowUpRight size={19} /></button>
        </div>
        <div className="expedition-coordinate"><span className="coordinate-cross">+</span><span>{hero.coordinates.lat.toFixed(2)}° N<br />{hero.coordinates.lng.toFixed(2)}° E</span></div>
        <div className="expedition-hero-bottom">
          <button className="expedition-scroll" onClick={browse}><span className="expedition-scroll-circle"><ArrowDown size={18} /></span> A WORLD WORTH EXPLORING</button>
          <button className="expedition-location" onClick={() => onLandmarkSelect(hero)} disabled={isLoading}><span>IN THE FRAME</span>Dolomites, Italy <ArrowUpRight size={16} /></button>
        </div>
        <span className="expedition-edge-note" aria-hidden="true">TAKE THE SCENIC ROUTE.</span>
      </section>

      <div className="expedition-values" aria-label="Explore with Geonauts Guide">
        <span><Globe2 size={18} /> {landmarks.length} places. Countless perspectives.</span>
        <span><Headphones size={18} /> Stories you can listen to.</span>
        <span><Map size={18} /> A journey that’s yours.</span>
      </div>

      <section className="expedition-discoveries expedition-section" id="discoveries" aria-labelledby="discoveries-title">
        <div className="expedition-section-top"><p className="expedition-eyebrow dark-eyebrow">01 / FOLLOW YOUR CURIOSITY</p><span className="expedition-mono">{countries} COUNTRIES · ONE SHARED WORLD</span></div>
        <div className="expedition-section-heading"><h2 id="discoveries-title">Some places stay<br />with you <em>forever.</em></h2><div><p>Ancient footsteps. Impossible landscapes.<br />Ordinary moments in extraordinary places.<br />There’s a story waiting for you.</p><button className="expedition-text-link" onClick={onExplore}>Explore all {landmarks.length} places <ArrowUpRight size={17} /></button></div></div>
        <div className="expedition-browse-controls">
          <div className="expedition-collections" role="group" aria-label="Discovery collections">{collections.map(item => <button key={item} onClick={() => setCollection(item)} aria-pressed={collection === item}>{item}</button>)}</div>
          <label className="expedition-search"><Search size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Where are you curious about?" aria-label="Search landmarks, cities, or countries" type="search" /></label>
        </div>
        <div className="expedition-place-grid" aria-live="polite">
          {filtered.map((place, index) => <button className="expedition-place" key={place.id} onClick={() => onLandmarkSelect(place)} disabled={isLoading}>
            <div className="expedition-place-image"><LandmarkImage landmark={homeImage(place)} className="expedition-photo" loading="lazy" /><span className="expedition-place-number">{String(index + 1).padStart(2, '0')} / DISCOVERY</span><span className="expedition-place-open"><ArrowUpRight size={23} /></span><span className="expedition-place-audio"><Headphones size={13} /> AUDIO STORY</span></div>
            <div className="expedition-place-caption"><div><span>{place.country} / {place.category}</span><h3>{place.name}</h3></div><ArrowUpRight size={21} /></div>
          </button>)}
        </div>
        {!filtered.length && <div className="expedition-empty"><h3>A different direction, perhaps?</h3><p>No places match this search and collection. Try another destination or choose All discoveries.</p><button className="expedition-text-link" onClick={() => { setQuery(''); setCollection('All discoveries'); }}>Reset discoveries <ArrowRight size={16} /></button></div>}
      </section>

      <section className="expedition-daily" aria-labelledby="daily-title">
        <div className="expedition-daily-visual"><LandmarkImage landmark={featured} className="expedition-photo" loading="lazy" /><span className="expedition-daily-stamp"><Compass size={36} strokeWidth={1} /><span>A NEW PERSPECTIVE<br />EVERY DAY</span></span></div>
        <div className="expedition-daily-copy"><p className="expedition-eyebrow">02 / TODAY’S FIELD NOTE</p><h2 id="daily-title">One place.<br />A thousand<br /><em>new details.</em></h2><div className="expedition-daily-name"><span>{featured.city}, {featured.country}</span><h3>{featured.name}</h3><p>{featured.description.replace(/[.!?]$/, '')}. Discover the history, the people, and the details you might otherwise walk past.</p></div><button className="expedition-button expedition-button-lime" onClick={() => onLandmarkSelect(featured)} disabled={isLoading}><Headphones size={18} /> Open today’s audio guide <ArrowUpRight size={18} /></button><p className="expedition-fine-print">AI-powered storytelling. A little more context for your curiosity.</p></div>
      </section>

      <section className="expedition-plan expedition-section" aria-labelledby="plan-title"><div><p className="expedition-eyebrow dark-eyebrow">03 / MAKE IT YOUR OWN</p><h2 id="plan-title">Less planning.<br /><em>More possibility.</em></h2><p>Bring your dates, your interests, and your sense of adventure.<br />We’ll help you connect the dots.</p><button className="expedition-button expedition-button-dark" onClick={onPlan}>Start planning your journey <ArrowUpRight size={18} /></button></div><div className="expedition-route-art" aria-hidden="true"><svg viewBox="0 0 480 300" fill="none"><path d="M20 240C100 240 42 70 155 90S225 285 310 175 370 45 450 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" /><circle cx="20" cy="240" r="7" fill="currentColor" /><circle cx="155" cy="90" r="9" stroke="currentColor" /><circle cx="310" cy="175" r="9" stroke="currentColor" /><circle cx="450" cy="55" r="7" fill="currentColor" /></svg><span className="route-note route-note-one">A PLACE TO BEGIN</span><span className="route-note route-note-two">A WORTHWHILE DETOUR</span><Compass className="route-compass" size={76} strokeWidth={0.7} /></div></section>
      <footer className="expedition-footer"><div className="expedition-footer-brand"><Compass size={24} strokeWidth={1.2} /> GEONAUTS GUIDE</div><p>Stay curious. Go a little further.</p><span>© {new Date().getFullYear()} GEONAUTS GUIDE</span></footer>
      {isLoading && <div className="expedition-loading" role="status"><Compass size={22} className="expedition-loading-icon" /> Finding the story behind this place…</div>}
    </div>
  );
}

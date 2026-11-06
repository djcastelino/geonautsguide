import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Headphones, Pause, RotateCcw } from 'lucide-react';
import stories from '../data/connections.json';
import land from '../data/connection-land.json';
import credits from '../data/connection-credits.json';
import './PlanetConnections.css';

function ConnectionMap({ story }) {
  // A story-centred equirectangular projection keeps Pacific connections continuous.
  const radians = Math.PI / 180;
  const center = Math.atan2(Math.sin(story.from.lng*radians)+Math.sin(story.to.lng*radians), Math.cos(story.from.lng*radians)+Math.cos(story.to.lng*radians))/radians;
  const project = ([lng, lat]) => { let delta = lng - center; while (delta > 180) delta -= 360; while (delta < -180) delta += 360; return [500 + delta * 2.65, 240 - lat * 2.65]; };
  const rings = land.features.flatMap(f => f.geometry.type === 'Polygon' ? f.geometry.coordinates : f.geometry.coordinates.flat());
  const a = project([story.from.lng, story.from.lat]), b = project([story.to.lng, story.to.lat]);
  return <div className="pc-map"><svg viewBox="0 0 1000 500" role="img" aria-label={`Map connecting ${story.from.name} and ${story.to.name}`}>
    <defs><pattern id="pc-grid" width="53" height="53" patternUnits="userSpaceOnUse"><path d="M 53 0 L 0 0 0 53" fill="none" stroke="#bacaac" strokeOpacity=".1" /></pattern><filter id="pc-glow"><feGaussianBlur stdDeviation="4" /></filter></defs>
    <rect width="1000" height="500" fill="url(#pc-grid)" />
    {rings.map((ring,i) => {
      const path=ring.map(([lng,lat],k)=>`${k?'L':'M'}${(500+(lng-center)*2.65).toFixed(1)},${(240-lat*2.65).toFixed(1)}`).join(' ')+' Z';
      return [-954,0,954].map(shift=><path key={`${i}-${shift}`} transform={`translate(${shift} 0)`} d={path} fill="#334238" stroke="#465648" strokeWidth=".5"/>);
    })}
    <path className="pc-route-glow" d={`M${a} Q${(a[0]+b[0])/2},${Math.max(35,Math.min(a[1],b[1])-85)} ${b}`} />
    <path className="pc-route" d={`M${a} Q${(a[0]+b[0])/2},${Math.max(35,Math.min(a[1],b[1])-85)} ${b}`} />
    {[{p:a,place:story.from},{p:b,place:story.to}].map(({p,place})=><g key={place.name}><circle cx={p[0]} cy={p[1]} r="13" fill="#d9ef83" opacity=".12"/><circle cx={p[0]} cy={p[1]} r="4" fill="#d9ef83"/><text x={p[0]+(p[0]<(a[0]+b[0])/2?-12:12)} y={p[1]+29} textAnchor={p[0]<(a[0]+b[0])/2?"end":"start"} fill="#f4f4e9" fontSize="16">{place.name}</text></g>)}
  </svg><span className="pc-map-label">THE THREAD BETWEEN THEM</span><p>{story.mapNote}</p></div>;
}

export default function PlanetConnections({ onHome }) {
  const [index,setIndex]=useState(0), [choice,setChoice]=useState(null), [revealed,setRevealed]=useState(false);
  const [audioState,setAudioState]=useState('idle'),[audioError,setAudioError]=useState('');
  const audio=useRef(null), request=useRef(null), url=useRef(null), revealRef=useRef(null);
  const story=stories[index];
  const stopAudio=()=>{request.current?.abort(); audio.current?.pause();audio.current=null;if(url.current)URL.revokeObjectURL(url.current);url.current=null;};
  useEffect(()=>()=>stopAudio(),[]);
  const selectStory=(i)=>{stopAudio();setAudioState('idle');setAudioError('');setIndex(i);setChoice(null);setRevealed(false);};
  const reveal=()=>{setRevealed(true);setTimeout(()=>revealRef.current?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}),80);};
  const listen=async()=>{
    if(audioState==='playing'){audio.current?.pause();setAudioState('paused');return;}
    if(audioState==='paused'){try{await audio.current.play();setAudioState('playing');}catch{setAudioError('Playback could not start. Try again.');setAudioState('idle');}return;}
    setAudioState('loading');setAudioError('');const controller=new AbortController();request.current=controller;
    try{const res=await fetch('/api/speech',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({voice: "en-US-AndrewMultilingualNeural", rate: 0.97, text:`${story.title} ${story.steps.map(s=>s.text).join(' ')} ${story.takeaway}`})});if(!res.ok)throw new Error();const blob=await res.blob();if(controller.signal.aborted)return;url.current=URL.createObjectURL(blob);audio.current=new Audio(url.current);audio.current.onended=()=>{setAudioState('idle');stopAudio();};await audio.current.play();setAudioState('playing');}catch(e){if(e.name!=='AbortError'){setAudioError('The audio guide could not load. Please try again.');setAudioState('idle');stopAudio();}}
  };
  return <div className="pc-page"><header className="pc-header"><button className="pc-brand" onClick={onHome}><Compass size={30} strokeWidth={1.3}/><span>GEONAUTS<small>GUIDE</small></span></button><span>DISCOVER THE CONNECTIONS.</span><button className="pc-back" onClick={onHome}><ArrowLeft size={16}/> Explore the guide</button></header>
    <main><section className="pc-intro"><div><p className="pc-eyebrow">A NEW WAY TO SEE OUR WORLD</p><h1>Nothing exists<br/><em>in isolation.</em></h1></div><div className="pc-intro-copy"><span className="pc-orbit" aria-hidden="true">↗</span><p>A desert. A rainforest. An invisible thread.<br/>Look closer. Our planet is full of connections<br/>you never knew were there.</p><span className="pc-eyebrow">PLANET CONNECTIONS / VOL. 01</span></div></section>
    <div className="pc-collection-bar"><label>FOLLOW A CONNECTION<select aria-label="Select a Planet Connection" value={index} onChange={event=>selectStory(Number(event.target.value))}>{stories.map((s,i)=><option key={s.id} value={i}>{String(i+1).padStart(2,'0')} · {s.from.name} ↔ {s.to.name}</option>)}</select></label><div><span>{String(index+1).padStart(2,'0')} / {stories.length} STORIES</span><button aria-label="Previous connection" onClick={()=>selectStory((index-1+stories.length)%stories.length)}><ArrowLeft size={17}/></button><button aria-label="Next connection" onClick={()=>selectStory((index+1)%stories.length)}><ArrowRight size={17}/></button></div></div>
    <details className="pc-library"><summary>Browse all {stories.length} connections <span>A world of unexpected threads</span></summary><nav className="pc-stories" aria-label="Choose a connection">{stories.map((s,i)=><button key={s.id} onClick={()=>selectStory(i)} aria-current={index===i?'true':undefined}><span>{String(i+1).padStart(2,'0')}</span><span>{s.from.name} <span className="pc-tab-arrow">↔</span> {s.to.name}</span><ArrowUpRight size={16}/></button>)}</nav></details>
    <section className="pc-mystery" aria-labelledby="pc-story-title"><div className="pc-pair">{[story.from,story.to].map((place,i)=><figure key={place.image}><img src={`/images/connections/${place.image}.jpg`} alt={`${place.name}, ${place.detail}`} fetchPriority="high"/><div className="pc-photo-shade"/><figcaption><span>0{i+1} / {place.detail}</span><h2>{place.name}</h2></figcaption></figure>)}<span className="pc-pair-symbol" aria-hidden="true">↔</span></div>
    <div className="pc-question"><div><p className="pc-eyebrow">{story.category} · A 2-MINUTE DISCOVERY</p><h2 id="pc-story-title">{revealed?story.title:'Worlds apart. Or are they?'}</h2><p>{story.teaser}</p></div><div className="pc-guess"><h3>{story.question}</h3><div role="group" aria-label="Possible connections">{story.options.map((option,i)=><button key={option} disabled={revealed} onClick={()=>setChoice(i)} aria-pressed={choice===i} className={revealed&&i===story.correct?'pc-correct':''}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>{!revealed?<><button className="pc-reveal" onClick={reveal}>{choice===null?'Show me the connection':'Reveal the connection'}<ArrowRight size={19}/></button><p className="pc-hint">Make a guess, or follow your curiosity straight to the story.</p></>:<p className="pc-feedback" role="status">{choice===null?'Here’s the connection.':choice===story.correct?'You found the connection.':'A surprising connection, isn’t it?'} {story.options[story.correct]}.</p>}</div></div></section>
    {revealed&&<section className="pc-revealed" ref={revealRef}><div className="pc-reveal-heading"><div><p className="pc-eyebrow">FOLLOW THE THREAD</p><h2>{story.reveal}</h2></div><button className="pc-listen" onClick={listen} disabled={audioState==='loading'}>{audioState==='playing'?<Pause size={18}/>:<Headphones size={18}/>} {audioState==='loading'?'Preparing audio…':audioState==='playing'?'Pause story':audioState==='paused'?'Resume story':'Listen to the story'}</button></div>{audioError&&<p role="alert">{audioError}</p>}<ConnectionMap story={story}/><div className="pc-steps">{story.steps.map((step,i)=><article key={step.label}><span className="pc-step-number">0{i+1}</span><p className="pc-eyebrow">{step.label}</p><p>{step.text}</p></article>)}</div><div className="pc-takeaway"><Compass size={30} strokeWidth={1}/><p>{story.takeaway}</p></div><div className="pc-sources"><div>{(story.sources||[story.source]).map(source=><a key={source.url} href={source.url} target="_blank" rel="noreferrer">Explore the evidence · {source.name}<ArrowUpRight size={15}/></a>)}</div><span>Map: Natural Earth · public domain</span></div><div className="pc-next"><button onClick={()=>{selectStory((index+1)%stories.length);window.scrollTo({top:0,behavior:'smooth'});}}>Follow another connection <ArrowRight size={19}/></button><button onClick={()=>selectStory(index)}><RotateCcw size={15}/> Try this mystery again</button></div></section>}
    <details className="pc-credits"><summary>Photography & credits</summary><p>Real images of the places. Images resized for display.</p>{[story.from,story.to].map(place=>{const c=credits[place.image];return <p key={place.image}><a href={c.source} target="_blank" rel="noreferrer">{place.name}</a> · {c.Artist.replace(/<[^>]*>/g,'')} · {c.LicenseUrl?<a href={c.LicenseUrl} target="_blank" rel="noreferrer">{c.LicenseShortName}</a>:c.LicenseShortName}</p>;})}</details>
    </main><footer className="pc-footer"><span>GEONAUTS GUIDE</span><p>Discover the connections.<a className="pc-about-link" href="?view=about">About & credits</a></p><span>ONE SHARED WORLD.</span></footer></div>;
}

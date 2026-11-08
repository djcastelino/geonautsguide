import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import rounds from '../data/world-quiz.json';
import './WorldQuiz.css';

export default function WorldQuiz({ onHome }) {
  const [revealed, setRevealed] = useState(false);
  const [index, setIndex] = useState(0);
  const round = rounds[index];
  const finished = index === rounds.length - 1;

  function advance() {
    setRevealed(false);
    setIndex((index + 1) % rounds.length);
  }

  return <div className="tt-page world-quiz">
    <header className="tt-header">
      <button className="tt-brand" onClick={onHome}><Compass size={30} strokeWidth={1.2}/><span>GEONAUTS<small>GUIDE</small></span></button>
      <button className="tt-home" onClick={onHome}><ArrowLeft size={15}/> Back to the guide</button>
    </header>
    <main className="world-main">
      <p className="tt-eyebrow">05 / URBAN DESIGN</p>
      <h1>How <em>cities work</em></h1>
      <p>Why did they build it this way? Look closely at {rounds.length} cities and discover the thinking behind their designs.</p>
      <section className="world-round" aria-label="City design story">
        <figure>
          <img key={round.image} src={round.image} alt={revealed ? round.name : round.clue}/>
          <figcaption>CITY {index + 1} / {rounds.length}</figcaption>
        </figure>
        <div className="world-panel" aria-live="polite">
          {revealed ? <>
            <p className="tt-eyebrow">{round.city}</p>
            <h2>{round.name}</h2>
            <p><strong>{round.choices[round.correct]}</strong></p>
            <p>{round.explanation}</p>
            <p className="world-credit">Photo by {round.credit} · {round.license} · Sized for display</p>
            <a href={round.url} target="_blank" rel="noreferrer">Read about the design <ArrowUpRight size={14}/></a>
            <a href={round.photoUrl} target="_blank" rel="noreferrer">Original photo</a>
            <a href={round.licenseUrl} target="_blank" rel="noreferrer">{round.license} licence</a>
            <button onClick={advance}>{finished ? 'Back to the first city' : 'Next city'} <ArrowRight size={16}/></button>
          </> : <>
            <p className="tt-eyebrow">{round.city}</p>
            <h2>{round.question}</h2>
            <p>{round.clue}</p>
            <div className="world-choices">
              {round.choices.map(choice => (
                <button key={choice} onClick={() => setRevealed(true)}>{choice}</button>
              ))}
            </div>
            <button className="world-reveal" onClick={() => setRevealed(true)}>Reveal the explanation <ArrowRight size={16}/></button>
          </>}
        </div>
      </section>
    </main>
    <footer className="tt-footer"><span>GEONAUTS GUIDE</span><a href="?view=about">About & credits</a></footer>
  </div>;
}

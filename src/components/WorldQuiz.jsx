import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Globe, Orbit } from 'lucide-react';
import rounds from '../data/world-quiz.json';
import './WorldQuiz.css';

export default function WorldQuiz({ onHome }) {
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const round = rounds[index];
  const answer = answers[index];
  const revealed = answer !== undefined;
  const finished = index === rounds.length - 1;
  const score = answers.filter((value, position) => value === rounds[position].earth).length;

  function advance() {
    if (finished) {
      setAnswers([]);
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  return <div className="tt-page world-quiz">
    <header className="tt-header">
      <button className="tt-brand" onClick={onHome}><Compass size={30} strokeWidth={1.2}/><span>GEONAUTS<small>GUIDE</small></span></button>
      <button className="tt-home" onClick={onHome}><ArrowLeft size={15}/> Back to the guide</button>
    </header>
    <main className="world-main">
      <p className="tt-eyebrow">05 / LANDSCAPES FROM SPACE</p>
      <h1>Earth or <em>another world?</em></h1>
      <p>Look closely at the landscape. Where do you think it is?</p>
      <section className="world-round" aria-label="Landscape challenge">
        <figure>
          <img key={round.image} src={round.image} alt={revealed ? round.name : round.clue}/>
          <figcaption>CHALLENGE {index + 1} / {rounds.length}</figcaption>
        </figure>
        <div className="world-panel" aria-live="polite">
          {revealed ? <>
            <p className="tt-eyebrow">{answer === round.earth ? 'CORRECT' : 'THE REVEAL'} · {round.earth ? 'EARTH' : 'ANOTHER WORLD'}</p>
            <h2>{round.name}</h2>
            <p>{round.explanation}</p>
            <p className="world-credit">{round.type} · {round.credit}</p>
            <a href={round.url} target="_blank" rel="noreferrer">Original image & science <ArrowUpRight size={14}/></a>
            {finished && <p><strong>Final score {score} / {rounds.length}</strong></p>}
            <button onClick={advance}>{finished ? 'Play again' : 'Next landscape'} <ArrowRight size={16}/></button>
          </> : <>
            <p className="tt-eyebrow">LOOK CLOSER</p>
            <h2>Where are we?</h2>
            <p>{round.clue}</p>
            <div className="world-choices">
              <button onClick={() => setAnswers([...answers, true])}><Globe size={20}/> Earth</button>
              <button onClick={() => setAnswers([...answers, false])}><Orbit size={20}/> Another world</button>
            </div>
          </>}
        </div>
      </section>
    </main>
    <footer className="tt-footer"><span>GEONAUTS GUIDE</span><a href="?view=about">About & credits</a></footer>
  </div>;
}

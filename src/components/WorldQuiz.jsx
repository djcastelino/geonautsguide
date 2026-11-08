import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import rounds from '../data/world-quiz.json';
import './WorldQuiz.css';

export default function WorldQuiz({ onHome }) {
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const round = rounds[index];
  const answer = answers[index];
  const revealed = answer !== undefined;
  const finished = index === rounds.length - 1;
  const score = answers.filter((value, position) => value === rounds[position].correct).length;

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
      <p className="tt-eyebrow">05 / THE CITY DESIGN QUIZ</p>
      <h1>How does <em>this city work?</em></h1>
      <p>Five cities. Look closely and figure out why each one built it this way.</p>
      <section className="world-round" aria-label="City design challenge">
        <figure>
          <img key={round.image} src={round.image} alt={revealed ? round.name : round.clue}/>
          <figcaption>CHALLENGE {index + 1} / {rounds.length}</figcaption>
        </figure>
        <div className="world-panel" aria-live="polite">
          {revealed ? <>
            <p className="tt-eyebrow">{answer === round.correct ? 'CORRECT' : 'THE REVEAL'}</p>
            <h2>{round.name}</h2>
            <p><strong>{round.choices[round.correct]}</strong></p>
            <p>{round.explanation}</p>
            <p className="world-credit">Photo by {round.credit} · {round.license}</p>
            <a href={round.url} target="_blank" rel="noreferrer">Read about the design <ArrowUpRight size={14}/></a>
            <a href={round.photoUrl} target="_blank" rel="noreferrer">Original photo</a>
            <a href={round.licenseUrl} target="_blank" rel="noreferrer">{round.license} licence</a>
            {finished && <p><strong>Final score {score} / {rounds.length}</strong></p>}
            <button onClick={advance}>{finished ? 'Play again' : 'Next city'} <ArrowRight size={16}/></button>
          </> : <>
            <p className="tt-eyebrow">{round.city}</p>
            <h2>{round.question}</h2>
            <p>{round.clue}</p>
            <div className="world-choices">
              {round.choices.map((choice, position) => (
                <button key={choice} onClick={() => setAnswers([...answers, position])}>{choice}</button>
              ))}
            </div>
          </>}
        </div>
      </section>
    </main>
    <footer className="tt-footer"><span>GEONAUTS GUIDE</span><a href="?view=about">About & credits</a></footer>
  </div>;
}

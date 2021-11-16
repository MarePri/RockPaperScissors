import React, {useState, useEffect} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';

const choices = [
  {id: 1, name:'rock', component: Rock},
  {id: 2, name:'paper', component: Paper},
  {id: 3, name:'scissors', component: Scissors}
  

];

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, []);

  function handleUserChoice(choice) {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice)
  }


  return (
    <div className="app">
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        <div className="wins-losses">
          <div className="wins">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">0</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      {/* <div className="game-state"></div> */}

      <div className="choices">

        <div>You</div>
        <div />
        <div>Computer</div>


        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper"onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors"onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}

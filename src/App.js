import './App.css';
import Title from './components/title';
import Scoreboard from './components/scoreboard';
import Board from './components/board'
import { useState } from 'react';
import bulbasaur from './images/bulbasaur.png';
import nidosaur from './images/nidosaur.png';
import persian from './images/persian.png';
import arcticuno from './images/arcticuno.png';
import sneasel from './images/sneasel.png';
import moltres from './images/moltres.png';
import charizard from './images/charizard.png';
import pikachu from './images/pikachu.png';
import zapdos from './images/zapdos.png';
import absol from './images/absol.png';
import lapras from './images/lapras.png';
import krokorok from './images/krokorok.png'



function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);
  const [cards, setCards] = useState([{name: 'Sneasel', source: sneasel},{name: 'Moltres', source: moltres},{name: 'Charizard', source:charizard},{name: 'Pikachu', source:pikachu},{name: 'Zapdos', source:zapdos},{name: 'Absol', source:absol},{name: 'Lapras', source:lapras},{name: 'Krokorok', source:krokorok},{name: 'Bulbasaur', source:bulbasaur},{name: 'Nidosaur', source:nidosaur},{name: 'Persian', source:persian},{name: 'Arcticuno', source:arcticuno}]);
  const [clicked, setClicked] = useState([]);


  return (
    <div className="App">
      <Title title="Welcome to the Memory Game" description="Click All the Cards Without Repeating to Win"></Title>
      <Scoreboard score={score} highscore={highscore}></Scoreboard>
      <Board cards={cards} clickEvent={function onclick(source){
        if (clicked.length!==0 && clicked.includes(source)){
          if (score>highscore){
            setHighScore(score);
          }
          setScore(0)
          setClicked([]);
        }
        else {
          setScore(score+1);
          let temp = [...clicked];
          temp.push(source);
          setClicked(temp);
        }
        setCards(shuffle([...cards]));
        return;
        
      }
    }></Board>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import Line from './line'
import Solution from './solution';

function Board({solution}) {
    const [gameOver, endGame] = useState('gameOn')

    var lines = []
    for (let i=0; i<11; i++) {
    lines.push(<Line id={i.toString()} key={i.toString()} solution={solution} gameOver={gameOver} endGame={endGame}/>)
    }
    
    return (
      <div className="Board">
       {lines}
       <Solution solution={solution} gameOver={gameOver} endGame={endGame}/>
      </div>
    );
  }

  export default Board
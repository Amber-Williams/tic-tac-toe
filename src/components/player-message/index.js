
import React from 'react';
import './index.css';

const PlayerMessage = ({ game }) => (
  <div className="PlayerMessage">
    { game.winner && game.winner !== 'TIE'
        ? <h2 className="PlayerMessage__winning-message">{`${game.winner} has won!`}</h2> 
        : game.winner && game.winner === 'TIE' 
        ? <h2>The game tied</h2>
        : <h2>Player {game.currentPlayer}</h2>
    }
  </div>
)

export default PlayerMessage
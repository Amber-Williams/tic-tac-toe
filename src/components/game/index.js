import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import Board from './../board/index'
import PlayerMessage from './../player-message'

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

export const Game = () => {
  const boardLayout = useSelector(selectBoard)
  const game = useSelector(selectGame)

  return (
    <div className="Game">
      <h1> Tic - Tac - Toe</h1>
      <Board layout={boardLayout}/>
      <PlayerMessage game={game}/>
    </div>
  )
}
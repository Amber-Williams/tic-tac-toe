import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions/moves';

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

const BoardCell = ({ cell, rowIndex, columnIndex }) => {
  const content = cell ? cell : null
  const game = useSelector(selectGame)
  const dispatch = useDispatch()

  const onSelectCell = () => {
    if (!content && !game.winner) {
      dispatch(
        selectCell(
          game.currentPlayer,
          rowIndex,
          columnIndex
        )
      )
    } 
    else if (content) {
      alert('spots already taken! Choose an unused spot')
    }
    
  }


  return <div className="Board__cell border col-3" onClick={onSelectCell}>{content}</div>
}

const BoardRow = ({ row, rowIndex }) => {
  const Row = row.map((cell, i) => (<BoardCell cell={cell} rowIndex={rowIndex} columnIndex={i} key={i}/>))

  return (
    <div className="d-flex flex-row">
      { Row }
    </div>
  )
}

const Board = ({ layout }) => {
  return layout.map((row, i) => <BoardRow row={row} rowIndex={i} key={i}/>)
}

export const Game = () => {
  const boardLayout = useSelector(selectBoard)
  const game = useSelector(selectGame)

  return (
    <div className="Board">
      Board: <Board layout={boardLayout}/>
      { game.winner 
        ? <div>{`${game.winner} has won!`}</div> 
        : <div>Player {game.currentPlayer}</div>
      }
      
    </div>
  )
}


// break down problem
  // make layout 
  // make cell clickable
  // when clicked it puts player's X/O in position
  // apply rules, can't click if already there
  // check after each move if won
  // style
  // tests


// add bootstrap style


// ran into need to use redux thunk to access the state store inside the SELECT_CELL action

// wrote function to scan diagnals, rows and columns for player win

// moved unility functions to helper functions file

// moved reducer states into constants file
import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions/moves';

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

  return (
    <div className="Board__cell" onClick={onSelectCell}>
      <p className="Board__player">{content}</p>
    </div>
  )
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
  const board = layout.map((row, i) => <BoardRow row={row} rowIndex={i} key={i}/>)

  return (
    <div className="Board">
      {board}
    </div>
  )
}

export default Board
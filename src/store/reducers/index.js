import { combineReducers } from "redux";
import { SELECT_CELL } from "../actions/moves";

// TODO: move default state 
// TODO: move these into helper functions file
export const createBoard = (i) =>
  Array(i)
    .fill(null)
    .map(_ =>
      Array(i)
        .fill(null)
    )

const checkIfWon = (action) => {
  const currentBoard = createCurrentBoard(action)
  const player = action.currentPlayer

  // First checks board diagonals if player has complete line, then checks rows and columns 
  let firstDiagonal = true
  let secondDiagonal = true
  for (let j = 0; j < 3; j++) {     
      firstDiagonal = firstDiagonal && (currentBoard[j][j] === player)
      secondDiagonal = secondDiagonal && (currentBoard[2-j][j] === player)
  }
  if (firstDiagonal || secondDiagonal) {
      return true
  } 

  for (let k = 0; k < 3; k++) {
    let rows = true
    let columns = true
      for (let j = 0; j < 3; j++) {       
          rows = rows && (currentBoard[k][j] === player)
          columns = columns && (currentBoard[j][k] === player)
      }
      if (rows || columns) {
          return true
      }    
  }

  return false
}


const createCurrentBoard = (action) => {
  const newBoard = JSON.parse(JSON.stringify(action.board))
  newBoard[action.row][action.col] = action.currentPlayer
  return newBoard
}

export const board = (state = createBoard(3), action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return createCurrentBoard(action)
    }
    default: {
      return state
    }
  }
}

export const game = (state = { currentPlayer: 'X', winner: null }, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      const isWin = checkIfWon(action)


      return {
        ...state,
        winner: isWin ? action.currentPlayer : null,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  board,
  game
})

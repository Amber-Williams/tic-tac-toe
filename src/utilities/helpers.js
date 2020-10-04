export const createBoard = (i) =>
  Array(i)
    .fill(null)
    .map(_ =>
      Array(i)
        .fill(null)
    )

export const checkIfWon = (action) => {
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

export const checkIfTie = (board) => {
  const flatBoard = board.flat()
  return !flatBoard.includes(null)
}

export const createCurrentBoard = (action) => {
  const newBoard = JSON.parse(JSON.stringify(action.board))
  newBoard[action.row][action.col] = action.currentPlayer
  return newBoard
}
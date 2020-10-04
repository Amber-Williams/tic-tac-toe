import * as Helpers from './helpers'
import * as Actions from './../store/actions/moves'

describe('createBoard', () => {
  it('should regenerate a square 2D array of provided length', () => {
    Array(10).fill().map((_, i) => {
      const board = Helpers.createBoard(i)
      expect(board).toHaveLength(i)
      board.forEach(row => expect(row).toHaveLength(i))
    })
  })
})

describe('createCurrentBoard', () => {
  it('should update board with new move', () => {
    const expected = [ [ 'X', null, null ], [ null, null, null ], [ null, null, null ] ]
    const action = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0,
      board: Helpers.createBoard(3)
    }

    const newBoard = Helpers.createCurrentBoard(action)
    expect(newBoard).toEqual(expected)
  })
})

describe('checkIfWon', () => {
  it('should win if first diagonal is connected', () => {
    const firstDiagonalWin = [ [ null, null, null ], [ null, 'X', null ], [ null, null, 'X' ] ]
    const action = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0,
      board: firstDiagonalWin
    }

    const newBoard = Helpers.checkIfWon(action)
    expect(newBoard).toEqual(true)
  })

  it('should win if second diagonal is connected', () => {
    const secondDiagonalWin = [ [ null, null, null ], [ null, 'X', null ], [ 'X', null, null ] ]
    const action = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 2,
      board: secondDiagonalWin
    }

    const newBoard = Helpers.checkIfWon(action)
    expect(newBoard).toEqual(true)
  })

  it('should win if row is connected', () => {
    const rowWin = [ [ null, 'X', 'X' ], [ null, null, null ], [ null, null, null ] ]
    const action = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0,
      board: rowWin
    }

    const newBoard = Helpers.checkIfWon(action)
    expect(newBoard).toEqual(true)
  })

  it('should win if row is connected', () => {
    const columnWin = [ [ null, null, null ], [ 'X', null, null ], [ 'X', null, null ] ]
    const action = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0,
      board: columnWin
    }

    const newBoard = Helpers.checkIfWon(action)
    expect(newBoard).toEqual(true)
  })
})


describe('checkIfTie', () => {
  it('should return false when there are still moves on the board', () => {
    const board = Helpers.createBoard(3)
    const isTie = Helpers.checkIfTie(board)
    
    expect(isTie).toEqual(false)
  })

  it('should return true when there are no more moves on the board', () => {
    const board = Array(3).fill('Player')
                          .map(_ =>
                            Array(3)
                              .fill('Player')
                          )
                        
    const isTie = Helpers.checkIfTie(board)
    
    expect(isTie).toEqual(true)
  })
})
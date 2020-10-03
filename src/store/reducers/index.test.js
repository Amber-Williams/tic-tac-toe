import { board, game } from "."
import * as Helpers from '../../utilities/helpers'
import { defaultState } from '../../utilities/constants'
import * as Actions from '../actions/moves'

describe('createBoard', () => {
  it('should regenerate a square 2D array of provided length', () => {
    Array(10).fill().map((_, i) => {
      const board = Helpers.createBoard(i)
      expect(board).toHaveLength(i)
      board.forEach(row => expect(row).toHaveLength(i))
    })
  })
})

describe('board', () => {
  it('should create a default board state of length 3', () => {
    const expectedState = Helpers.createBoard(3)
    const result = board(undefined, {})

    expect(result).toEqual(expectedState)
  })

  it('should update a co-ordinate to match the currentPlayer', () => {
    const state = defaultState.board
    const result = board(state, Actions.selectCell('X', 0, 0))

    state[0][0] = 'X'

    expect(result).toEqual(state)
  })
})

describe('game', () => {
  it('should create a default game state with current player and no winner', () => {
    const expectedState = {
      currentPlayer: 'X',
      winner: null
    }
    const result = game(undefined, {})

    expect(result).toEqual(expectedState)
  })

  it('should update a co-ordinate to match the currentPlayer', () => {
    const currentPlayer = defaultState.game.currentPlayer
    
    const opponent = currentPlayer === 'X' ? 'O' : 'X'

    const stateAfterFirstPlay = defaultState.game
    stateAfterFirstPlay.currentPlayer = opponent

    const stateAfterSecondPlay = defaultState.game
    
    const firstPlay = game(defaultState.game, Actions.selectCell(currentPlayer, 0, 0))
    const secondPlay = game(stateAfterFirstPlay, Actions.selectCell(opponent, 0, 0))

    expect(firstPlay).toEqual(stateAfterFirstPlay)
    expect(secondPlay).toEqual(stateAfterSecondPlay)
  })
})

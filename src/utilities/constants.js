import * as Helpers from './helpers';

export const defaultState = {
  game: { currentPlayer: 'X', winner: null },
  board: Helpers.createBoard(3)
}
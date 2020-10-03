import { combineReducers } from "redux";
import { SELECT_CELL } from "../actions/moves";
import * as Helpers from '../../utilities/helpers';
import { defaultState } from '../../utilities/constants';

export const board = (state = defaultState.board, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return Helpers.createCurrentBoard(action)
    }
    default: {
      return state
    }
  }
}

export const game = (state = defaultState.game, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      const isWin = Helpers.checkIfWon(action)
      let isTie;

      if (!isWin) {
        const currentBoard = Helpers.createCurrentBoard(action);
        isTie = Helpers.checkIfTie(currentBoard)
      }
  
      return {
        ...state,
        winner: isWin ? action.currentPlayer : isTie ? 'TIE': null,
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

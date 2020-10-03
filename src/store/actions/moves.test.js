import * as Actions from './moves'
import * as Helpers from './../../utilities/helpers.js'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { defaultState } from './../../utilities/constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0,
      board: Helpers.createBoard(3)
    }

    const store = mockStore(defaultState)

    expect(store.dispatch(Actions.selectCell('X', 0, 0))).toEqual(expectedAction)

  })
})

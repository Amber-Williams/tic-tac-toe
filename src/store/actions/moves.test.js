import * as Actions from './moves'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const defaultState = {
  
}

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0
    }

    const store = mockStore({ todos: [] })

    const result = Actions.selectCell('X', 0, 0)
    expect(result).toEqual(expectedAction)
  })
})

export const SELECT_CELL = 'SELECT_CELL'

export function selectCell(currentPlayer, row, col) {
  return (dispatch, getState) => {
    const { board } = getState();

      return dispatch({
        type: SELECT_CELL,
        currentPlayer,
        row,
        col,
        board
      })
    }
}

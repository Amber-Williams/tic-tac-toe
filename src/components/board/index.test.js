import React from 'react';
import { render } from '@testing-library/react';
import Board from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';
import * as Helpers from './../../utilities/helpers'

test('renders Board cells', () => {
  render(<Provider store={configureStore()}><Board layout={Helpers.createBoard(3)} /></Provider>);
  const cells = document.querySelectorAll('.Board__cell')
  expect(cells.length).toBe(9);
});

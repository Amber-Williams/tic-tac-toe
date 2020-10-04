import React from 'react';
import { render, screen } from '@testing-library/react';
import { Game } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';

test('renders title text', () => {
  render(<Provider store={configureStore()}><Game /></Provider>);
  const titleText = screen.getByText(/Tic - Tac - Toe/i);
  expect(titleText).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Game } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';

test('renders Board text', () => {
  render(<Provider store={configureStore()}><Game /></Provider>);
  const boardText = screen.getByText(/Board/i);
  expect(boardText).toBeInTheDocument();
});

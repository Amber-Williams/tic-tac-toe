import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayerMessage from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';

const gameNextTurn = {
  currentPlayer: 'X',
  winner: null
}

const gameTied = {
  currentPlayer: 'X',
  winner: 'TIE'
}

const gameWon = {
  currentPlayer: 'X',
  winner: 'X'
}

test('renders PlayerMessage with next turn', () => {
  render(<Provider store={configureStore()}><PlayerMessage game={gameNextTurn} /></Provider>);
  const titleText = screen.getByText(/Player X/i);
  expect(titleText).toBeInTheDocument();
});


test('renders PlayerMessage with tie', () => {
  render(<Provider store={configureStore()}><PlayerMessage game={gameTied} /></Provider>);
  const titleText = screen.getByText(/The game tied/i);
  expect(titleText).toBeInTheDocument();
});

test('renders PlayerMessage with player won', () => {
  render(<Provider store={configureStore()}><PlayerMessage game={gameWon} /></Provider>);
  const titleText = screen.getByText(/X has won!/i);
  expect(titleText).toBeInTheDocument();
});

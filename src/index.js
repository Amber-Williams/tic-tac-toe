import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import { Game } from './components/board'
import configureStore from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

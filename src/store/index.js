import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from './reducers'

export default function configureStore(initialState) {
  const middlewareEnhancer = applyMiddleware( thunkMiddleware)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, initialState, composedEnhancers)

  return store
}

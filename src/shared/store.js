/* global window */

import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logErrors from './data/errors'

// Initialize devtools if available and on the client
const hasWindow = typeof window === 'object'
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (hasWindow && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// Returns a store and accepts an initial state
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, logErrors))
  )

  return store
}

export default configureStore

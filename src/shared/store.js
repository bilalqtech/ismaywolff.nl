/* global window */

import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// initialize devtools if on the client
const devTools = typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f

// returns a store and accepts an initial state
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk), devTools)
  )

  return store
}

export default configureStore

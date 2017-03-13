import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// returns a store and accepts an initial state
const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}

export default configureStore

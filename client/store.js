import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

// returns a store and accepts an initial state
const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, preloadedState, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  // start saga watchers
  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore

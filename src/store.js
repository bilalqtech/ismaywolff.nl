import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

// returns a store and accepts an initial state
const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ))

  // start saga watchers
  sagaMiddleware.run(rootSaga)

  // enable hot module reloading, will be stripped during production
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./components/app', () => {
      const nextRootReducer = require('./components/app').App
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore

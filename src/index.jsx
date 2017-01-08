// polyfills and third party libs
import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'

// import dependencies
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { App } from './components/app'
import configureStore from './store'

// globally scoped css
import './index.css'

// create empty store
const store = configureStore({})

// abstract render for hot reloading
const renderWithHotReload = AppComponent => {
  render(
    <AppContainer>
      <AppComponent store={store} />
    </AppContainer>,
    document.getElementById('app')
  )
}

// initial render
renderWithHotReload(App)

// enable hot reloading, will be stripped in production
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').App
    renderWithHotReload(NextApp)
  })
  module.hot.accept('./rootReducer', () => {
    const nextRootReducer = require('./rootReducer').default
    store.replaceReducer(nextRootReducer)
  })
}

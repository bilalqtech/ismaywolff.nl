/* eslint-disable import/first */

// globally scoped css
import 'normalize.css'
import './index.css'

// import dependencies
import load from 'load-script'
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { App } from './components/app'
import configureStore from './store'

// feature tests
const hasFetch = 'fetch' in window
const hasPromise = 'Promise' in window
const hasObjectAssign = typeof Object.assign === 'function'

// boots the app, shows errors if there were any
function boot(error) {
  if (error) {
    render(
      <div>{error.message}</div>,
      document.getElementById('app')
    )
  } else {
    const store = configureStore({})
    const history = createHistory()

    import('./services/analytics')
      .then(analytics => analytics.init(history))

    render(
      <App store={store} history={history} />,
      document.getElementById('app')
    )
  }
}

// checks if the client supports all necessary features, and polyfills them if necessary
if (hasFetch && hasPromise && hasObjectAssign) {
  boot()
} else {
  load('https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch,Object.assign,Promise', boot)
}

/* eslint-disable import/first */

// Globally scoped css
import 'normalize.css'
import './index.css'

import load from 'load-script'
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import configureStore from '../shared/store'
import { App, AppWithErrors } from './components/app'

// Feature tests
const hasFetch = 'fetch' in window
const hasPromise = 'Promise' in window
const hasObjectAssign = typeof Object.assign === 'function'

// Boots the app, shows errors if there were any
function boot(error) {
  const history = createHistory()
  import('../shared/services/analytics').then(analytics => analytics.init(history))

  if (error) {
    render(<AppWithErrors error={error} />, document.getElementById('app'))
  } else {
    // Hydrate store
    const preloadedState = window.preloadedState
    delete window.preloadedState
    const store = configureStore(preloadedState)

    render(<App store={store} history={history} />, document.getElementById('app'))
  }
}

// Checks if the client supports all necessary features, and polyfills them if necessary
if (hasFetch && hasPromise && hasObjectAssign) {
  boot()
} else {
  load('https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch,Object.assign,Promise', boot)
}

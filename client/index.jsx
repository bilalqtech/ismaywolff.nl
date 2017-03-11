// polyfills and third party libs
import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'

// globally scoped css
import './index.css'

// import dependencies
import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'
import configureStore from './store'

// create empty store
const store = configureStore({})

render(
  <App store={store} />,
  document.getElementById('app')
)

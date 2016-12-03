// load polyfills
import 'babel-polyfill'

// import dependencies
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import { AppContainer } from 'react-hot-loader'

// render
render(
  <AppContainer><Root /></AppContainer>,
  document.getElementById('app')
)

// enable hot reloading
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(
      <AppContainer><Root /></AppContainer>,
      document.getElementById('app')
    )
  })
}

import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { render } from 'rapscallion'
import routes from '../shared/routes'
import configureStore from '../shared/store'
import { logError } from '../shared/services/raven'
import { App } from './components/app'
import renderStream from './renderStream'
import getNeeds from './getNeeds'

function handleNewUser(req, res) {
  const store = configureStore({})
  const needs = getNeeds(routes, req.url, store)

  Promise.all(needs)
    .then(() => {
      const sheet = new ServerStyleSheet()
      const appRenderer = render(sheet.collectStyles(<App location={req.url} store={store} />))
      const renderer = renderStream({ appRenderer, sheet, store })

      res.setHeader('Cache-Control', 'public, max-age=0')
      renderer.toStream().pipe(res)
    })
    .catch(error => {
      logError(error)
      res.status(500)
      res.end()
    })
}

export default handleNewUser

import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { render } from 'rapscallion'
import routes from '../shared/routes'
import configureStore from '../shared/store'
import { logError } from '../shared/services/raven'
import { App } from './components/app'
import getResponseRenderer from './getResponseRenderer'
import getNeeds from './getNeeds'

function handleRender(req, res) {
  const store = configureStore({})
  const needs = getNeeds(routes, req.url, store)

  Promise.all(needs)
    .then(() => {
      const sheet = new ServerStyleSheet()
      const appRenderer = render(sheet.collectStyles(<App location={req.url} store={store} />))
      const responseRenderer = getResponseRenderer({ appRenderer, sheet, store })

      res.setHeader('Cache-Control', 'public, max-age=0')
      responseRenderer.toStream().pipe(res)
    })
    .catch(error => {
      logError(error, { extra: { req } })
      res.status(500)
      res.end()
    })
}

export default handleRender

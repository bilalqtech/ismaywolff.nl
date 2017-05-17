import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import routes from '../shared/routes'
import configureStore from '../shared/store'
import { logError } from '../shared/services/raven'
import renderStatic from './renderStatic'
import { App } from './components/app'
import getNeeds from './getNeeds'

function handleBots(req, res) {
  const store = configureStore({})
  const needs = getNeeds(routes, req.url, store)

  Promise.all(needs)
    .then(() => {
      const context = {}
      const sheet = new ServerStyleSheet()
      const html = renderToString(
        sheet.collectStyles(<App location={req.url} context={context} store={store} />)
      )
      const styledComponentsCss = sheet.getStyleTags()
      const helmet = Helmet.renderStatic()
      const title = helmet.title.toString()
      const meta = helmet.meta.toString()
      const preloadedState = store.getState()

      if (context.url) {
        res.status(302)
        res.setHeader('Location', context.url)
        res.end()
      } else {
        res.setHeader('Cache-Control', 'public, max-age=0')
        res.send(renderStatic({ html, title, meta, styledComponentsCss, preloadedState }))
      }
    })
    .catch(error => {
      logError(error)
      res.status(500)
      res.end()
    })
}

export default handleBots

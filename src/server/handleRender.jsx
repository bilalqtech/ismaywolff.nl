import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import routes from '../shared/routes'
import configureStore from '../shared/store'
import { logError } from '../shared/services/raven'
import renderFullPage from './renderFullPage'
import getNeeds from './getNeeds'
import { App } from './components/app'

function handleRender(req, res) {
  const context = {}
  const sheet = new ServerStyleSheet()
  const store = configureStore({})
  const needs = getNeeds(routes, req.url, store)

  Promise.all(needs)
    .then(() => {
      const html = renderToString(
        sheet.collectStyles(<App location={req.url} context={context} store={store} />)
      )

      const styledComponentsCss = sheet.getStyleTags()
      const helmet = Helmet.renderStatic()
      const title = helmet.title.toString()
      const meta = helmet.meta.toString()
      const preloadedState = store.getState()

      if (context.url) {
        // Redirect if react-router wants to redirect
        res.status(302)
        res.setHeader('Location', context.url)
        res.end()
      } else {
        // Send a page with any fetched data
        res.setHeader('Cache-Control', 'public, max-age=0')
        res.send(renderFullPage({ html, title, meta, styledComponentsCss, preloadedState }))
      }
    })
    .catch(error => {
      // If anything fails while fetching log it and send a server error
      logError(error, { extra: { req } })
      res.status(500)
      res.end()
    })
}

export default handleRender

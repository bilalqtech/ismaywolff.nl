import { matchPath } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import routes from '../shared/routes'
import configureStore from '../shared/store'
import renderFullPage from './renderFullPage'
import { App } from './components/app'

function handleRender(req, res) {
  const context = {}
  const sheet = new ServerStyleSheet()
  const store = configureStore({})
  const actions = []

  // gather all async data needs for the requested route
  routes.some(route => {
    const match = matchPath(req.url, route)

    if (match && route.component && route.component.getNeeds) {
      const needs = route.component.getNeeds()
      needs.map(need => actions.push(need(store.dispatch)))
    }

    return match
  })

  // render after resolving all necessary data
  Promise.all(actions).then(() => {
    const html = renderToString(
      sheet.collectStyles(<App location={req.url} context={context} store={store} />)
    )

    const css = sheet.getStyleTags()
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
      res.send(renderFullPage({ html, title, meta, css, preloadedState }))
    }
  })
}

export default handleRender

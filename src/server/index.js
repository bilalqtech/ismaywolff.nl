import 'isomorphic-fetch'
import express from 'express'
import Raven from 'raven'
import { url, config, logError } from '../shared/services/raven'
import { PUBLIC_PATH, PORT } from './constants'
import handleRender from './handleRender'
import renderStatic from './renderStatic'

/**
 * Error tracking
 */

if (process.env.NODE_ENV === 'production') {
  Raven.config(url, config).install()
}

/**
 * Server
 */

const server = express()

server.disable('x-powered-by')
server.use(
  express.static(PUBLIC_PATH, {
    maxAge: '1y'
  })
)

/**
 * Server render app
 */

server.use(handleRender)

/**
 * Custom error logging middleware
 */

// eslint-disable-next-line no-unused-vars
server.use((error, req, res, next) => {
  logError(error)
  res.status(500)
  res.setHeader('Cache-Control', 'public, max-age=0')
  res.send(renderStatic())
})

/**
 * Start listening
 */

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${PORT}`)
})

import 'isomorphic-fetch'
import express from 'express'
import Raven from 'raven'
import { url, config, logError } from '../shared/services/raven'
import { PUBLIC_PATH, PORT } from './constants'
import handleRender from './handleRender'

// Initialize error tracking
Raven.config(url, config).install()

// Initialize server
const server = express()

// Don't identify as an express server
server.disable('x-powered-by')

// Serve static assets
server.use(
  express.static(PUBLIC_PATH, {
    maxAge: '1y'
  })
)

// Serve a server-side render of the app
server.use(handleRender)

// Log any uncaught errors
server.use((error, req, res) => {
  logError(error, { extra: { req } })
  res.status(500)
  res.end()
})

// Listen for incoming requests
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${PORT}`)
})

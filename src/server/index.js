import 'isomorphic-fetch'
import express from 'express'
import Raven from 'raven'
import cookieParser from 'cookie-parser'
import { url, config, logError } from '../shared/services/raven'
import { PUBLIC_PATH, PORT } from './constants'
import handleRender from './handleRender'

// Initialize error tracking
const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  Raven.config(url, config).install()
}

// Initialize server
const server = express()

// Don't identify as an express server
server.disable('x-powered-by')

// Parse any cookies in request
server.use(cookieParser())

// Serve static assets
server.use(
  express.static(PUBLIC_PATH, {
    maxAge: '1y'
  })
)

// Serve a server-side render of the app
server.use(handleRender)

// Log any uncaught errors
// eslint-disable-next-line no-unused-vars
server.use((error, req, res, next) => {
  logError(error)
  res.status(500)
  res.end()
})

// Listen for incoming requests
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${PORT}`)
})

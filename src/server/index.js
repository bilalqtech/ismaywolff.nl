import 'isomorphic-fetch'
import path from 'path'
import useragent from 'useragent'
import express from 'express'
import Raven from 'raven'
import { url, config, logError } from '../shared/services/raven'
import { PUBLIC_PATH, PORT } from './constants'
import handleBots from './handleBots'

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
 * Server render for bots, static html for humans
 */

server.get('*', (req, res) => {
  const agent = useragent.lookup(req.headers['user-agent'])
  const isBot = agent.device && agent.device.toJSON().family === 'Spider'

  if (isBot) {
    handleBots(req, res)
  } else {
    res.setHeader('Cache-Control', 'public, max-age=0')
    res.sendFile(path.join(PUBLIC_PATH, 'static.html'))
  }
})

/**
 * Custom error logging middleware
 */

// eslint-disable-next-line no-unused-vars
server.use((error, req, res, next) => {
  logError(error)
  res.status(500)
  res.setHeader('Cache-Control', 'public, max-age=0')
  res.sendFile(path.join(PUBLIC_PATH, 'static.html'))
})

/**
 * Start listening
 */

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${PORT}`)
})

import 'isomorphic-fetch'
import express from 'express'
import { PUBLIC_PATH, PORT } from './constants'
import handleRender from './handleRender'

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

// Listen for incoming requests
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${PORT}`)
})

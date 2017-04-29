// polyfill fetch
import 'isomorphic-fetch'

// import dependencies
import express from 'express'
import { PUBLIC_PATH, PORT } from './constants'
import handleRender from './handleRender'

// initialize server
const server = express()

// don't identify as an express server
server.disable('x-powered-by')

// serve static assets
server.use(
  express.static(PUBLIC_PATH, {
    maxAge: '1y'
  })
)

// serve a server-side render of the app
server.use(handleRender)

// listen for incoming requests
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${PORT}`)
})

const path = require('path')
const express = require('express')
const mime = require('mime-types')

const app = express()

// sets max-age to 0 for html
const setCustomCacheControl = (res, assetPath) => {
  if (mime.lookup(assetPath) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

// don't identify as an express server
app.disable('x-powered-by')

// serve all static files from the /public folder
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: '1y',
    setHeaders: setCustomCacheControl
  })
)

// serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// listen on port 80
app.listen(80)

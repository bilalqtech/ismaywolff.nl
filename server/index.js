const path = require('path')
const express = require('express')
const mime = require('mime-types')

const app = express()

// sets max-age to 0 for html
const setCustomCacheControl = (res, path) => {
  if (mime.lookup(path) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

// serve all static files from the root folder
app.use(express.static(__dirname, {
  maxAge: '1y',
  setHeaders: setCustomCacheControl
}))

// don't identify as an express server
app.disable('x-powered-by')

// serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// listen on port 80
app.listen(80)

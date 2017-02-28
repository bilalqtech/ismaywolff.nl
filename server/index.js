const express = require('express')

const app = express()

// serve all static files in the project folder
app.use(express.static(__dirname), { maxAge: '1y' })

// don't identify as an express server
app.disable('x-powered-by')

// serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile('/index.html')
})

// listen on port 80
app.listen(80)

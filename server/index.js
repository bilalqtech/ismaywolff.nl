const express = require('express')

const app = express()

// serve all static files in the project folder
app.use(express.static(__dirname))

// serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile('/index.html')
})

// listen on port 80
app.listen(80)

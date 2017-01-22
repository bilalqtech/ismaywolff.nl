const express = require('express')

const app = express()

// serve index.html on the login route
app.get('/', (req, res) => {
  res.sendFile('/index.html')
})

// serve all static file in the project folder
app.use(express.static(__dirname))

// start the server on port 80
app.listen(80)

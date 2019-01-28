const os = require('os')
const path = require('path')
const express = require('express')
const _ = require('lodash')

const networkIP = _.chain(os.networkInterfaces())
  .values()
  .flatten()
  .find({ family: 'IPv4', internal: false })
  .get('address')
  .value() || '127.0.0.1'

const port = process.env.PORT || 5050

const app = express()

app.use('/build', express.static(path.join(__dirname, 'public', 'build')))
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))

app.get('*', function(request, response, next) {
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port)

console.log(`
  App running:
  - Local address: http://localhost:${port}
  - Network address: http://${networkIP}:${port}
`)

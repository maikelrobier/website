var os = require('os')
const path = require('path')
const express = require('express')
var _ = require('lodash')

var networkIP = _.chain(os.networkInterfaces())
  .values()
  .flatten()
  .find({ family: 'IPv4', internal: false })
  .get('address')
  .value() || '127.0.0.1'

const port = process.env.PORT

const app = express()

app.use(express.static(__dirname))

app.get('*', function(request, response, next) {
  response.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port)

console.log(`
  App running:
  - Local address: http://localhost:${port}
  - Network address: http://${networkIP}:${port}
`)

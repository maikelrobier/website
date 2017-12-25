const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(__dirname))

app.get('*', function(request, response, next) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT)

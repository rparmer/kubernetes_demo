const express = require('express')
const app = express()

app.use (function(req, res, next) {
    let data = ''
    req.setEncoding('utf8')
    req.on('data', function(chunk) {
       data += chunk
    })
    req.on('end', function() {
        req.body = data
        next()
    })
})

app.all('/', (req, res) => res.send(req.body))

app.listen(8080, () => console.log('Listening on port 8080'))

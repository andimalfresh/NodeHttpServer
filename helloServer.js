const http = require('http')
const port = process.env.PORT || 6666

const server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})

server.listen(port, function() {
    console.log ('Listening to port', port)
})

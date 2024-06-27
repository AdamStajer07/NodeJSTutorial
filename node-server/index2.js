const http = require('http')

const server = http.createServer((req, res) => {
    // req method GET POST PUT DELETE
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Home Page')
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('About Page')
    }
    else if (req.url == '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            firstName: 'Adam',
            lastName: 'Nowak'
        }))
    }
    else {
        res.writeHead(404)
        res.end('Page not found')
    }
})

server.listen(3000, () => {
    console.log('server running on port 3000')
})
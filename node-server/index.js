const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // const person = {
    //     firstName: 'Adam',
    //     lastName: 'Nowak'
    // }

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.end(JSON.stringify(person))

    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream('./index.html').pipe(res)
    // const html = fs.readFileSync('./index.html', 'utf-8')
    // res.end(html)
})

server.listen(3000, () => {
    console.log('server running on port 3000')
})
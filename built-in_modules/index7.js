const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream('./index7.txt', {
    encoding: 'utf-8',
    highWaterMark: 2
})

readableStream.pipe(gzip).pipe(fs.WriteStream('./index7write.txt.gz'))

const writeableStream = fs.createWriteStream('./index7write.txt')

readableStream.pipe(writeableStream)

// readableStream.on('data', (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })
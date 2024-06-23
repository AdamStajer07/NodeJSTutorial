const fs = require('fs/promises')

console.log('first')
fs.readFile('index5.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err))
console.log('second')

async function readFile() {
    try {
        const data = await fs.readFile('index5.txt', 'utf-8')
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}
// readFile()
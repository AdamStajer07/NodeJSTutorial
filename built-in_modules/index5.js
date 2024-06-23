const fs = require('fs')

console.log('first')
const fileContents = fs.readFileSync('./index5.txt', 'utf-8')
console.log(fileContents)

console.log('second')
// .readFile() is asynchronous
fs.readFile('./index5.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})
console.log('third')

fs.writeFileSync('./index5Write.txt', 'I like React!\n')
fs.writeFile('./index5Write.txt', 'And I like Tailwind', { flag: 'a' }, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('File written')
    }
})
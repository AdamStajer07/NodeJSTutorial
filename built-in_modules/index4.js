const buffer = new Buffer.from('Adam')

console.log(buffer)
console.log(buffer.toString())
buffer.write('Michal')
console.log(buffer.toString())
console.log(buffer.toJSON())
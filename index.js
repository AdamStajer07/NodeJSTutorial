// Module basics
// const add = require('./add.js')

// console.log('Hello from index.js')

// const sum = add(1,2)
// const sum2 = add(2,3)
// console.log(sum)
// console.log(sum2)

// Module Scope
// require('./person1')
// require('./person2')

const person = require('./personClass')
console.log(person.getName()) //Person1
person.setName('Person2')
console.log(person.getName()) //Person2

const newPerson = require('./personClass')
console.log(newPerson.getName()) //Person2
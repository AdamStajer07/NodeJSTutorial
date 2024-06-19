function greet(name) {
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callback) {
    const name = 'Adam'
    callback(name)
}

higherOrderFunction(greet)
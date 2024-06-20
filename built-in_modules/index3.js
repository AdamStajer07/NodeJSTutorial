// const EventEmitter = require('events')
const Shop = require('./index3Class.js')
const Bonus = require('./index3Bonus.js')

const shop = new Shop()
const bonus = new Bonus()

shop.on('order', arg => {
    console.log('Order success')
    bonus.giveBonus(arg)
})
shop.order('bonus')

shop.displayOrderNumber()

// const emitter = new EventEmitter()

// emitter.on('order', (arg) => {
//     console.log(`Order received. ${arg}`)
// })

// emitter.emit('order', 'Success')
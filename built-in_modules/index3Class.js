const EventEmitter = require('events')

class Shop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0
    }

    order(arg) {
        this.orderNumber++
        this.emit('order', arg)
    }
    displayOrderNumber() {
        console.log(this.orderNumber)
    }
}

module.exports = Shop
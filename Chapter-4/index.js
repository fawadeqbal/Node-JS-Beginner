const events = require('events')
const eventEmitter = new events.EventEmitter();
const {logEvent:logInfo} = require('./logEvents.js')

eventEmitter.on('log',() => logInfo())

setTimeout(() => {
    eventEmitter.emit('log')
},3000)

const events = require('events')
const eventEmitter = new events.EventEmitter();
const {logEvent:logInfo} = require('./logEvents.js')

eventEmitter.on('log',(msg) => logInfo(msg))

setTimeout(() => {
    eventEmitter.emit('log','Log Event Emmited!')
},3000)

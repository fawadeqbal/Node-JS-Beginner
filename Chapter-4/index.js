const events = require('events')
const eventEmitter = new events.EventEmitter();
const {logEvent:log} = require('./logEvents.js')

eventEmitter.on('log',() => log())
eventEmitter.emit('log')
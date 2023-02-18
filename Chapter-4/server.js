const { format } = require('date-fns')
const { v4:uuid } = require('uuid')
const events = require('events')
const eventEmitter = new events.EventEmitter();
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


const logEvent = async () => {
    if(!fs.existsSync(path.join(__dirname,'log')))
    await fsPromises.mkdir(path.join(__dirname,'log'))
   await fsPromises.writeFile(path.join(__dirname,'log','log.txt'), `${format(new Date(),`dd-MM-yyyy\tHH:mm:ss`)}`+`\t`+`${uuid()}`+`\n`)
}
eventEmitter.on('log',()=>{

    logEvent()
})

eventEmitter.emit('log')



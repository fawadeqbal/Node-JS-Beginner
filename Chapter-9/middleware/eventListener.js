const {format} = require('date-fns')
const {v4:uuid} = require('uuid')
const fs = require('fs');
const fsPromise = fs.promises;
const path = require('path')


const eventLog = async (message) =>{
    const date = format(new Date(), `dd-mm-yyyy\tHH:mm:ss`)
    const data = `${date}\t${uuid()}\t${message}`
    if(!fs.existsSync(path.join(__dirname,'..','logs')))
    await fsPromise.mkdir(path.join(__dirname,'..','logs'))
    await fsPromise.appendFile(path.join(__dirname,'..','logs','log.txt'),data)
}

const logger = (req,res,next) =>{
    eventLog(`${req.method}\t${req.url}\n`)
    next()
}

module.exports = {eventLog,logger};
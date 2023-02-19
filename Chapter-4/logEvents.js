const { format } = require('date-fns')
const { v4:uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


const logEvent = async (msg) => {
    const data = `${format(new Date(),`dd-MM-yyyy\tHH:mm:ss`)}`+`\t`+`${uuid()}`+`\t${msg}`+`\n`;
    try{
        if(!fs.existsSync(path.join(__dirname,'log')))
        await fsPromises.mkdir(path.join(__dirname,'log'))
        await fsPromises.appendFile(path.join(__dirname,'log','log.txt'),data)
    } catch (err) {
        console.error(err)
    }
    
    console.log(data)
}

module.exports = {logEvent};

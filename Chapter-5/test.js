const http = require('http');
const Path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
// initialize object 
const myEmitter = new Emitter();

myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    console.log(req.url,req.method)

    let path;

    if(req.url === '/' || req.url === 'index.html'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        path = Path.join(__dirname,'view','index.html');
        fs.readFile(path, 'utf8',(err, data) =>{
            if(!err)
            res.end(data);
            else console.log(err)
        })
    }
   
  });


  server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
  })
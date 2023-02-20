const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors');
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500;

app.use(logger)

const whitelist = ['https://www.google.com','https://127.0.0.1:5500','http://localhost:3500']

const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin ){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname,'/public')))

app.get('^/$|/index(.html)?', ( req, res ) =>{
    res.sendFile(path.join(__dirname,'views','index.html'))
    console.log(req.baseUrl)
})

app.get('/new-page(.html)?', ( req, res ) =>{
    res.sendFile(path.join(__dirname,'views','new-page.html'))
    console.log(req.baseUrl)
})


app.get('/old-page(.html)?', ( req, res ) =>{
    res.redirect('/new-page.html')
    
})
app.get('/hello(.html)?', ( req, res, next ) =>{
    console.log("first")
    next()
},(req,res)=>{
    res.send('Hello World')
})

const one = ( req, res, next ) => {
    console.log("one")
    next()
}

const two = ( req, res, next ) => {
    console.log("two")
    next()
}

const three = ( req, res ) => {
    console.log("three")
    res.send('Finished')
}

app.get('/chain(.html)?',[one,two,three]);

app.all(`*` , (req,res) => {
    res.status(404);
    if(req.accepts('.html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.json({
            error:'404 Not Found'
        })
    }else{
        res.type('txt').send('404 Not Found')
    }
    
})

app.use(errorHandler)

app.listen(3500, () =>{
    console.log(`Server is running on Port: ${PORT}`)
})
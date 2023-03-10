const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500;

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

app.get(`/*` , (req,res) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(3500, () =>{
    console.log(`Server is running on Port: ${PORT}`)
})
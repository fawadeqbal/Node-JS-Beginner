const express = require('express')
const app = express()
const cors = require('cors');
const { urlencoded, json } = require('express');
const path = require('path');
const { logger } = require('./middleware/eventListener');
const router = require('./routes/router');
const corsOptions = require('./config/corsOption');



const PORT = 8000;
app.use(cors(corsOptions))

app.use(logger)

app.use(urlencoded({extended: false}))
app.use(json())

app.use('/',express.static(path.join(__dirname,'public')))

app.use('/',router)

app.all('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(PORT,() =>{
    console.log(`Server is listening on Port: ${PORT}`)
})

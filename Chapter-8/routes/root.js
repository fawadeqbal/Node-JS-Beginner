const express = require('express');
const router = express.Router();
const path = require('path');


router.get('^/$|/index(.html)?', ( req, res ) =>{
    res.sendFile(path.join(__dirname,'..','views','index.html'))
    console.log(req.baseUrl)
})

module.exports = router;
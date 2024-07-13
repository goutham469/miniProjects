const exp = require('express')
const mediaAPI = exp.Router()
const path = require('path')


mediaAPI.get('/',(req,res)=>{
    res.send("<h1>Media API for 100+ projects.<br/>Made and maintaining by Goutham reddy.</h1>")
})

mediaAPI.get('/images/AgeCalculator',(req,res)=>{
    res.sendFile(path.join(__dirname,'../assets/AgeCalculator.png'))
})
mediaAPI.get('/images/Quotes',(req,res)=>{
    res.sendFile(path.join(__dirname,'../assets/Quote.png'))
})
mediaAPI.get('/images/qrGenerator',(req,res)=>{
    res.sendFile(path.join(__dirname,'../assets/qrGenerator.png'))
})


module.exports = mediaAPI
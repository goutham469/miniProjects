const exp = require('express')
const qrAPI = exp.Router()
const path = require('path')

qrAPI.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pages/qrPage.html'))
})

module.exports = qrAPI


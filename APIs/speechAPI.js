const exp = require('express')
const speechAPI = exp.Router()
const path = require('path')

speechAPI.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pages/speech.html'))
})

module.exports=speechAPI;

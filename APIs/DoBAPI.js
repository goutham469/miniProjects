const exp = require('express')
const DoBAPI = exp.Router()
const path = require('path')



DoBAPI.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../ageCalculator.html'))
})


module.exports = DoBAPI;
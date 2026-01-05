




const express = require('express')

const authroute = require('./auth')
const productroute = require('./product')


const routee =express.Router()


routee.get('/', (req,res)=>{
    res.send('hello')
})

routee.use('/auth' ,authroute)

routee.use('/product' , productroute)

// routee.get('/:id' , RedirectUrl)




module.exports= routee
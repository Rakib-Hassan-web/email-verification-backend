const express = require('express')
const { Productcon } = require('../controllers/productControlers')




const routee =express.Router()

routee.get('/details' , Productcon)



module.exports= routee
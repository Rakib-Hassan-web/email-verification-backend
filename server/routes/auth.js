const express = require('express')
const { registration } = require('../controllers/authcontrollers')


const routee =express.Router()


routee.get('/registration' , registration)


module.exports= routee
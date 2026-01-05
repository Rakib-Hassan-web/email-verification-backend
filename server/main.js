

const express = require('express')
const MongoDBDATA = require('./dbConfig')
require('dotenv').config()
const app = express()
app.use(express.json())

MongoDBDATA()




app.listen(8000, () => {
  console.log('server is runnig on port 8000')
})

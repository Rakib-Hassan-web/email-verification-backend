

const express = require('express')
const MongoDBDATA = require('./dbConfig')
const routee = require('./routes')
require('dotenv').config()
const app = express()
app.use(express.json())

MongoDBDATA()

app.use(routee)


app.listen(8000, () => {
  console.log('server is runnig on port 8000')
})

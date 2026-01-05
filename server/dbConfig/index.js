const mongoose = require('mongoose');

const MongoDBDATA = ()=>{
    return mongoose.connect(process.env.DB_STRING)
  .then(() => console.log('Connected!'));
}


module.exports =MongoDBDATA
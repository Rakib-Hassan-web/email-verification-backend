const mongoose = require('mongoose');

const MongoDBDATA = ()=>{
    return mongoose.connect(process.env.DB_STRING)
  .then(() => console.log('DB Connected!'));
}


module.exports =MongoDBDATA
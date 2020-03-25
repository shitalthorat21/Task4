const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
const port=8008;

// const MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost:27017/qliktagInterns1',  { useNewUrlParser: true }, (err) =>
{
  if (!err) 
  {
      console.log("Success");
  }
  else{
    console.log("Error in conection");
  }
  
});

require('dotenv').config({ path: '.env' });
require('./models/Company');
require('./models/User');

const app = require('./app');
const server = app.listen(8008, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


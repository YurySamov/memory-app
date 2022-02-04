const mongo = require('mongodb').MongoClient;

/*
var mongoose = require('mongodb');

var mongoURI = "mongodb://localhost:27017/test";
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});*/


mongo.connect('mongodb://localhost:27017',(err, client) => {
    if (err) {
      console.log('Connection error: ', err);
      throw err;
    }

    console.log('Connected');

    client.close();
  }
)

module.export = mongo;
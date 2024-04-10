const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://Sachi:123Sachi@cluster0.ml2ddl5.mongodb.net/mern-rooms"

mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on('error', () =>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection successful')
})

module.exports = mongoose;


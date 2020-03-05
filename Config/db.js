//Mongo Db connection

const mongoose = require('mongoose');

const config = require('config');

const db = config.get('mongoURI');

//to connect to mongoDB we use mongoose.connect
// mongoose.connect(db);
// but we need a variable to call in our server.js
//in case Im going to use async I will need a try/ catch with it.
const connectDB = async() => {
    // I used try/catch - to show me if there is any error in my way of connection 
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Mongo is connected');
    } catch (err) {
        console.error('Error msgss:' + err.message);
        process.exit(1);
    }
};
module.exports = connectDB;
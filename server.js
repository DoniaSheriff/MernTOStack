//express server up running
const express = require('express');
const connectDB = require('./config/db');

//initialize our app with express
const app = express();

//Connect Database
connectDB();
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
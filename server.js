const express = require("express");

const app = express();


const cors = require('cors');
app.use(cors());

const dbConfig = require('./db');
const roomsRoute = require('./routes/roomsRoute');
const usersRoute= require('./routes/usersRoute');
const bookingsRoute = require('./routes/bookingsRoute');

app.use(express.json())

app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRoute);

const port = 5000;

app.listen(port, () => console.log('Node Server started using nodemon'));
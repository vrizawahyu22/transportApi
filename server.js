const express = require('express');
require('babel-polyfill');
const cors = require('cors');
const env = require('./env');
const usersRoute = require('./app/routes/userRoute');
// const seedRoute = require('./app/routes/seedRoute');
// const adminRoute = require('./app/routes/adminRoute');
const tripRoute = require('./app/routes/tripRoute');
const busRoute = require('./app/routes/busRoute');
const bookingRoute = require('./app/routes/bookingRoute');
// const familyRoute = require('./app/routes/familyRoute');

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', usersRoute);
// app.use('/api/v1', familyRoute);
// app.use('/api/v1', seedRoute);
// app.use('/api/v1', adminRoute);
app.use('/api/v1', tripRoute);
app.use('/api/v1', busRoute);
app.use('/api/v1', bookingRoute);


app.listen(env.port).on('listening', () => {
  console.log(`🚀 are live on ${env.port}`);
});

module.exports = app;
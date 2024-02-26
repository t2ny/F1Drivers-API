const express = require('express');
const app = express();

app.use(express.json());

const driverRoute = require('./routers/driver.router');

app.use('/api/drivers', driverRoute);

module.exports = app;
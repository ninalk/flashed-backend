const express = require('express');
const logger = require('morgan');

// mongodb
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json()); // body parser

// api routes must be before the "catch all" route
app.use('/users', require('./routes/api/users'));

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
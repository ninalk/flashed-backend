require('dotenv').config();
const express = require('express');
const logger = require('morgan');

// mongodb
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// for accepting post form data
app.use(bodyParser());

// api routes must be before the "catch all" route
app.use('/api/users', require('./routes/api/users'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
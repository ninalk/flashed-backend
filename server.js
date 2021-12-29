const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// mongodb
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json()); // body parser
app.use(cors());

// api routes must be before the "catch all" route
app.use('/users', require('./routes/api/users'));
app.use('/categories', require('./routes/api/categories'));
app.use('/', require('./routes/api/cards'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// mongodb
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json()); // body parser
app.use(cors());

// configure auth middleware
// this decodes the jwt token and assigns the user information to req.user
app.use(require('./config/auth'));

// api routes must be before the "catch all" route
app.use('/users', require('./routes/api/users'));
app.use('/categories', require('./routes/api/categories'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const payments = require('./routes/payments');
const admin = require('./routes/admin');
const debug = require('./routes/debug');
const mongoose = require('./config/database');
const jwtmiddleware = require('./app/middlewares/jwtmiddleware');
const cors = require('cors');

const app = express();

app.set('secretKey', 'some secret key');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', users);
app.use('/payments', jwtmiddleware.validate, payments);
app.use('/admin', jwtmiddleware.validate, admin);
app.use('/debug', jwtmiddleware.validate, debug);

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({message: "Not found"});
    else
        res.status(500).json({message: "Something looks wrong"});

});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(3000, '0.0.0.0', function () {
    console.log('Node server listening on port 3000');
});


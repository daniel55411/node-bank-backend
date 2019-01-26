const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const mongoose = require('./config/database'); //database configuration
let jwt = require('jsonwebtoken');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.json({"tutorial" : "Build REST API with node.js"});
});

app.use('/users', users);

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.json({status:"error", message: err.message, data:null});
        }else{
            req.body.userId = decoded.id;
            next();
        }
    });
}

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.log(err);

    if(err.status === 404)
        res.status(404).json({message: "Not found"});
    else
        res.status(500).json({message: "Something looks wrong"});

});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(3000, function(){ console.log('Node server listening on port 3000');});

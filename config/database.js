const mongoose = require('mongoose');
const MongoUtils = require('../app/utils/MongoUtils');
const mongoDB = 'mongodb://localhost/bank';

mongoose.connect(mongoDB, function() {
    MongoUtils.cleanUp();
});

mongoose.Promise = global.Promise;

module.exports = mongoose;

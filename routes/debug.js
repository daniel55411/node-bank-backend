const express = require('express');
const router = express.Router();
const MongoUtils = require('../app/utils/MongoUtils');

router.get('/cleandb', function (req, res) {
    MongoUtils.cleanUp(function () {
        res.send('ok');
    })
});

module.exports = router;

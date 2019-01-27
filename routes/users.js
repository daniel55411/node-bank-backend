const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');
const clientInfoController = require('../app/api/controllers/client-info');

router.post('/login', userController.authenticate);
router.post('/getClientInfo', clientInfoController.getClientInfo);

module.exports = router;

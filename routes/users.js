const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');
const clientInfoController = require('../app/api/controllers/client-info');
const jwtmiddleware = require('../app/middlewares/jwtmiddleware');

router.post('/login', userController.authenticate);
router.get('/getClientInfo', jwtmiddleware.validate, clientInfoController.getClientInfo);

module.exports = router;

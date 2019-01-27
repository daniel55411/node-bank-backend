const express = require('express');
const router = express.Router();
const anyBankPaymentController = require('../app/api/controllers/any-bank-payment');
const myBankPaymentController = require('../app/api/controllers/my-bank-payment');

router.post('/saveAnyBankPayment', anyBankPaymentController.save);
router.post('/saveMyBankPayment', myBankPaymentController.save);

module.exports = router;

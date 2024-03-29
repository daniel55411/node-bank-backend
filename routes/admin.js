const express = require('express');
const router = express.Router();
const anyBankPaymentController = require('../app/api/controllers/any-bank-payment');
const myBankPaymentController = require('../app/api/controllers/my-bank-payment');

router.post('/filterAnyBankPayment', anyBankPaymentController.search);
router.post('/filterMyBankPayment', myBankPaymentController.search);
router.get('/markUnsafe/:id', anyBankPaymentController.markUnsafe);

module.exports = router;

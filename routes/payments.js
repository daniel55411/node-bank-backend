const express = require('express');
const router = express.Router();
const anyBankPaymentController = require('../app/api/controllers/any-bank-payment');
const myBankPaymentController = require('../app/api/controllers/my-bank-payment');
const csv = require('csv-express');

let counter = 1;

router.post('/saveAnyBankPayment', anyBankPaymentController.save);
router.post('/saveMyBankPayment', myBankPaymentController.save);
router.post('/createInvoice', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=invoice-${counter}`);

    let body = [];
    req.body.forEach(function (item, key, arr) {
        body.push([key, item]);
    });

    res.csv(body);
});

module.exports = router;

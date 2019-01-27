const AnyBankPayment = require('../models/any-bank-payment');
const Response = require('../../entities/Response');
const PaymentUtils = require('../../utils/PaymentUtils');

module.exports = {
    save: function (req, res, next) {
        let obj = PaymentUtils.narrowAnyBankPayment(req.body),
            payment = new AnyBankPayment(obj);

        payment.save();
        res.json(Response.message("Payment has saved successfully").toJSON());
    }
};

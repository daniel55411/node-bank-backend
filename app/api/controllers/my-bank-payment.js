const MyBankPayment = require('../models/My-bank-payment');
const Response = require('../../entities/Response');
const PaymentUtils = require('../../utils/PaymentUtils');

module.exports = {
    save: function (req, res, next) {
        let obj = PaymentUtils.narrowMyBankPayment(req.body),
            payment = new MyBankPayment(obj);

        payment.save();
        res.json(Response.message("Payment has saved successfully").toJSON());
    }
};

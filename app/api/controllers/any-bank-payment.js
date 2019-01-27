const AnyBankPayment = require('../models/any-bank-payment');
const Response = require('../../entities/Response');
const PaymentUtils = require('../../utils/PaymentUtils');

module.exports = {
    save: function (req, res) {
        let obj = PaymentUtils.narrowAnyBankPayment(req.body),
            payment = new AnyBankPayment(obj);

        payment.save(function (err) {
            if (err) {
                res.json(Response.fail(err.message).toJSON());
            } else {
                res.json(Response.ok('Payment has saved successfully'));
            }
        });
    },
    search: function (req, res, next) {
        PaymentUtils.search(req, res, next, AnyBankPayment);
    },
    markUnsafe: function (req, res, next) {
        AnyBankPayment.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {unsafe: true}},
            function (err) {
                if (err) {
                    res.json(Response.fail(err.message).toJSON());
                } else {
                    res.json(Response.ok('Payment has marked as unsafe successfully'));
                }
            })
    }
};

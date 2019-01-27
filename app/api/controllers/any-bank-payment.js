const AnyBankPayment = require('../models/any-bank-payment');
const Response = require('../../entities/Response');
const PaymentUtils = require('../../utils/PaymentUtils');

module.exports = {
    save: function (req, res) {
        let obj = PaymentUtils.narrowAnyBankPayment(req.body),
            payment = new AnyBankPayment(obj);

        payment.save();
        res.json(Response.message("Payment has saved successfully").toJSON());
    },
    search: function (req, res, next) {
        let criteria = PaymentUtils.getCriteria(req.body);

        AnyBankPayment.find(criteria.spec, criteria.options, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                res.json(Response.data(userInfo).toJSON());
            }
        });
    }
};

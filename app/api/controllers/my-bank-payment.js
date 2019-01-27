const MyBankPayment = require('../models/My-bank-payment');
const Response = require('../../entities/Response');
const PaymentUtils = require('../../utils/PaymentUtils');

module.exports = {
    save: function (req, res) {
        let obj = PaymentUtils.narrowMyBankPayment(req.body),
            payment = new MyBankPayment(obj);

        payment.save(function (err) {
            if (err) {
                res.json(Response.fail(err.message).toJSON());
            } else {
                res.json(Response.ok('Payment has saved successfully'));
            }
        });
    },
    search: function (req, res, next) {
        let criteria = PaymentUtils.getCriteria(req.body);

        MyBankPayment.find(criteria.spec, criteria.options, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                res.json(Response.data(userInfo).toJSON());
            }
        });
    }
};

const MyBankPayment = require('../models/My-bank-payment');
const Response = require('../../entities/Response');
const PaymentUtils = require('../../utils/PaymentUtils');

module.exports = {
    save: function (req, res, next) {
        let obj = PaymentUtils.narrowMyBankPayment(req.body),
            payment = new MyBankPayment(obj);

        payment.save();
        res.json(Response.message("Payment has saved successfully").toJSON());
    },
    search: function (req, res) {
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

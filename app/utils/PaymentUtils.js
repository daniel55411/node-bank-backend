const ObjectUtils = require('./ObjectUtils');
const Response = require('../entities/Response');

const ANY_BANK_PAYMENT_KEYS = [
    'cardNumber', 'sum', 'expirationDate',
    'cvc', 'comment', 'email', 'userId'
];

const MY_BANK_PAYMENT_KEYS = [
    'tin', 'bik', 'vat', 'accountNumber',
    'sum', 'email', 'phone', 'userId'
];

module.exports = {
    narrowAnyBankPayment: function (obj) {
        return ObjectUtils.narrow(obj, ANY_BANK_PAYMENT_KEYS);
    },
    narrowMyBankPayment: function (obj) {
        return ObjectUtils.narrow(obj, MY_BANK_PAYMENT_KEYS);
    },
    getCriteria: function (body) {
        let sort = {},
            spec = {},
            sortField = body.sortField || 'sum';

        sort[sortField] = ObjectUtils.toBoolean(body.asc) ? 1 : -1;

        if (ObjectUtils.toBoolean(body.searching) && body.searchField && body.searchValue) {
            if (body.searchField === 'sum') {
                spec[body.searchField] = +body.searchValue;
            } else {
                spec[body.searchField] = {$regex: `.*${body.searchValue}.*`};
            }
        }

        return {
            sort: sort,
            spec: spec
        };
    },
    search: function(req, res, next, model) {
        let criteria = this.getCriteria(req.body);

        model.find(criteria.spec)
            .sort(criteria.sort)
            .exec(function (err, userInfo) {
                if (err) {
                    next(err);
                } else {
                    res.json(Response.data(userInfo).toJSON());
                }
            });
    }
};

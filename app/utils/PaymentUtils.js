const ObjectUtils = require('./ObjectUtils');

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
        let options = {
                sort: {
                    data_added: body.asc ? 1 : -1
                }
            },
            spec = {};

        if (body.searching) {
            if (body.searchField === 'sum') {
                spec[body.searchField] = +body.searchValue;
            } else {
                spec[body.searchField] = {$regex: `.*${body.searchValue}.*`};
            }
        }

        return {
            options: options,
            spec: spec
        };
    }
};

const ObjectUtils = require('ObjectUtils');

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
    }
};

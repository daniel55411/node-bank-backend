const mongoose = require('mongoose');
const Payment = require('./payment');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const AnyBankPaymentSchema = new Schema({
    cardNumber: {
        type: Types.String,
        trim: true,
        match: /^\d{16}$/,
        required: true
    },
    expirationDate: {
        type: Types.String,
        trim: true,
        match: /^(0[1-9]|1[0-2]) (1[8-9]|2\d|3[0-6])$/,
        required: true
    },
    cvc: {
        type: Types.String,
        trim: true,
        match: /^\d{3}$/,
        required: true
    },
    comment: {
        type: Types.String,
        maxlength: 150
    },
    email: {
        type: Types.String,
        trim: true,
        match: /^\w{3,}@\w{2,}\.\w{2,}$/,
        required: true
    },
    unsafe: {
        type: Types.Boolean,
        default: false
    }
});

module.exports = Payment.discriminator('AnyBankPayment', AnyBankPaymentSchema);

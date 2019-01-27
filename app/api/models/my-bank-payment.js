const mongoose = require('mongoose');
const Payment = require('payment');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const MyBankPaymentSchema = new Schema({
    tin: {
        type: Types.String,
        trim: true,
        match: /^\d{10}|\d{12}$/,
        required: true
    },
    bik: {
        type: Types.String,
        trim: true,
        match: /^\d{9}$/,
        required: true
    },
    vat: {
        type: Types.String,
        trim: true,
        enum: ['Без НДС', 'НДС 10%', 'НДС 18%'],
        required: true
    },
    accountNumber: {
        type: Types.String,
        trim: true,
        match: /^\d{20}$/,
        required: true
    },
    sum: {
        type: Types.Number,
        max: 75_000,
        min: 1000,
        required: true,
    },
    email: {
        type: Types.String,
        trim: true,
        match: /^\w{3,}@\w{2,}\.\w{2,}$/
    },
    phone: {
        type: Types.String,
        trim: true,
        match: /^8 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$/
    },

});

module.exports = Payment.discriminator('MyBankPayment', MyBankPaymentSchema);

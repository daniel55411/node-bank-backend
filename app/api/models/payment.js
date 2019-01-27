const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const PaymentSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    sum: {
        type: Types.Number,
        max: 75000,
        min: 1000,
        required: true,
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);

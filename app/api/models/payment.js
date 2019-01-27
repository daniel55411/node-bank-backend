const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const PaymentSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true
    }
});

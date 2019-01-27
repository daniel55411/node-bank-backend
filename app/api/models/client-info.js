const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const ClientInfoSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    profile_image: {
        type: Types.String,
        required: true
    },
    website: Types.String,
    email: {
        type: Types.String,
        trim: true,
        match: /^\w+@\w+\.[a-z]{1,3}$/,
        required: true
    },
    phone: {
        type: Types.String,
        trim: true,
        match: /^8 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        required: true
    },
    name: {
        type: Types.String,
        trim: true,
        minlength: 3,
        required: true
    },
    products: [{
        image: Types.String,
        cost: {
            type: Types.Number,
            required: true,
        },
        name: {
            type: Types.String,
            required: true
        }
    }]
});

module.exports = mongoose.model('ClientInfo', ClientInfoSchema);

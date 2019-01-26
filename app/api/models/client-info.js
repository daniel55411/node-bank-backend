const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientInfoSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    profile_image: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    website: mongoose.Schema.Types.String,
    email: {
        type: mongoose.Schema.Types.String,
        trim: true,
        match: /^\w+@\w+\.[a-z]{1,3}$/,
        required: true
    },
    phone: {
        type: mongoose.Schema.Types.String,
        trim: true,
        match: /^8 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        required: true
    },
    name: {
        type: mongoose.Schema.Types.String,
        trim: true,
        minlength: 3,
        required: true
    },
    products: [{
        image: mongoose.Schema.Types.String,
        cost: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
        name: {
            type: mongoose.Schema.Types.String,
            required: true
        }
    }]
});

module.exports = mongoose.model('ClientInfo', ClientInfoSchema);

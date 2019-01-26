const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientInfoSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    website: String,
    email: {
        type: String,
        trim: true,
        match: /^\w+@\w+\.[a-z]{1,3}$/,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        match: /^(\+\d\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/,
        required: true
    },
    name: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    products: [{
        image: String,
        cost: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model('ClientInfo', ClientInfoSchema);

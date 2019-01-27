const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const UserSchema = new Schema({
    login: {
        type: Types.String,
        trim: true,
        minlength: 3,
        required: true,
        unique: true
    },
    password: {
        type: Types.String,
        trim: true,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('User', UserSchema);

const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Response = require('../../entities/response');

module.exports = {
    authenticate: function (req, res, next) {
        userModel.findOne({login: req.body.login}, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.json(Response.data(token).toJSON());
                } else {
                    res.json(Response.fail("Invalid login/password!").toJSON());
                }
            }
        });
    },
};

const Response = require('../entities/response');
let jwt = require('jsonwebtoken');

module.exports = {
    validate: function (req, res, next) {
        jwt.verify(
            req.headers['x-access-token'],
            req.app.get('secretKey'),
            function (err, decoded) {
                if (err) {
                    res.json(Response.fail(err.message).toJSON());
                } else {
                    req.body.userId = decoded.id;
                    next();
                }
            });
    }
};

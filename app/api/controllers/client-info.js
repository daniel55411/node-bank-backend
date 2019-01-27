const clientInfoModel = require('../models/client-info');
const Response = require('../../entities/Response');

module.exports = {
    getClientInfo: function (req, res, next) {
        clientInfoModel.findOne({userId: req.body.userId}, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                res.json(Response.data(userInfo).toJSON());
            }
        });
    }
};

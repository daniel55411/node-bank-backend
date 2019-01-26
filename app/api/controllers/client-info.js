const clientInfoModel = require('../models/client-info');

module.exports = {
    create: function (req, res, next) {
        clientInfoModel.create({
            userId: req.body.userId,
            website: req.body.website,
            email: req.body.email,
            phone: req.body.phone,
            name: req.body.name,
            //TODO: products
        }, function (err) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "Client info added successfully!",
                    data: null
                });

        });
    },

    findOne: function (req, res, next) {
        clientInfoModel.findOne({userId: req.body.userId}, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: "success",
                    message: "User found!",
                    data: userInfo
                });
            }
        });
    },
};

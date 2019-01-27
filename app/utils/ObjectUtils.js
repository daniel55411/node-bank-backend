module.exports = {
    narrow: function (obj, keys) {
        let o = {};

        keys.forEach(function (item, i, arr) {
            if (obj.hasOwnProperty(item)) {
                o[item] = obj[item];
            }
        });

        return o;
    }
};

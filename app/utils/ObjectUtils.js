module.exports = {
    narrow: function (obj, keys) {
        let o = {};

        keys.forEach(function (item, i, arr) {
            if (item in obj) {
                o[item] = obj[item];
            }
        });

        return o;
    },
    toBoolean: function (str) {
        return str.toLowerCase() === 'true';
    }
};

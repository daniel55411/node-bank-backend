const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/bank';
const User = require('../app/api/models/users');
const ClientInfo = require('../app/api/models/client-info');

function setUp() {
    mongoose.connection.db.dropDatabase();

    let user = new User({
            login: 'murmur',
            password: 'qwer'
        }),
        clientInfo = new ClientInfo({
            userId: user._id,
            website: 'www.mur.com',
            phone: '8 982 738-48-28',
            name: 'Муркина Лидия Ивановна',
            email: 'mur@mail.ru',
            profile_image: 'https://i.imgur.com/rK3EjIZ.jpg',
            products: [
                {
                    image: 'http://www.atorus.ru/public/ator/data/ea4f13.jpg',
                    name: 'Отпуск на Бали',
                    cost: 80000
                },
                {
                    image: 'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2017-07/_68-20060323_gaf_u34_180.jpg?itok=fXC_d4L9',
                    name: 'Горячие каникулы в Мексике',
                    cost: 100000
                },
                {
                    image: 'http://www.uralkom-lysva.ru/images/j0rdkdfqrhe.jpg',
                    name: 'Путевка в Лысьву',
                    cost: 5000
                },
            ]
        });

    user.save();
    clientInfo.save();
}

mongoose.connect(mongoDB, function() {
    setUp();
});

mongoose.Promise = global.Promise;

module.exports = mongoose;

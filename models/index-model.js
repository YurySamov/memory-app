const mongo = require('../conf/db');
/*
const mongo = require('mongodb').MongoClient;

function check_connecting(err, client) {
    console.log("KKKKLJLJLJ");
    if (err) {
        console.log('Connection error: ', err);
        throw err;
    }

    console.log('Connected');

    client.close();
}*/


const index_model = {};

index_model.get = (req, res, next) => {
    /* здесь функция модели - работа с базой данных выдача информации для заполнения шаблона */
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(res.locals)
    res.render('index', { title: 'Express' });
}

index_model.post = (req, res, next) => {

    mongo.connect('mongodb://localhost:27017',  check_connecting);

    //mongo.connect();
    /* здесь функция ЛК - работа с базой данных выдача информации для заполнения шаблона */
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Молодец!!!");
}

module.exports = index_model;

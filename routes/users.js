var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  /* здесь функция ЛК - работа с базой данных выдача информации для заполнения шаблона */
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('respond with a resource');
  
});

module.exports = router;

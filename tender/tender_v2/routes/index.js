var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'База документов компании', 
      table: [{name: 'Аука ешқайда бармайды', date:''},{ name: "Document 1", date: "01/01/2018"}, { name: "Document 2", date: "01/01/2018"}, { name: "Document 3", date: "01/01/2018"}]});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { doctitle: 'Express', isAuthenticated: false });
});

router.post('/', function(req, res) {
  res.render('index', { doctitle: req.param("projname") });
});

module.exports = router;

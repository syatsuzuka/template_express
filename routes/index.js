var express = require('express');
var fs = require('fs');
var ejs = require('ejs');

var router = express.Router();
var content = fs.readFileSync('./views/welcome.ejs', 'utf8');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'layout', 
    { content: ejs.render (
      content,
      {}
    )}
  );
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let query=req.query;
    console.log(`rows ${query.rows}`);
    console.log(`cols ${query.cols}`);
    res.render('board', {title:"Board", query:"query",rows:query.rows,cols:query.cols});
  
});

module.exports = router;

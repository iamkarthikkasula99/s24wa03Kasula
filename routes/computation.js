var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
    }
    
    let x = req.query.x ? parseFloat(req.query.x) : Math.random();
    let y = Math.random(); 
    let result = getBaseLog(x, y);
    let response = `Base log of ${y} with base ${x} is ${result}`;
    res.send(response);
});

module.exports = router;
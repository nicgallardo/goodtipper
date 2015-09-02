var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Good Tipper', tipAmount: [] });
});

router.post('/', function (req, res, next) {
  var percent = req.body.percent.split(' ');
  var total = req.body.amount.split(' ');
  var almostTip = (total * percent);

  var tipAmount = "Your tip amount $" + almostTip.toFixed(2);
  return res.render('index', {title: 'Good Tipper', tipAmount: tipAmount})

});



module.exports = router;

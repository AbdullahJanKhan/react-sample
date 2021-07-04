var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/save', (req, res) => {
  console.log(req.body)
  res.send(
    { body: req.body }
  )
})

module.exports = router;

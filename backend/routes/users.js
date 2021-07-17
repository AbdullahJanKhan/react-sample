var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET users listing. */

const sender = 'youremail';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: 'yourpassword'
  }
});

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/forgotpassword', (req, res) => {
  const email = req.body.email;
  console.log(req.body)
  var mailOptions = {
    from: sender,
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
      res.json({ err: err, info: info })
    } else {
      res.json({ data: 'Email sent: ' + info.response });
    }
  });

})

module.exports = router;

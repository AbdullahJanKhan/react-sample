var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET users listing. */


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD
  }
});

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/forgotpassword', (req, res) => {
  const email = req.body.email;
  console.log(req.body)
  console.log(typeof (process.env.SENDER_EMAIL))
  console.log(typeof (process.env.SENDER_PASSWORD))
  var mailOptions = {
    from: process.env.SENDER_EMAIL,
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

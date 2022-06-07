var express = require('express');
var router = express.Router();
var dotenv = require("dotenv").config();
var nodemailer = require("nodemailer");
var gmail = require("gmail");
var googleapis = require("googleapis");

/* GET home page. */
router.get('/', function(req, res, next) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dhaval.d@acedataanalytics.com',
      clientId: process.env.CLIENT_ID,
      refreshToken: process.env.REFRESH_TOKEN,
      clientSecret: process.env.CLIENT_SECRET,
      pass: process.env.APP_PASSWORD
    }
  });

  let mail = {
    from: '"Test" <dhaval.d@acedataanalytics.com>',
    to: "dhruvi@acedataanalytics.com",
    subject: "Testing",
    text: "HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
  }

  transporter.sendMail(mail, (err, result) => {
    if(err) console.log(err);
    console.log(result);
  })
});

module.exports = router;

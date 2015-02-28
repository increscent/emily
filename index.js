var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var email_credentials = require('./pass.js');
var transporter = nodemailer.createTransport();
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: email_credentials
});

app.use(express.static(__dirname + '/www'));

app.get('/yes', function (req, res) {
	transporter.sendMail({
	    from: 'robert@increscent.org',
	    to: 'robert@increscent.org',
	    subject: 'YES',
	    text: 'She said yes!'
	});
	res.send('');
});

app.get('/no', function (req, res) {
	transporter.sendMail({
	    from: 'robert@increscent.org',
	    to: 'robert@increscent.org',
	    subject: 'NO',
	    text: 'She said HBLL no!'
	});
	res.send('');
});

app.listen(7777);
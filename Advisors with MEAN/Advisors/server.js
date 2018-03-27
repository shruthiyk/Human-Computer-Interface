var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session      = require('express-session');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET }));


// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//require ("./test/app.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 4000;

var assignment = require('./project/app.js')(app);

app.listen(port, ipaddress);

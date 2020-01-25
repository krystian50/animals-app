var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const fs = require('fs');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



fs.readdirSync('./routes').forEach(file => {
  // console.log(file, file.replace('.js', ''), require(`./routes/${file}`));
  app.use('/' + file.replace('.js', ''), require(`./routes/${file}`));
});

module.exports = app;

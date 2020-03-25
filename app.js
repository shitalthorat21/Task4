const express = require('express');
const mongoose = require('mongoose');
const app = express();
const pug=require('pug');
var path = require('path');
const bodyParser = require('body-parser');
const routes = require('./index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);


module.exports = app;
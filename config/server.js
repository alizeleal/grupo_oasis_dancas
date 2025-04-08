const express = require("express");
const consign = require("consign");
const parser = require("body-parser");

const app = express();
const path = require('path');

app.use(parser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app)

module.exports = app;
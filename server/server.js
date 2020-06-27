var express = require('express');
var bodyParser = require('body-parser');
var db = require("../db/index.js")
var app = express();

//react 
app.use(express.static(__dirname + 'path'));




app.listen(3000, function() {
    console.log('listening on port 3000!');
  });
  
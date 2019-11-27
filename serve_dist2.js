var express = require('express');
var app = express();

app.use(express.static('dist2'));

var server = app.listen(5000);
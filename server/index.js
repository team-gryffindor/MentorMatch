var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/*', function(req, res) {
  res.sendfile(path.join(__dirname + '/../react-client/dist/index.html'));
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

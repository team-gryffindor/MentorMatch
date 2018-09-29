<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.js');

const app = express();

=======
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

>>>>>>> dev
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

app.get('/*', function(req, res) {
  res.sendfile(path.join(__dirname + '/../react-client/dist/index.html'));
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

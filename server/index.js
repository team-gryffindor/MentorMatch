const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.js');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

app.get('/*', function(req, res) {
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.js');
const models = require('./db/index.js');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.use(cors());

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

// use search endpoint to retrieve from search service server
app.use('/search', function(req, res) {
  console.log('SEARCH ENDPOINT MET', req.query.q);
  axios
    .get(`${process.env.searchURI}?q=${req.query.q}`)
    .then(({ data }) => res.send(data))
    .catch((err) => console.error(err));
});

// handle react router cases
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../react-client/dist/index.html'));
});

models.db
  // For change in schema itself, use the line below
  //.sync
  .sync()
  .then(() => {
    app.listen(process.env.SERVER_PORT, function() {
      // start at `port`
      console.log('Listening at', process.env.SERVER_PORT); // we're loaded - let the console know
    });
  })
  .catch((err) => {
    console.error(err);
  });

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
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require('stripe')(keySecret);

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
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

// app.get("/", (req, res) =>
//   res.render("index.pug", {keyPublishable}));

app.post('/charge', (req, res) => {
  let amount = parseInt(req.body.stripePrice) * 100;
  console.log('AMOUNT:', amount);
  console.log('price:', req.body.stripePrice);

  // console.log('STRIPE INFO:', req.body)
  stripe.charges
    .create({
      amount,
      currency: 'usd',
      description: 'ExampleCharge',
      source: req.body.stripeToken,
      capture: false
    })
    .then(() => res.sendStatus(200))
    .catch((err) => console.log('Error in STRIPE:', err));
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

const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.js');
const models = require('./db/index.js');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../react-client/dist/index.html'));
});

models.db
  // For change in schema itself, use the line below
  //.sync
  .sync()
  .then(() => {
    // hardcoded because using variable port not working
    app.listen(process.env.SERVER_PORT, () =>
      console.log('listening on port: ', process.env.SERVER_PORT)
    );
  })
  .catch((err) => {
    console.error(err);
  });

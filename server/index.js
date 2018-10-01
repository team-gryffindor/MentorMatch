const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.js');
const config = require('dotenv').config();
const models = require('./db/index.js');
<<<<<<< HEAD
const port = process.env.PORT || 3000;
=======
const path = require('path');
require('dotenv').config();
>>>>>>> dev

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.get('/*', function(req, res) {
<<<<<<< HEAD
  res.sendfile(path.join(__dirname + '/../react-client/dist/index.html'));
=======
  res.sendFile(path.join(__dirname + '/../react-client/dist/index.html'));
>>>>>>> dev
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

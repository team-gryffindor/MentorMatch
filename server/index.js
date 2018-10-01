const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.js');
const models = require('./db/index.js');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

app.get('/*', function(req, res) {
  res.sendfile(path.join(__dirname + '/../react-client/dist/index.html'));
});

models.db
  .sync()
  .then(() => {
    app.listen(port, () => console.log('listening on port: ', port));
  })
  .catch((err) => {
    console.error(err);
  });

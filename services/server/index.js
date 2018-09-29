var express = require('express');
var bodyParser = require('body-parser');
const models = require('./db/index.js');
const port = process.env.PORT || 80;

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/*', function(req, res) {
  res.redirect('/');
});

// app.get('/', function(req, res) {
//   res.send('HELLO WORLD');
// });

models.sequelize
  // For change in schema itself, use the line below
  //.sync({force: true})
  .sync()
  .then(() => {
    app.listen(port, () => console.log('listening on port: ', port));
  })
  .catch((err) => {
    console.error(err);
  });

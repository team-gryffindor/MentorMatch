// const argv = require('yargs').demandOption('connection').argv; // command line handling // require the 'connection' argument (this is a node_redis connection object in JSON Format)
const redsearch = require('redredisearch'); // RedRediSearch, syntax compatible with Reds
const redis = require('redis'); // node_redis module
const express = require('express'); // simple web server module

// const creds = require(argv.connection); // load the JSON specified in the argument
const client = redis.createClient(); // create a Redis client with the Node_redis connection object
const urls = require('./urls.json'); // load the URLs from a JSON file
const port = 2000; // load demo on http://localhost:2000/

const app = express(); // server instance

redsearch.setClient(client); // associate the correct client.

redsearch.createSearch('web', {}, function(err, search) {
  // index them
  urls.forEach(function(str, i) {
    search.index(str, i);
  });
  // create the search with at the "web" key
  app.get(
    // HTTP Get
    '/search', // route for /search
    function(req, res, next) {
      search
        .query(req.query.q) // /search?q=[search query]
        .end(function(err, ids) {
          console.log(ids);
          console.log(req.query.q);
          if (err) throw err;
          res.json(
            // return JSON
            ids.map(function(id) {
              return urls[id];
            }) // this will return all the URLs that match the results
          );
        });
    }
  );

  app
    .use(express.static('static')) // server out static files (the form)
    .listen(port, function() {
      // start at `port`
      console.log('Listening at', port); // we're loaded - let the console know
    });
});

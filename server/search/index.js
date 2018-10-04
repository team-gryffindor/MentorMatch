const redsearch = require('redredisearch'); // RedRediSearch, syntax compatible with Reds
const redis = require('redis'); // node_redis module
const express = require('express'); // simple web server module

// const creds = require(argv.connection); // load the JSON specified in the argument
const client = redis.createClient(); // create a Redis client with the Node_redis connection object
const port = 2000; // load search service on 2000

const initIndex = require('./model/index.js').initIndex;
const searchWithQuery = require('./controller/index.js').searchWithQuery;

const app = express(); // server instance

// retrieve all lessons at the beginning of the search server as array of json
const lessons = require('./urls.json');

redsearch.setClient(client); // associate the correct client.

// create instance of redisearch
redsearch.createSearch('lessons', {}, function(err, search) {
  // index them
  initIndex(search, lessons);

  // handle /search endpoint
  app.get('/search', function(req, res) {
    return searchWithQuery(search, req.query.q, res);
  });

  app.listen(port, function() {
    // start at `port`
    console.log('Listening at', port); // we're loaded - let the console know
  });
});

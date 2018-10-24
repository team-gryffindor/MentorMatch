const redsearch = require('redredisearch'); // RedRediSearch, syntax compatible with Reds
const redis = require('redis'); // node_redis module
const express = require('express'); // simple web server module
const axios = require('axios');

// const creds = require(argv.connection); // load the JSON specified in the argument
const client = redis.createClient(); // create a Redis client with the Node_redis connection object
const port = 2000; // load search service on 2000

const initIndex = require('./model/index.js').initIndex;
const searchWithQuery = require('./controller/index.js').searchWithQuery;

const app = express(); // Create server instance

redsearch.setClient(client); // Associate the correct client.

let lessons = []; // Initialize lessons to empty

// create instance of redisearch
redsearch.createSearch('lessons', {}, function(err, search) {
  // retrieve all lessons data from main server graphql endpoint
  axios({
    url: 'http://localhost:3000/graphql',
    method: 'post',
    data: {
      query: `
        query {
          lessons {
            id
            title
            description
            category
            locationOfService
            difficulty
          }
        }`
    }
  })
    .then((result) => {
      // console.log(JSON.stringify(result.data.data.lessons));
      lessons = result.data.data.lessons;
      initIndex(search, lessons); // index the lessons with their titles and descriptions
    })
    .catch((err) => {
      console.log('ERROR IN HERE');
      // console.error(err)
    });

  // initIndex(search, lessons);

  // handle /search endpoint
  app.get('/search', function(req, res) {
    console.log(req.query.q);
    return searchWithQuery(lessons, search, req.query.q, res);
  });

  app.listen(port, function() {
    // start at `port`
    console.log('Listening at', port); // we're loaded - let the console know
  });
});

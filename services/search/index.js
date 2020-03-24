const express = require('express'), // simple web server module
  redsearch = require('redredisearch'), // RedRediSearch, syntax compatible with Reds
  redis = require('redis'), // node_redis module
  axios = require('axios'),
  client = redis.createClient({ host: 'redisearch', port: 6379 }), // create a Redis client with the Node_redis connection object
  port = 2000; // load search service on 2000

const initIndex = require('./model/index.js').initIndex;
const searchWithQuery = require('./controller/index.js').searchWithQuery;

const app = express(); // Create server instance

redsearch.setClient(client); // Associate the correct client.

let lessons = []; // Initialize lessons to empty
let queue = [];

const retrieveAndAddIndex = (search) => {
  let start = new Date();
  return axios({
    url: 'http://mainserver:8080/graphql',
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
      console.log(
        '  indexed %d lessons in %ds',
        lessons.length,
        ((new Date() - start) / 1000).toFixed(2)
      );
    })
    .catch((err) => {
      console.log('ERROR IN FETCHING DATA');
      // console.error(err)
    });
};

// create instance of redisearch
redsearch.createSearch('lessons', {}, function(err, search) {
  // retrieve all lessons data from main server graphql endpoint
  retrieveAndAddIndex(search);
  let lastUpdate = new Date();
  // handle /search endpoint
  app.get('/search', function(req, res) {
    console.log(req.query.q);
    if (err) {
      next(err);
    } else {
      // update index database incrementally over time
      // arbitrarily set time to 5 minutes
      // but reindexing triggers only if a client attempt to search
      // TODO: also incrementally update based on database changes
      let now = new Date();
      if ((now - lastUpdate) / 1000 > 300) {
        return retrieveAndAddIndex(search).then(() => {
          console.log(
            '  reindexed %d lessons since %ds ago',
            lessons.length,
            ((now - lastUpdate) / 1000).toFixed(2)
          );
          lastUpdate = new Date();
          searchWithQuery(lessons, search, req.query.q, res);
        });
      }
      return searchWithQuery(lessons, search, req.query.q, res);
    }
  });

  app.listen(port, function() {
    console.log('Listening at', port);
  });
});

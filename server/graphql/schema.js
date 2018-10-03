const graphql = require('graphql');
const RootQuery = require('./rootQueries.js');
const Mutation = require('./mutations.js');

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

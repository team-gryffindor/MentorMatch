const graphql = require('graphql');
const Models = require('../db/index.js');

const {
  UserType,
  LessonType,
  ReviewType,
  FavoriteLessonType,
  ConsumedLessonType
} = require('./types.js');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return Models.User.findById(args.id);
      }
    },
    users: {
      type: GraphQLList(UserType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return Models.User.findAll();
      }
    },
    lesson: {
      type: LessonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return Models.Lesson.findById(args.id);
      }
    },
    lessons: {
      type: GraphQLList(LessonType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return Models.Lesson.findAll();
      }
    }
  }
});

module.exports = RootQuery;

const graphql = require('graphql');
// require('node-fetch');
const Models = require('../db/index.js');

const {
  UserType,
  LessonType,
  ReviewType,
  FavoriteLessonType,
  SignupLessonType,
  LocationType
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
        console.log('This is hit, in server/user');

        return Models.User.findById(args.id);
      }
    },
    checkUser: {
      type: UserType,
      args: { uid: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return Models.User.find({ where: { uid: args.uid } });
      }
    },
    users: {
      type: GraphQLList(UserType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        console.log('This is hit, in server/userS');
        return Models.User.findAll();
      }
    },
    lesson: {
      type: LessonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        console.log('This is hit, in server/lesson');

        return Models.Lesson.findById(args.id);
      }
    },
    lessons: {
      type: GraphQLList(LessonType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        console.log('This is hit, in server/lessons');

        return Models.Lesson.findAll();
      }
    }
  }
});

module.exports = RootQuery;

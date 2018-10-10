const graphql = require('graphql');
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
    },
    location: {
      type: LocationType,
      args: {
        address: { type: GraphQLString }
      },
      resolve(parent, args) {
        var query = args.address.replace(' ', '+');
        return fetch(
          `${process.env.MAP_BASE_URL}/json?address=${query}&key=${process.env.MAP_API_KEY}`
        )
          .then((res) => res.json())
          .then((json) => json.location);
      }
    }
  }
});

module.exports = RootQuery;

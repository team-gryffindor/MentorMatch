const graphql = require('graphql');
const axios = require('axios');
const Models = require('../db/index.js');

const {
  UserType,
  LessonType,
  ReviewType,
  FavoriteLessonType,
  SignupLessonType
  // LocationType
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
      // },
      // location: {
      //   type: LocationType,
      //   args: {
      //     address: { type: GraphQLString }
      //   },
      //   resolve(parent, args) {
      //     var query = args.address.split(' ').join('+');
      //     console.log(
      //       'ADDRESS',
      //       `${process.env.MAP_BASE_URL}/json?address=${query}&key=${process.env.MAP_API_KEY}`
      //     );
      //     return axios
      //       .get(`${process.env.MAP_BASE_URL}/json?`, {
      //         headers: {
      //           address: args.address,
      //           key: process.env.MAP_API_KEY
      //         }
      //       })
      //       .then((res) => {
      //         console.log('RES', res);
      //         res.send;
      //       })
      //       .then((json) => json)
      //       .catch((err) => console.error(err));
      //   }
    }
  }
});

module.exports = RootQuery;

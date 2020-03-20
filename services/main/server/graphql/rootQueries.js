const graphql = require('graphql');
// require('node-fetch');
const { Op } = require('sequelize');
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
        return Models.User.findByPk(args.id);
      }
    },
    checkUser: {
      type: UserType,
      args: { uid: { type: GraphQLID } },
      resolve(parent, args) {
        return Models.User.find({ where: { uid: args.uid } });
      }
    },
    users: {
      type: GraphQLList(UserType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Models.User.findAll();
      }
    },
    lesson: {
      type: LessonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Models.Lesson.findByPk(args.id);
      }
    },
    lessons: {
      type: GraphQLList(LessonType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Models.Lesson.findAll();
      }
    },
    lessonsFiltered: {
      type: GraphQLList(LessonType),
      args: {
        category: { type: GraphQLString },
        cityOfService: { type: GraphQLString },
        stateOfService: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Models.Lesson.findAll({
          where: {
            numOfReviews: {
              [Op.gte]: 10
            },
            category: args.category,
            cityOfService: args.cityOfService,
            stateOfService: args.stateOfService
          },
          include: { model: Models.Review },
          order: [['avgRating', 'DESC']]
        })
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    },
    lessonsFilteredGuest: {
      type: GraphQLList(LessonType),
      args: {
        cityOfService: { type: GraphQLString },
        stateOfService: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Models.Lesson.findAll({
          where: {
            numOfReviews: {
              [Op.gte]: 10
            },
            cityOfService: args.cityOfService,
            stateOfService: args.stateOfService
          },
          include: { model: Models.Review },
          order: [['avgRating', 'DESC']]
        })
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    }
  }
});

module.exports = RootQuery;

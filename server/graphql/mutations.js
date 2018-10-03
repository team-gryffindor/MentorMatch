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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        cityOfResidence: { type: GraphQLString }
      },
      resolve(parent, args) {
        // sequelize to add user
        return Models.User.build({
          name: args.name,
          image: args.image,
          description: args.description,
          cityOfResidence: args.cityOfResidence
        })
          .save()
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    },
    addLesson: {
      type: LessonType,
      args: {
        title: { type: GraphQLString },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        cityOfService: { type: GraphQLString },
        category: { type: GraphQLString },
        difficulty: { type: GraphQLString },
        userId: { type: GraphQLString }
      },
      resolve(parent, args) {
        // sequelize to add user
        return Models.Lesson.build({
          title: args.title,
          description: args.description,
          category: args.category,
          cityOfService: args.cityOfService,
          difficulty: args.difficulty,
          image: args.image,
          userId: args.userId,
          // TODO: refactor later for database to handle default values
          avgRating: 0,
          numOfReviews: 0
        })
          .save()
          .then((data) => {
            return data;
          })
          .catch((err) => console.error(err));
      }
    },
    addReview: {
      type: ReviewType,
      args: {
        title: { type: GraphQLString },
        comment: { type: GraphQLString },
        rating: { type: GraphQLFloat },
        lessonId: { type: GraphQLID },
        userId: { type: GraphQLID }
      },
      resolve(parent, args) {
        // sequelize to add user
        return Models.Review.build({
          title: args.title,
          comment: args.comment,
          rating: args.rating,
          lessonId: args.lessonId,
          userId: args.userId
        })
          .save()
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    },
    addFavoriteLesson: {
      type: FavoriteLessonType,
      args: {
        userId: { type: GraphQLID },
        lessonId: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Models.Favorite.build({
          userId: args.userId,
          lessonId: args.lessonId
        })
          .save()
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    },
    deleteFavoriteLesson: {
      type: FavoriteLessonType,
      args: {
        userId: { type: GraphQLID },
        lessonId: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Models.Favorite.destroy({
          where: {
            userId: args.userId,
            lessonId: args.lessonId
          }
        })
          .then((data) => {
            console.log(data);
            return data;
          })
          .catch((err) => console.error(err));
      }
    },
    addConsumedLesson: {
      type: ConsumedLessonType,
      args: {
        userId: { type: GraphQLID },
        lessonId: { type: GraphQLID },
        date: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Models.Consumed.build({
          userId: args.userId,
          lessonId: args.lessonId,
          date: args.date
        })
          .save()
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    }
    // removeConsumedLesson: {}
  }
});

module.exports = Mutation;

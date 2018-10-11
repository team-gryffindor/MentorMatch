const graphql = require('graphql');
const Models = require('../db/index.js');
const Sequelize = require('sequelize');

const {
  UserType,
  LessonType,
  ReviewType,
  FavoriteLessonType,
  SignupLessonType
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
        uid: { type: GraphQLID },
        name: { type: GraphQLString },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        cityOfResidence: { type: GraphQLString }
      },
      resolve(parent, args) {
        // sequelize to add user
        return Models.User.build({
          uid: args.uid,
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
        userId: { type: GraphQLID }
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
          userId: args.userId
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
        rating: { type: GraphQLInt },
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
          .then((data) => {
            return Promise.all([Models.Lesson.findById(data.dataValues.lessonId), data]);
          })
          .then((data) => {
            let lesson = data[0];
            let rating = data[1];
            lesson.updateAttributes({
              numOfReviews: lesson.dataValues.numOfReviews + 1,
              avgRating: updateRating(
                lesson.dataValues.numOfReviews,
                lesson.dataValues.avgRating,
                rating.dataValues.rating
              )
            });
            return rating;
          })
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
    addSignupLesson: {
      type: SignupLessonType,
      args: {
        userId: { type: GraphQLID },
        lessonId: { type: GraphQLID },
        date: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Models.Signup.build({
          userId: args.userId,
          lessonId: args.lessonId,
          date: args.date
        })
          .save()
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    },
    deleteSignupLesson: {
      type: SignupLessonType,
      args: {
        userId: { type: GraphQLID },
        lessonId: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Models.Signup.destroy({
          where: {
            userId: args.userId,
            lessonId: args.lessonId
          }
        })
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    }
    // removeSignupLesson: {}
  }
});

const updateRating = (q, avg, r) => {
  let result = (q * avg + r) / (q + 1);
  return result;
};

module.exports = Mutation;

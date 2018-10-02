const graphql = require('graphql');
const Models = require('../db/index.js');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    cityOfResidence: { type: GraphQLString },
    image: { type: GraphQLString },
    offeredLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return Models.Lesson.findAll({ where: { userId: parent.id } });
      }
    },
    consumedLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        // needs work
        return Models.Consumed.findAll({ where: { userId: parent.id } });
      }
    },
    favoriteLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return Models.Favorite.findAll({ where: { userId: parent.id } })
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      }
    }
  })
});

const LessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    category: { type: GraphQLString },
    avgRating: { type: GraphQLFloat },
    numOfReviews: { type: GraphQLInt },
    cityOfService: { type: GraphQLString },
    image: { type: GraphQLString },
    date: { type: GraphQLString },
    provider: {
      type: UserType,
      resolve(parent, args) {
        console.log(parent.userId);
        return Models.User.findById(parent.userId);
      }
    },
    reviews: {
      type: GraphQLList(ReviewType),
      resolve(parent, args) {
        return Models.Review.findAll({ where: { lessonId: parent.id } });
      }
    }
  })
});

const ReviewType = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    comment: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    lesson: {
      type: LessonType,
      resolve(parent, args) {
        return Models.Lesson.findById(parent.lessonId);
      }
    }
  })
});

const ConsumedLessonType = new GraphQLObjectType({
  name: 'ConsumedLesson',
  fields: () => ({
    userId: { type: GraphQLID },
    lessonId: { type: GraphQLID }
  })
});

const FavoriteLessonType = new GraphQLObjectType({
  name: 'FavoriteLesson',
  fields: () => ({
    userId: { type: GraphQLID },
    lessonId: { type: GraphQLID }
  })
});

module.exports = {
  UserType: UserType,
  LessonType: LessonType,
  ReviewType: ReviewType,
  ConsumedLessonType: ConsumedLessonType,
  FavoriteLessonType: FavoriteLessonType
};

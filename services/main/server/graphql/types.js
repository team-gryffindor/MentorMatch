const graphql = require('graphql');
const Models = require('../db/index.js');
const { Op } = require('sequelize');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt,
  GraphQLBoolean
} = graphql;

// querying multiple tables: TODO: data.dataValues.*
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    uid: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    locationOfResidence: { type: GraphQLString },
    cityOfResidence: { type: GraphQLString },
    stateOfResidence: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    image: { type: GraphQLString },
    offeredLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return Models.Lesson.findAll({ where: { userId: parent.id } });
      }
    },
    signupLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return Models.Signup.findAll({
          where: { userId: parent.id },
          attributes: ['date'],
          include: { model: Models.Lesson }
        })
          .then((data) => {
            return data.map((signup) => {
              return { ...signup.lesson.dataValues, date: signup.dataValues.date };
            });
          })
          .catch((err) => console.error(err));
      }
    },
    favoriteLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return Models.User.find({
          where: { id: parent.id },
          include: {
            model: Models.Lesson,
            required: false
          }
        })
          .then((data) => data.dataValues.lessons)
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
    locationOfService: { type: GraphQLString },
    cityOfService: { type: GraphQLString },
    stateOfService: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    image: { type: GraphQLString },
    date: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
    price: { type: GraphQLFloat },
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
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        console.log('USERID OF REVIEW', parent.userId);
        return Models.User.findById(parent.userId);
      }
    }
  })
});

const SignupLessonType = new GraphQLObjectType({
  name: 'SignupLesson',
  fields: () => ({
    userId: { type: GraphQLID },
    lessonId: { type: GraphQLID },
    date: { type: GraphQLString }
  })
});

const FavoriteLessonType = new GraphQLObjectType({
  name: 'FavoriteLesson',
  fields: () => ({
    userId: { type: GraphQLID },
    lessonId: { type: GraphQLID }
  })
});

const LocationType = new GraphQLObjectType({
  name: 'Location',
  description: 'Location information of corresponding address from Google Maps Geocode API',
  fields: () => ({
    addressComponents: {
      type: GraphQLList(AddressType),
      resolve(parent, args) {
        // console.log('IN LOCATION TYPE', parent.address_components);
        return parent.address_components;
      }
    }
  })
});

const AddressType = new GraphQLObjectType({
  name: 'Address',
  description: 'Address component from geocode data retrieval',
  fields: () => ({
    long_name: { type: GraphQLString },
    short_name: { type: GraphQLString },
    types: { type: GraphQLList(GraphQLString) }
  })
});

module.exports = {
  UserType: UserType,
  LessonType: LessonType,
  ReviewType: ReviewType,
  SignupLessonType: SignupLessonType,
  FavoriteLessonType: FavoriteLessonType,
  LocationType: LocationType,
  AddressType: AddressType
};

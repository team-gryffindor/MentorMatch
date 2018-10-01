const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;
const models = require('../db/index.js');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    city: { type: GraphQLString },
    imgString: { type: GraphQLString },
    offeredLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return models.Offered.findAll({ where: { userId: parent.id } });
      }
    },
    consumedLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return models.Consumed.findAll({ where: { userId: parent.id } });
      }
    },
    favLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return models.Favorite.findAll({ where: { userId: parent.id } });
      }
    }
  })
});

const LessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    category: { type: GraphQLString },
    location: { type: GraphQLString },
    imgString: { type: GraphQLString },
    provider: {
      type: UserType,
      resolve(parent, args) {
        return models.User.findById(parent.id);
      }
    },
    reviews: {
      type: GraphQLList(ReviewType),
      resolve(parent, args) {
        return models.Review.findAll({ where: { lessonId: parent.id } });
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
    lesson: {
      type: LessonType,
      resolve(parent, args) {
        return models.Lesson.findById(parent.lessonId);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return models.User.findById(args.id);
      }
    },
    users: {
      type: GraphQLList(UserType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return usersEx.find((user) => {
          return user.id === args.id;
        });
      }
    },
    lesson: {
      type: LessonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return models.Lesson.findById(args.id);
      }
    },
    lessons: {
      type: GraphQLList(LessonType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return models.Review.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        imgString: { type: GraphQLString },
        description: { type: GraphQLString },
        location: { type: GraphQLString }
      },
      resolve(parent, args) {
        // sequelize to add user
      }
    },
    addLesson: {
      type: LessonType,
      args: {
        name: { type: GraphQLString },
        imgString: { type: GraphQLString },
        description: { type: GraphQLString },
        location: { type: GraphQLString },
        category: { type: GraphQLString },
        difficulty: { type: GraphQLString },
        userId: { type: GraphQLString }
      },
      resolve(parent, args) {
        // sequelize to add user
      }
    },
    addReview: {
      type: UserType,
      args: {
        title: { type: GraphQLString },
        comment: { type: GraphQLString },
        lessonId: { type: GraphQLString }
      },
      resolve(parent, args) {
        // sequelize to add user
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

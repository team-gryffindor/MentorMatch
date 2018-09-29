const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

// dummy data
const usersEx = [
  {
    id: '1',
    name: 'Raph Nadal',
    description: 'tennis champion',
    location: 'NYC',
    imgString: 'corgi'
  },
  {
    id: '2',
    name: 'Emma Powell',
    description: 'expert violinist',
    location: 'NYC',
    imgString: 'corgi'
  }
];

const lessonsEx = [
  {
    id: '1',
    name: 'tennis',
    description: 'love',
    difficulty: '3,',
    category: 'sports',
    location: 'NYC',
    imgString: 'corgi'
  },
  {
    id: '2',
    name: 'violin',
    description: 'bach',
    difficulty: '5,',
    category: 'music',
    location: 'NYC',
    imgString: 'corgi'
  }
];

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
        return 'offeredLesson';
        // sequelize query
      }
    },
    consumedLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return 'consumedLesson';
      }
    },
    favLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return 'favLesson';
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
        return usersEx.find((user) => {
          return user.id === parent.userId;
        });
      }
    },
    reviews: {
      type: GraphQLList(ReviewType),
      resolve(parent, args) {}
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
      resolve(parent, args) {}
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
        return usersEx.find((user) => {
          return user.id === args.id;
        });
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
        return lessonsEx.find((lesson) => {
          return lesson.id === args.id;
        });
      }
    },
    lessons: {
      type: GraphQLList(LessonType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return usersEx.find((user) => {
          return user.id === args.id;
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

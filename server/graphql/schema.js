const graphql = require('graphql');
const Models = require('../db/index.js');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLFloat
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
        return Models.Offered.findAll({ where: { userId: parent.id } });
      }
    },
    consumedLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return Models.Consumed.findAll({ where: { userId: parent.id } });
      }
    },
    favLessons: {
      type: GraphQLList(LessonType),
      resolve(parent, args) {
        return Models.Favorite.findAll({ where: { userId: parent.id } });
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
    cityOfService: { type: GraphQLString },
    image: { type: GraphQLString },
    provider: {
      type: UserType,
      resolve(parent, args) {
        return Models.User.findById(parent.id);
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
        return Models.Lesson.findById(args.id);
      }
    },
    lessons: {
      type: GraphQLList(LessonType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // queries to db
        return Models.Review.findById(args.id);
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
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        cityOfResidence: { type: GraphQLString }
      },
      resolve(parent, args) {
        // sequelize to add user
        return Models.User.build({
          name: args.name,
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
          userId: args.userId
        })
          .save()
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    },
    addReview: {
      type: UserType,
      args: {
        title: { type: GraphQLString },
        comment: { type: GraphQLString },
        lessonId: { type: GraphQLString },
        rating: { type: GraphQLFloat }
      },
      resolve(parent, args) {
        // sequelize to add user
        return Models.Review.build({
          title: args.title,
          comment: args.comment,
          lessonId: args.lessonId,
          rating: args.rating
        })
          .save()
          .then((data) => data)
          .catch((err) => console.error(err));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

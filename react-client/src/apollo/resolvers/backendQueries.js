import gql from "graphql-tag";

const getUser = gql`
  query($id: ID!) {
    user(id: $id) {
      name
      description
      image
      offeredLessons {
        id
        title
        difficulty
        description
        date
      }
      signupLessons {
        id
        title
        difficulty
        description
        date
      }
      favoriteLessons {
        id
        title
        difficulty
        description
        date
      }
    }
  }
`;

const GET_LESSON = gql`
  query($id: ID!) {
    lesson(id: $id) {
      title
      description
      avgRating
      numOfReviews
    }
  }
`;

const GET_LESSONS = gql`
  {
    lessons {
      title
      id
      avgRating
      numOfReviews
      reviews {
        title
        rating
      }
    }
  }
`;

const AddUser = gql`
  mutation($name: String!, $description: String!, $cityOfResidence: String!, $image: String!) {
    addUser(
      name: $name
      description: $description
      cityOfResidence: $cityOfResidence
      image: $image
    ) {
      name
      description
      cityOfResidence
      image
      id
    }
  }
`;

const AddLesson = gql`
  mutation(
    $title: String!
    $description: String!
    $cityOfService: String!
    $image: String!
    $difficulty: String!
    $userId: ID!
    $category: String!
  ) {
    addLesson(
      title: $title
      cityOfService: $cityOfService
      description: $description
      category: $category
      difficulty: $difficulty
      userId: $userId
    ) {
      title
      description
      cityOfService
      category
      difficulty
      avgRating
      numOfReviews
    }
  }
`;

const AddReview = gql`
  mutation($title: String!, $comment: String!, $rating: Number!, $lessonId: ID!, $userId: ID!) {
    addReview(
      title: $title
      comment: $comment
      lessonId: $lessonId
      rating: $rating
      userId: $userId
    ) {
      title
      comment
      rating
    }
  }
`;

const AddSignupLesson = gql`
  mutation($userId: ID!, $lessonId: ID!, $date: String!) {
    addSignupLesson(userId: $userId, lessonId: $lessonId, date: $date) {
      userId
      lessonId
      date
    }
  }
`;

const AddFavoriteLesson = gql`
  mutation($userId: ID!, $lessonId: ID!) {
    addSignupLesson(userId: $userId, lessonId: $lessonId) {
      userId
      lessonId
    }
  }
`;

export { getUser, GET_LESSON, GET_LESSONS, AddUser, AddLesson, AddReview, AddSignupLesson, AddFavoriteLesson };
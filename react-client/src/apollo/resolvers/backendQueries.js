import gql from 'graphql-tag';

const GET_USER = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      name
      description
      image
      offeredLessons {
        id
        title
        difficulty
        description
        date
        avgRating
        numOfReviews
        provider {
          name
          cityOfResidence
          description
          image
        }
        reviews {
          title
          rating
          user {
            name
            image
            cityOfResidence
          }
        }
        location {
          addressComponents {
            long_name
            short_name
            types
          }
        }
        cityOfService
        lat
        lng
      }
      signupLessons {
        id
        title
        difficulty
        description
        date
        avgRating
        numOfReviews
        provider {
          name
          cityOfResidence
          description
          image
        }
        reviews {
          title
          rating
          user {
            name
            image
            cityOfResidence
          }
        }
        location {
          addressComponents {
            long_name
            short_name
            types
          }
        }
        cityOfService
        lat
        lng
      }
      favoriteLessons {
        id
        title
        difficulty
        description
        date
        avgRating
        numOfReviews
        provider {
          name
          cityOfResidence
          description
          image
        }
        reviews {
          title
          rating
          user {
            name
            image
            cityOfResidence
          }
        }
        location {
          addressComponents {
            long_name
            short_name
            types
          }
        }
        cityOfService
        lat
        lng
      }
    }
  }
`;

const CHECK_USER = gql`
  query($uid: ID!) {
    checkUser(uid: $uid) {
      id
      uid
      name
      description
      image
      cityOfResidence
    }
  }
`;

const GET_USER_SIGNUPS = gql`
  query($id: ID!) {
    user(id: $id) {
      signupLessons {
        id
        title
        date
      }
    }
  }
`;

const GET_USER_FAVORITES = gql`
  query($id: ID!) {
    user(id: $id) {
      favoriteLessons {
        id
      }
    }
  }
`;

const GET_LESSON = gql`
  query($id: ID!) {
    lesson(id: $id) {
      id
      title
      description
      cityOfService
      lat
      lng
      category
      difficulty
      avgRating
      numOfReviews
      provider {
        name
        cityOfResidence
        description
        image
      }
      reviews {
        title
        rating
        user {
          name
          image
          cityOfResidence
        }
      }
      location {
        addressComponents {
          long_name
          short_name
          types
        }
      }
    }
  }
`;

const GET_LESSONS = gql`
  {
    lessons {
      title
      id
      description
      avgRating
      numOfReviews
      provider {
        name
        cityOfResidence
        description
        image
      }
      reviews {
        title
        rating
      }
    }
  }
`;

const ADD_USER = gql`
  mutation(
    $name: String!
    $description: String!
    $cityOfResidence: String!
    $image: String!
    $uid: ID!
    $lat: Float!
    $lng: Float!
  ) {
    addUser(
      name: $name
      description: $description
      cityOfResidence: $cityOfResidence
      image: $image
      uid: $uid
      lat: $lat
      lng: $lng
    ) {
      name
      description
      cityOfResidence
      image
      id
      uid
      lat
      lng
    }
  }
`;

const ADD_LESSON = gql`
  mutation(
    $title: String!
    $description: String!
    $cityOfService: String!
    $image: String!
    $difficulty: String!
    $userId: ID!
    $category: String!
    $lat: Float!
    $lng: Float!
    $price: Float!
  ) {
    addLesson(
      title: $title
      description: $description
      cityOfService: $cityOfService
      image: $image
      difficulty: $difficulty
      userId: $userId
      category: $category
      lat: $lat
      lng: $lng
      price: $price
    ) {
      title
      description
      cityOfService
      image
      category
      difficulty
      avgRating
      numOfReviews
      lat
      lng
      price
    }
  }
`;

const ADD_REVIEW = gql`
  mutation($title: String!, $comment: String!, $rating: Int!, $lessonId: ID!, $userId: ID!) {
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

const ADD_SIGNUP_LESSON = gql`
  mutation($userId: ID!, $lessonId: ID!, $date: String!) {
    addSignupLesson(userId: $userId, lessonId: $lessonId, date: $date) {
      userId
      lessonId
      date
    }
  }
`;

const DELETE_SIGNUP_LESSON = gql`
  mutation($userId: ID!, $lessonId: ID!) {
    deleteSignupLesson(userId: $userId, lessonId: $lessonId) {
      userId
      lessonId
    }
  }
`;

const ADD_FAVORITE_LESSON = gql`
  mutation($userId: ID!, $lessonId: ID!) {
    addFavoriteLesson(userId: $userId, lessonId: $lessonId) {
      userId
      lessonId
    }
  }
`;

const DELETE_FAVORITE_LESSON = gql`
  mutation($userId: ID!, $lessonId: ID!) {
    deleteFavoriteLesson(userId: $userId, lessonId: $lessonId) {
      userId
      lessonId
    }
  }
`;

const DELETE_LESSON = gql`
  mutation($id: ID!) {
    deleteLesson(id: $id) {
      isActive
    }
  }
`;

export {
  GET_USER,
  CHECK_USER,
  GET_USER_FAVORITES,
  GET_LESSON,
  GET_LESSONS,
  GET_USER_SIGNUPS,
  ADD_USER,
  ADD_LESSON,
  ADD_REVIEW,
  ADD_SIGNUP_LESSON,
  ADD_FAVORITE_LESSON,
  DELETE_FAVORITE_LESSON,
  DELETE_SIGNUP_LESSON,
  DELETE_LESSON
};

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
        image
        difficulty
        category
        description
        date
        avgRating
        numOfReviews
        provider {
          id
          name
          locationOfResidence
          description
          image
        }
        reviews {
          title
          rating
          user {
            name
            image
            locationOfResidence
          }
        }
        locationOfService
        lat
        lng
        price
        isActive
      }
      signupLessons {
        id
        title
        image
        difficulty
        category
        description
        date
        avgRating
        numOfReviews
        provider {
          id
          name
          locationOfResidence
          description
          image
        }
        reviews {
          title
          rating
          user {
            name
            image
            locationOfResidence
          }
        }
        locationOfService
        lat
        lng
        price
        isActive
      }
      favoriteLessons {
        id
        title
        image
        difficulty
        category
        description
        date
        avgRating
        numOfReviews
        provider {
          id
          name
          locationOfResidence
          description
          image
        }
        reviews {
          title
          rating
          user {
            name
            image
            locationOfResidence
          }
        }
        locationOfService
        lat
        lng
        price
        isActive
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
      locationOfResidence
      lat
      lng
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
      image
      description
      locationOfService
      lat
      lng
      category
      difficulty
      avgRating
      numOfReviews
      price
      provider {
        id
        name
        locationOfResidence
        description
        image
      }
      reviews {
        title
        rating
        user {
          name
          image
          locationOfResidence
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
      category
      avgRating
      numOfReviews
      cityOfService
      stateOfService
      provider {
        id
        name
        locationOfResidence
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

const UPDATE_USER = gql`
  mutation(
    $id: ID!
    $name: String!
    $description: String!
    $locationOfResidence: String!
    $image: String!
    $lat: Float!
    $lng: Float!
    $cityOfService: String!
    $stateOfService: String!
  ) {
    updateUser(
      id: $id
      name: $name
      description: $description
      locationOfResidence: $locationOfResidence
      image: $image
      lat: $lat
      lng: $lng
      cityOfService: $cityOfService
      stateOfService: $stateOfService
    ) {
      name
      description
      locationOfResidence
      image
      id
      lat
      lng
      cityOfService
      stateOfService
    }
  }
`;

const ADD_USER = gql`
  mutation(
    $name: String!
    $description: String!
    $locationOfResidence: String!
    $image: String!
    $uid: ID!
    $lat: Float!
    $lng: Float!
    $cityOfResidence: String!
    $stateOfResidence: String!
  ) {
    addUser(
      name: $name
      description: $description
      locationOfResidence: $locationOfResidence
      image: $image
      uid: $uid
      lat: $lat
      lng: $lng
      cityOfResidence: $cityOfResidence
      stateOfResidence: $stateOfResidence
    ) {
      name
      description
      locationOfResidence
      image
      id
      uid
      lat
      lng
      cityOfResidence
      stateOfResidence
    }
  }
`;

const ADD_LESSON = gql`
  mutation(
    $title: String!
    $description: String!
    $locationOfService: String!
    $cityOfService: String!
    $stateOfService: String!
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
      locationOfService: $locationOfService
      image: $image
      difficulty: $difficulty
      userId: $userId
      category: $category
      lat: $lat
      lng: $lng
      cityOfService: $cityOfService
      stateOfService: $stateOfService
      price: $price
    ) {
      title
      description
      locationOfService
      image
      category
      difficulty
      avgRating
      numOfReviews
      lat
      lng
      price
      cityOfService
      stateOfService
    }
  }
`;

const UPDATE_LESSON = gql`
  mutation(
    $id: ID!
    $title: String!
    $description: String!
    $locationOfService: String!
    $image: String!
    $difficulty: String!
    $category: String!
    $lat: Float!
    $lng: Float!
    $cityOfService: String!
    $stateOfService: String!
    $price: Float!
  ) {
    updateLesson(
      id: $id
      title: $title
      description: $description
      locationOfService: $locationOfService
      image: $image
      difficulty: $difficulty
      category: $category
      lat: $lat
      lng: $lng
      cityOfService: $cityOfService
      stateOfService: $stateOfService
      price: $price
    ) {
      id
      title
      description
      locationOfService
      image
      category
      difficulty
      avgRating
      numOfReviews
      lat
      lng
      cityOfService
      stateOfService
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
  DELETE_LESSON,
  UPDATE_USER,
  UPDATE_LESSON
};

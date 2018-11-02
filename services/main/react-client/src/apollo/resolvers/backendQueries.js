import gql from 'graphql-tag';

const GET_USER = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      name
      description
      image
      locationOfResidence
      cityOfResidence
      stateOfResidence
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
          cityOfResidence
          stateOfResidence
          description
          image
        }
        reviews {
          id
          title
          comment
          rating
          user {
            name
            image
            locationOfResidence
            cityOfResidence
            stateOfResidence
          }
        }
        locationOfService
        cityOfService
        stateOfService
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
          cityOfResidence
          stateOfResidence
          description
          image
        }
        reviews {
          id
          title
          comment
          rating
          user {
            name
            image
            locationOfResidence
            cityOfResidence
            stateOfResidence
          }
        }
        locationOfService
        cityOfService
        stateOfService
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
          cityOfResidence
          stateOfResidence
          description
          image
        }
        reviews {
          id
          title
          comment
          rating
          user {
            name
            image
            locationOfResidence
            cityOfResidence
            stateOfResidence
          }
        }
        locationOfService
        cityOfService
        stateOfService
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
      cityOfResidence
      stateOfResidence
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
      cityOfService
      stateOfService
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
        cityOfResidence
        stateOfResidence
        description
        image
      }
      reviews {
        id
        title
        comment
        rating
        user {
          name
          image
          locationOfResidence
          cityOfResidence
          stateOfResidence
        }
      }
    }
  }
`;

const GET_LESSONS_FILTERED = gql`
  query($category: String!, $cityOfService: String!, $stateOfService: String!) {
    lessonsFiltered(
      category: $category
      cityOfService: $cityOfService
      stateOfService: $stateOfService
    ) {
      id
    }
  }
`;

const GET_LESSONS_FILTERED_GUEST = gql`
  query($cityOfService: String!, $stateOfService: String!) {
    lessonsFilteredGuest(cityOfService: $cityOfService, stateOfService: $stateOfService) {
      id
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
      locationOfService
      cityOfService
      stateOfService
      provider {
        id
        name
        locationOfResidence
        cityOfResidence
        stateOfResidence
        description
        image
      }
      reviews {
        id
        title
        rating
        comment
        user {
          name
          image
          locationOfResidence
          cityOfResidence
          stateOfResidence
        }
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
    $cityOfResidence: String!
    $stateOfResidence: String!
    $image: String!
    $lat: Float!
    $lng: Float!
  ) {
    updateUser(
      id: $id
      name: $name
      description: $description
      locationOfResidence: $locationOfResidence
      cityOfResidence: $cityOfResidence
      stateOfResidence: $stateOfResidence
      image: $image
      lat: $lat
      lng: $lng
    ) {
      name
      description
      locationOfResidence
      cityOfResidence
      stateOfResidence
      image
      id
      lat
      lng
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
      cityOfResidence: $cityOfResidence
      stateOfResidence: $stateOfResidence
      image: $image
      uid: $uid
      lat: $lat
      lng: $lng
    ) {
      name
      description
      locationOfResidence
      cityOfResidence
      stateOfResidence
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
      cityOfService
      stateOfService
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
      cityOfService: $cityOfService
      stateOfService: $stateOfService
      image: $image
      difficulty: $difficulty
      category: $category
      lat: $lat
      lng: $lng
      price: $price
    ) {
      id
      title
      description
      locationOfService
      cityOfService
      stateOfService
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
      id
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
  GET_LESSONS_FILTERED,
  GET_LESSONS_FILTERED_GUEST,
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

import { gql } from 'apollo-boost';

export const AddUser = gql`
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

export const AddLesson = gql`
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

export const AddReview = gql`
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

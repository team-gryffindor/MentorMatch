import { gql } from 'apollo-boost';

export const getUser = gql`
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

export const getLesson = gql`
  query($id: ID!) {
    lesson(id: $id) {
      title
      description
      avgRating
      numOfReviews
    }
  }
`;

import { gql } from 'apollo-boost';


export const getUserInfoQuery = gql`
  {
    users {
      name
      description
      cityOfResidence
    }
  }
`;

export const getActiveLessonsQuery = gql`
{
  lessons {
    title
    description
    difficulty
    avgRating
    image
  }
}
`;


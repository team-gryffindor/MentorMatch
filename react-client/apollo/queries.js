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


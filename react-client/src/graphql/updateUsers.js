import gql from 'graphql-tag';

export const updateCurrentUser = gql`
  mutation updateCurrentUser($name: String!) {
    updateCurrentUser(name: $name) @client {
      currentUsers
    }
  }
`;
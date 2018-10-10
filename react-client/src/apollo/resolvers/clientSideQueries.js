import gql from 'graphql-tag';

export const UPDATE_USER_INFO = gql`
  mutation updateUserInfo(
    $theUserId: ID!
    $theUserName: String!
    $theDescription: String!
    $theCityOfResidence: String!
    $theImage: String!
  ) {
    updateUserInfo(
      theUserId: $theUserId
      theUserName: $theUserName
      theDescription: $theDescription
      theCityOfResidence: $theCityOfResidence
      theImage: $theImage
    ) @client {
        userId
        username
        description
        cityOfResidence
        image
    }
  }
`;
export const GET_USER_INFO = gql`
  query {
    mentorMatch @client {
      userId
      username
      description
      cityOfResidence
      image
    }
  }
`;

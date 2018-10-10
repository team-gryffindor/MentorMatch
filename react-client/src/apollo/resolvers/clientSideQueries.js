import gql from 'graphql-tag';

export const UPDATE_USER_INFO = gql`
  mutation UpdateUserInfo(
    $theUserId: ID!
    $theUserName: String!
    $theDescription: String!
    $theCityOfResidence: String!
    $theImage: String!
    $theUid: ID!
  ) {
    updateUserInfo(
      theUserId: $theUserId
      theUserName: $theUserName
      theDescription: $theDescription
      theCityOfResidence: $theCityOfResidence
      theImage: $theImage
      theUid: $theUid
    ) @client {
      userId
      username
      description
      cityOfResidence
      image
      uid
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
      uid
    }
  }
`;




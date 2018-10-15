import gql from 'graphql-tag';

export const UPDATE_USER_INFO = gql`
  mutation UpdateUserInfo(
    $theUserId: ID!
    $theUserName: String!
    $theDescription: String!
    $theCityOfResidence: String!
    $theImage: String!
    $theUid: ID!
    $lat: Float!
    $lng: Float!
  ) {
    updateUserInfo(
      theUserId: $theUserId
      theUserName: $theUserName
      theDescription: $theDescription
      theCityOfResidence: $theCityOfResidence
      theImage: $theImage
      theUid: $theUid
      lat: $lat
      lng: $lng
    ) @client {
      userId
      username
      description
      cityOfResidence
      image
      uid
      lat
      lng
    }
  }
`;
export const GET_USER_INFO = gql`
  query {
    userInfo @client {
      userId
      username
      description
      cityOfResidence
      image
      uid
      lat
      lng
    }
  }
`;

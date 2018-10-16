import gql from 'graphql-tag';

export const UPDATE_USER_INFO = gql`
  mutation UpdateUserInfo(
    $theUserId: ID!
    $theUserName: String!
    $theDescription: String!
    $thelocationOfResidence: String!
    $theImage: String!
    $theUid: ID!
  ) {
    updateUserInfo(
      theUserId: $theUserId
      theUserName: $theUserName
      theDescription: $theDescription
      thelocationOfResidence: $thelocationOfResidence
      theImage: $theImage
      theUid: $theUid
    ) @client {
      userId
      username
      description
      locationOfResidence
      image
      uid
    }
  }
`;

export const GET_USER_INFO = gql`
  query {
    userInfo @client {
      userId
      username
      description
      locationOfResidence
      image
      uid
      lat
      lng
    }
  }
`;

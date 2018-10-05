import gql from "graphql-tag";

export const UPDATE_USER_INFO = gql`
  mutation ($theUserName: String!, $theDescription: String!, $theCityOfResidence: String!, $theImage: String!) {
    updateUserInfo(theUserName: $theUserName, theDescription: $theDescription, theCityOfResidence: $theCityOfResidence, theImage: $theImage) @client {
      username
      description
      cityOfResidence
      image
    }
  }
`
export const GET_USER_INFO = gql`
  query {
    mentorMatch @client {
      username
      description
      cityOfResidence
      image
    }
  }
`

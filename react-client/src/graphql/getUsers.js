import gql from 'graphql-tag';

export const getUsersQuery = gql `
  query {
    mentorMatch @client {
      currentUsers
    }
  }
  `;

export const getUsersOptions = ({
  props: ({
    data: {
      mentorMatch
    }
  }) => ({
    mentorMatch
  })
});

 
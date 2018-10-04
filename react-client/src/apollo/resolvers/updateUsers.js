import gql from 'graphql-tag';

export default (_, { name }, { cache }) => {
  const query = gql`
    query GetUsersQuery {
      mentorMatch @client {
        currentUsers
      }
    }
  `;
  
  const previousState = cache.readQuery({ query });
  // const newUsers = previousState.mentorMatch.currentUsers.push(name);
  console.log('Previos State:', previousState)
  console.log('NAME:', name)
  console.log('query', query)

  const change = {
    mentorMatch: {
      ...previousState.mentorMatch,
        currentUsers: name,
    },
  };
  console.log('DATA:', change);
  
  cache.writeQuery({
    query,
    data: change
  
  });
  
  return null;
};

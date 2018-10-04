import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { withState } from 'recompose';
import { gql } from 'apollo-boost';
import { getUsersQuery } from '../graphql';

const Search = () => (
  <Query query={getUsersQuery}>
    {({ loading, error, data }) => {
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;

      return <h1>{data.mentorMatch.currentUsers}</h1>

    }}
  </Query>
);

export default Search;

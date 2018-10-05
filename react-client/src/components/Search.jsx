import React from 'react';
import { Query } from 'react-apollo';
import { GET_LESSONS } from '../apollo/resolvers/backendQueries.js';

const Search = () => (
  <Query query={GET_LESSONS}>
    {({ loading, error, data }) => {
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
      return (
      <ul>
        {data.lessons.map((lesson) => {
          return (
            <div>
              <h1>{lesson.title}</h1>
              <h2>{lesson.avgRating}</h2>
            </div>
          )
    
        })}
      </ul>
      )
    }}
  </Query>
);

export default Search;


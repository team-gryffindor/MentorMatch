import React from 'react';
import Header from './Header.jsx';
import LessonListItem from './LessonListItem.jsx';
import { graphql, Query } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';
import { database } from 'firebase';

const FeaturedLesson = (props) => {
  return (
    <Query query={GET_LESSON} variables={{ id: 1 }}>
      {({ loading, error, data }) => {
        if (error) return <h1>error</h1>;
        if (loading) return <div> Loading test ...</div>;
        console.log('featured lesson', data);
        return (
          <div>
            {/* <img src={service.profilePicture} /> */}
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>
            <button>Book Now</button>
          </div>
        );
      }}
    </Query>
  );
};

export default FeaturedLesson;

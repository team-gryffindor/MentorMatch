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
        if (loading) {
          return <div> Loading test ...</div>;
        } else {
          console.log(data);
          return (
            <div className='jumbotron'>
              {/* <img src={service.profilePicture} /> */}
              <h1 className="display-4">{data.lesson.title}</h1>
              <small className="text">
                <p style={{ textAlign: 'right' }}>
                  Location: {data.lesson.cityOfService}
                  <br />
                  Difficulty: {data.lesson.difficulty}
                </p>
              </small>
              <p className="lead">{data.lesson.description}</p>
              <h2> Offered by {data.lesson.provider.name}</h2>
              <p className="lead text-right">
                <button className="btn btn-highlight btn-lg" href="#" role="button" onClick={(evt) => props.scheduleEvent(data.lesson)}>
                  Book Now
                </button>
              </p>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default FeaturedLesson;

import React from 'react';
import Header from './Header.jsx';
import LessonListItem from './LessonListItem.jsx';
import { graphql, Query } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';
import { database } from 'firebase';
import LessonDetailHeader from './LessonDetailHeader.jsx';
import MentorInfo from './MentorInfo.jsx';

const FeaturedLesson = (props) => {
  return (
    <Query query={GET_LESSON} variables={{ id: 1 }}>
      {({ loading, error, data }) => {
        if (error) return <h1>error</h1>;
        if (loading) {
          return <div> Loading test ...</div>;
        } else {
          console.log(data.lesson);
          return (
            <div>
              <h2>Today's Featured Lesson</h2>
              <div className="lesson-detail-header-margin-top">
                <div className="jumbotron">
                  <span className="badge badge-pill badge-info">{data.lesson.category}</span>
                  <div className="d-flex w-100 justify-content-between">
                    <h1 className="display-4">{data.lesson.title}</h1>
                    <small className="text">
                      <p style={{ textAlign: 'right' }}>
                        Location: {data.lesson.cityOfService}
                        <br />
                        Difficulty: {data.lesson.difficulty}
                      </p>
                    </small>
                  </div>
                  <h4>About your Lesson</h4>
                  <p className="lead">{data.lesson.description}</p>
                  <hr className="my-4" />
                  <MentorInfo provider={data.lesson.provider} />
                  <p className="lead text-right">
                    <a className="btn btn-info btn-lg" href="#" role="button">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default FeaturedLesson;

import React from 'react';
import StarRatings from 'react-star-ratings';
import { Query } from 'react-apollo';
import { GET_LESSON } from '../apollo/resolvers/backendQueries.js';
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
                  <span className="badge badge-pill badge-primary">{data.lesson.category}</span>
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
                  <div>
                    <StarRatings
                      rating={Number(data.lesson.avgRating.toFixed(2))}
                      starRatedColor="#0078E0"
                      numberOfStars={5}
                      starDimension="15px"
                      starSpacing="1px"
                      name="rating"
                    />
                    <small className="text-muted review-margin-left">
                      {data.lesson.numOfReviews} Reviews
                    </small>
                  </div>
                  <br />
                  <h4>About your Lesson</h4>
                  <p className="lead">{data.lesson.description}</p>
                  <hr className="my-4" />
                  <MentorInfo provider={data.lesson.provider} />
                  <p className="lead text-right">
                    <a className="btn btn-primary btn-lg" href="#" role="button">
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
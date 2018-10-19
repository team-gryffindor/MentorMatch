import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_LESSON } from '../../apollo/resolvers/backendQueries.js';
import { extractCityState } from '../../util/addressHelper.js';
import StarRatings from 'react-star-ratings';

const FeaturedLesson = (props) => {
  console.log('inside featured lesson', props.userId);
  return (
    <Query query={GET_LESSON} variables={{ id: 242 }}>
      {({ loading, error, data }) => {
        if (error) return <h1>error</h1>;
        if (loading) {
          return null;
        } else if (data.lesson) {
          console.log(data.lesson);
          let { lesson } = data;
          // let { city, state } = extractCityState(lesson.location.addressComponents);
          return (
            <div>
              <Link
                to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <h4 id="featuredTitle">Today's Featured Lesson</h4>
                <div className="lesson-detail-header-margin-top">
                  <div className="jumbotron jumbotron-fluid" id="rcorners4">
                    <span className="badge badge-pill badge-primary">{lesson.category}</span>
                    <div className="d-flex w-100 justify-content-between">
                      <h1 className="display-4">{lesson.title}</h1>
                      <small className="text">
                        <p style={{ textAlign: 'right' }}>
                          Location: {lesson.cityOfService}, {lesson.stateOfService}
                          <br />
                          Difficulty: {lesson.difficulty}
                        </p>
                      </small>
                    </div>
                    <div>
                      <StarRatings
                        rating={Number(lesson.avgRating.toFixed(2))}
                        starRatedColor="#0078E0"
                        numberOfStars={5}
                        starDimension="15px"
                        starSpacing="1px"
                        name="rating"
                      />
                      <small className="text-muted review-margin-left">
                        {lesson.numOfReviews} Reviews
                      </small>
                    </div>
                    <br />
                    <h4>About your Lesson</h4>
                    <p className="lead">{lesson.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        } else {
          return <React.Fragment />;
        }
      }}
    </Query>
  );
};

export default FeaturedLesson;

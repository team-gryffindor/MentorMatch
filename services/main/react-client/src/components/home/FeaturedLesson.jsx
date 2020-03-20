import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_LESSON } from '../../apollo/resolvers/backendQueries.js';
import { extractCityState } from '../../util/addressHelper.js';
import StarRatings from 'react-star-ratings';

const FeaturedLesson = (props) => {
  return (
    <Query query={GET_LESSON} variables={{ id: 426 }}>
      {({ loading, error, data }) => {
        if (error) return <h1>error</h1>;
        if (loading) {
          return null;
        } else if (data.lesson) {
          let { lesson } = data;
          // let { city, state } = extractCityState(lesson.location.addressComponents);
          return (
            <div>
              <h4 id="featuredTitle">Today's Featured Lesson</h4>
              <Link
                to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}
                style={{ textDecoration: 'none', color: 'black' }}
              >
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
                    <hr className="my-4" />
                    <div>
                      <img
                        className="profile-image"
                        src={lesson.provider.image}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '../Default.png';
                        }}
                        alt={'mentor image'}
                      />
                      {/* <img src={lesson.provider.image} className="profile-image" /> */}
                      <h4>About your mentor, {lesson.provider.name}</h4>
                      <p>{lesson.provider.description}</p>
                    </div>
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

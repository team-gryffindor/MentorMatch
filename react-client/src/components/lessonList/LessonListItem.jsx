import React from 'react';
import { Query } from 'react-apollo';
import { GET_LESSON } from '../../apollo/resolvers/backendQueries.js';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { extractCityState } from '../../util/addressHelper.js';

const LessonListItem = ({ lessonId }) => {
  return (
    <Query query={GET_LESSON} variables={{ id: lessonId }}>
      {({ loading, error, data }) => {
        if (error) return <p>Error! Could not retrieve the lesson.</p>;
        if (loading || !data) return null;
        let { lesson } = data;
        let [breakPt, endPt] = [70, 70];
        let displayedDescription = lesson.description.slice(0, breakPt);
        while (lesson.description[endPt] !== ' ' && lesson.description[endPt] !== undefined) {
          
          endPt++;
        }
        displayedDescription += lesson.description.slice(breakPt, endPt) + '...';
        // let { city, state } = extractCityState(data.lesson.location.addressComponents);
        return (
          <Link
            to={{
              pathname: `/lessonContent/${lessonId}`,
              state: { lesson }
            }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="row">
                <div className="col-md-3">
                  <img
                    className="list-img-left"
                    src={lesson.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '../stock.jpg';
                    }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{lesson.title}</h5>
                    <small className="text-muted">
                      {lesson.cityOfService}, {lesson.stateOfService}
                    </small>
                  </div>
                  {/* <p className="mb-1">{lesson.description}</p> */}
                  <p className="mb-1">{displayedDescription}</p>
                  <StarRatings
                    rating={Number(lesson.avgRating.toFixed(2))}
                    starRatedColor="blue"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing="1px"
                    name="rating"
                  />
                  <small className="text-muted review-margin-left">
                    {lesson.numOfReviews} Reviews
                  </small>
                </div>
              </div>
            </div>
          </Link>
        );
      }}
    </Query>
  );
};
export default LessonListItem;

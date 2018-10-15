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
        if (error) return <p>Error! Could not retrieve the results.</p>;
        if (loading || !data) return <p>Loading Results...</p>;
        let { lesson } = data.lesson;
        let { city, state } = extractCityState(lesson.location.addressComponents);
        return (
          <Link
            to={{
              pathname: `/lessonContent/${lessonId}`,
              state: { lesson: data.lesson }
            }}
          >
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{lesson.title}</h5>
                <small className="text-muted">
                  {city}, {state}
                </small>
              </div>
              <p className="mb-1">{lesson.description}</p>
              <StarRatings
                rating={Number(lesson.avgRating.toFixed(2))}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="1px"
                name="rating"
              />
              <small className="text-muted review-margin-left">{lesson.numOfReviews} Reviews</small>
            </div>
          </Link>
        );
      }}
    </Query>
  );
};
export default LessonListItem;
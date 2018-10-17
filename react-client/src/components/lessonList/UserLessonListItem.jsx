import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const UserLessonListItem = ({ lesson, taken, userId }) => {
  // let { city, state } = extractCityState(lesson.location.addressComponents);
  if (lesson.isActive) {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <Link
          to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{lesson.title}</h5>
            <small className="text-muted">
              {lesson.cityOfService}, {lesson.stateOfService}
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
        </Link>
        {taken ? (
          <Link
            to={{
              pathname: `/writeReview/${lesson.id}`,
              lesson: { lesson: lesson },
              userId: { userId: userId }
            }}
          >
            Leave a review!
          </Link>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start disabled-lesson">
        <div className="d-flex w-100 justify-content-between ">
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
    );
  }
};

export default UserLessonListItem;

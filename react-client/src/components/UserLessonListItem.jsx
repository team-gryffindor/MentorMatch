import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const UserLessonListItem = ({ lesson }) => {
  console.log(lesson.location.addressComponents);
  return (
    <div>
      <Link to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}>
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{lesson.title}</h5>
            <small className="text-muted">{lesson.cityOfService}</small>
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
    </div>
  );
};

export default UserLessonListItem;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const UserLessonListItem = ({ lesson, taken, userId }) => {
  let [breakPt, endPt] = [70, 70];
  let displayedDescription = lesson.description.slice(0, breakPt);
  while (lesson.description[endPt] !== ' ' && lesson.description[endPt] !== undefined) {
    // console.log(lesson.description[endPt]);
    endPt++;
  }
  displayedDescription += lesson.description.slice(breakPt, endPt) + '...';
  // console.log(lesson.description);
  // console.log(displayedDescription);
  if (lesson.isActive) {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <Link
          to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
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
              <p className="mb-1">{displayedDescription}</p>
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
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start disabled-lesson">
        <div className="d-flex w-100 justify-content-between ">
          <h5 className="mb-1">{lesson.title}</h5>
          <small className="text-muted">
            {lesson.cityOfService}, {lesson.stateOfService}
          </small>
        </div>
        <p className="mb-1">{displayedDescription}</p>
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

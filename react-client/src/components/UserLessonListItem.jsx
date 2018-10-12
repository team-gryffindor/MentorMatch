import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { DELETE_LESSON } from '../apollo/resolvers/backendQueries.js';
import { Mutation } from 'react-apollo';

const UserLessonListItem = ({ lesson }) => {
  console.log(lesson);
  for (let comp in lesson.location.addressComponents) {
    let shortname = comp[1]; 
    if (comp[2] === ) let city = shortname
    else if (comp[2] === ) let state = shortname
  }
  return (
    <div>
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <Link to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}>
            <h5 className="mb-1">{lesson.title}</h5>
          </Link>
          <small className="text-muted">{}</small>
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
        <Mutation mutation={DELETE_LESSON}>
          {(deleteLesson) => (
            <button
              onClick={() => {
                deleteLesson({
                  variables: { id: lesson.id }
                })
                  .then((data) => data)
                  .catch((err) => console.error(err));
              }}
            >
              Delete Lesson
            </button>
          )}
        </Mutation>
        <small className="text-muted review-margin-left">{lesson.numOfReviews} Reviews</small>
      </div>
    </div>
  );
};

export default UserLessonListItem;

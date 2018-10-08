import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const UserLessonListItem = ({ lesson }) => (
  <div>
    <Link to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}>
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{lesson.title}</h5>
          <small className="text-muted">{lesson.cityOfService}</small>
        </div>
        <p className="mb-1">{lesson.description}</p>
        <small className="text-muted">
          {lesson.avgRating}
          /5.0 of {lesson.numOfReviews} Reviews{' '}
        </small>
      </div>
    </Link>
  </div>
);

export default UserLessonListItem;

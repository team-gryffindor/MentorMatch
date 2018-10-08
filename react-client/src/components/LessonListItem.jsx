import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LessonListItem = ({ lesson }) => (
  <li className="list-group-item">
    <Link to={{ pathname: `/lessoncontent/${lesson.id}`, state: { lesson: lesson } }}>
      <h5 className="mb-1"> {lesson.title}</h5>
      <small>
        {lesson.avgRating}
        /5.0
      </small>
      <small>{lesson.numOfReviews} reviews</small>
      <p>{lesson.description}</p>
    </Link>
  </li>
);

export default LessonListItem;

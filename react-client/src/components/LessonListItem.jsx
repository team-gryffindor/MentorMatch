import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LessonListItem = ({ lesson }) => (
  <div>
    <Link to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}>
      <h3> {lesson.title}</h3>
    </Link>
    <span>
      rating: {lesson.avgRating} <br /> {lesson.numOfReviews} reviews
    </span>
    <p>{lesson.description}</p>
  </div>
);

export default LessonListItem;

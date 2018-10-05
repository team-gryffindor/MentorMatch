import React from 'react';

const LessonListItem = ({ lesson }) => (
  <div>
    <h3> {lesson.title}</h3>
    <span>
      rating: {lesson.avgRating} <br /> {lesson.numOfReviews} reviews
    </span>
    <p>{lesson.description}</p>
  </div>
);

export default LessonListItem;

import React from 'react';
import ReviewList from './ReviewList.jsx';

const Reviews = ({ lesson }) => (
  <div>
    <h3>
      {lesson.numOfReviews} reviews from people who took
      {lesson.provider.name}
      's lesson
      <br />
    </h3>
    <ReviewList reviews={lesson.reviews} />
  </div>
);

export default Reviews;

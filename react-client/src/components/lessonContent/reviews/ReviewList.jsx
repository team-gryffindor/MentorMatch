import React from 'react';

import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = ({ reviews }) => (
  <div>
    {/* doing i for key for now, will use id or some sort later */}
    {reviews.map((review, i) => (
      <ReviewListItem review={review} key={i} />
    ))}
  </div>
);

export default ReviewList;

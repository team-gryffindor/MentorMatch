import React from 'react';

import ReviewListItem from './ReviewListItem.jsx';

// Reverse map to allow latest comment to be at top
function mapReverse(array, fn) {
  return array.reduceRight(function(result, el) {
    result.push(fn(el));
    return result;
  }, []);
}

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {/* doing i for key for now, will use id or some sort later */}
      {mapReverse(reviews, (review) => (
        <ReviewListItem review={review} key={review.id} />
      ))}
    </div>
  );
};

export default ReviewList;

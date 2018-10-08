import React from 'react';
// import Header from './Header.jsx';
import FeedListItem from './FeedListItem.jsx';
// import { graphql } from 'react-apollo';
import { database } from 'firebase';

const FeedList = ({ lessonIds }) => (
  <div>
    {lessonIds.map((lessonId) => {
      return <FeedListItem lessonId={lessonId} />;
    })}
  </div>
);

export default FeedList;
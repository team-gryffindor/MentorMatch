import React from 'react';
import LessonList from '../lessonList/LessonList.jsx';

const Feed = ({ location }) => {
  console.log('PROPS IN FEED', location);
  return (
    <div className="container">
      <h1>
        Search Results for "{location.state.serviceQuery}" near {location.state.locationQuery}{' '}
      </h1>
      <LessonList lessonIds={location.state.lessonIds} />
    </div>
  );
};

export default Feed;

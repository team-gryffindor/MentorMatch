import React from 'react';
import HorizontalLessonItem from './HorizontalLessonItem.jsx';

const LessonList = ({ lessonIds }) => {
  console.log('LESSONIDS from LESSONLIST', lessonIds);

  return (
    <div className="scrolling-wrapper">
      {lessonIds.map((lessonId) => {
        console.log(lessonId);
        return <HorizontalLessonItem lessonId={lessonId} key={lessonId} />;
      })}
    </div>
  );
};

export default LessonList;
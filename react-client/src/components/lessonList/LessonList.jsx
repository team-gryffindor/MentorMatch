import React from 'react';
import LessonListItem from './LessonListItem.jsx';

const LessonList = ({ lessonIds }) => {
  console.log('LESSONIDS from LESSONLIST', lessonIds);
  return (
    <div className="list-group">
      {lessonIds.map((lessonId) => {
        console.log(lessonId);
        return <LessonListItem lessonId={lessonId} key={lessonId} />;
      })}
    </div>
  );
};

export default LessonList;
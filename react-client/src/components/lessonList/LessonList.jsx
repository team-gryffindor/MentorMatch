import React from 'react';
import LessonListItem from './LessonListItem.jsx';

const LessonList = ({ lessonIds }) => {
  
  return (
    <div className="list-group">
      {lessonIds.map((lessonId) => {
        
        return <LessonListItem lessonId={lessonId} key={lessonId} />;
      })}
    </div>
  );
};

export default LessonList;
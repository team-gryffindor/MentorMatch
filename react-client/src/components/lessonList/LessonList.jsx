import React from 'react';
import LessonListItem from './LessonListItem.jsx';

const LessonList = ({ lessonIds }) => {
  console.log('LESSONIDS from LESSONLIST', lessonIds);
  return (
    <div className="wrapper">
      <div className='module-section'>
        <ul id='content'>
          {lessonIds.map((lessonId) => {
            console.log(lessonId);
            return <LessonListItem lessonId={lessonId} key={lessonId} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LessonList;

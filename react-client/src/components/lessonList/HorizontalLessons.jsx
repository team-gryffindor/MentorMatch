import React from 'react';
import HorizontalLessonItem from './HorizontalLessonItem.jsx';

const LessonList = ({ lessonIds }) => {
  console.log('LESSONIDS from LESSONLIST', lessonIds);
  
  return (
    <div className="wrapper">
      <div className='module-section'>
        <ul className='netflixCarousel' id='content'>
          {lessonIds.map((lessonId) => {
            console.log(lessonId);
            return <HorizontalLessonItem lessonId={lessonId} key={lessonId} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LessonList;
import React from 'react';
import HorizontalLessonItem from './HorizontalLessonItem.jsx';

const LessonList = ({ lessonIds }) => {
  console.log('LESSONIDS from LESSONLIST', lessonIds);

  let lessonsToDisplay = [];

  for (let i = 0; i <= 17; i++) {
    lessonsToDisplay.push(lessonIds[i]);
  }
  
  return (
    <div className="wrapper">
      <div className='module-section'>
        <ul className='netflixCarousel' id='content'>
          {lessonsToDisplay.map((lessonId) => {
            console.log(lessonId);
            return <HorizontalLessonItem lessonId={lessonId} key={lessonId} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LessonList;
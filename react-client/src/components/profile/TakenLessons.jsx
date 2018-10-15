import React from 'react';
import UserLessonList from '../lessonList/UserLessonList.jsx';

const TakenLessons = ({ user }) => (
  <div>
    <h3>Taken Lessons </h3>
    <UserLessonList userId={user.userId} lessonType="signupLessons" upcoming={false} />
  </div>
);
export default TakenLessons;

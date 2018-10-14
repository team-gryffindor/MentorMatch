import React from 'react';
import UserLessonList from './UserLessonList.jsx';

const UpcomingLessons = ({ user }) => (
  <div>
    <h3>Upcoming Lessons</h3>
    <UserLessonList userId={user.userId} lessonType="signupLessons" upcoming={true} />
  </div>
);
export default UpcomingLessons;

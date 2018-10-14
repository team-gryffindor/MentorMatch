import React from 'react';
import { Link } from 'react-router-dom';
import UserLessonList from './UserLessonList.jsx';

const OfferedLessons = ({ user }) => {
  console.log('USER IN OFFERED LESSONS', user);
  return (
    <div>
      <h3>Offered Lessons</h3>
      <Link to="/addLesson">
        <button>Add Lesson!</button>
      </Link>
      <UserLessonList userId={user.userId} lessonType="offeredLessons" />
    </div>
  );
};
export default OfferedLessons;

import React from 'react';
import { Link } from 'react-router-dom';

import UserLessonList from '../../lessonList/UserLessonList.jsx';

const OfferedLessons = ({ user }) => {
  console.log('USER IN OFFERED LESSONS', user);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3>Offered Lessons</h3>
        <Link to="/addLesson">
          <button className="btn btn-primary mb-2">Add Lesson!</button>
        </Link>
      </div>
      <UserLessonList userId={user.userId} lessonType={'offeredLessons'} />
    </div>
  );
};
export default OfferedLessons;

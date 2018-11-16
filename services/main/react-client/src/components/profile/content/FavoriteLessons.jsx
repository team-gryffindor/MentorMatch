import React from 'react';
import UserLessonList from '../../lessonList/UserLessonList.jsx';

const FavoriteLessons = ({ user }) => (
  <div>
    <h3>Favorite Lessons </h3>
    <UserLessonList userId={user.userId} lessonType="favoriteLessons" />
  </div>
);
export default FavoriteLessons;

import React from 'react';
// import Navigation from './NavigationBar.jsx';
// import Header from './Header.jsx';
import Search from './Search.jsx';
import FeaturedLesson from './FeaturedLesson.jsx';
import UserLessonList from './UserLessonList.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Mentor Match</Link>
        </h1>
        <div>
          <div>
            {/* <Navigation /> */}
            {/* <Search /> */}
          </div>
          <FeaturedLesson />
          <div>
            <h2>Favorites</h2>
            {/* {lessontype tells it to render favorites, offered, or signups} */}
            <UserLessonList lessonType="favoriteLessons" />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

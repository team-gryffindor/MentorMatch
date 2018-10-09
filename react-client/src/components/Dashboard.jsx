import React from 'react';
// import Navigation from './NavigationBar.jsx';
// import Header from './Header.jsx';
// import Search from './Search.jsx';
import FeaturedLesson from './FeaturedLesson.jsx';
import UserLessonList from './UserLessonList.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('dashboard shown');
    return (
      <div className="container">
        <h1>
          <Link to="/">Mentor Match</Link>
        </h1>
        <div>
          <div>
            {/* <Navigation
              isLoggedIn={this.props.isLoggedIn}
              handleUserLoggingIn={this.props.handleUserLoggingIn}
            />
            <Search /> */}
          </div>
          <FeaturedLesson />
          <div>
            <h2>Favorites</h2>
            {/* {lessontype tells it to render favorites, offered, or signups} 
            userId hard coded for now, we should decide which components to 
            actually query the cache */}
            <UserLessonList lessonType="favoriteLessons" userId={1} />
            <h2>Recommendations</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

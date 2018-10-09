import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { GET_LESSONS } from '../apollo/resolvers/backendQueries.js';
import { Query } from 'react-apollo';

import SearchHome from './SearchHome.jsx';
import LessonList from './LessonList.jsx';

//This componenet could be a functional componenet and not requrie storing state at all
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topLessons: []
    };
  }

  render() {
    return (
      <div>
        <SearchHome />
        <div className="container">
          <h1>Top Services</h1>

          <Query query={GET_LESSONS}>
            {({ loading, error, data }) => {
              if (error) return <small>Error...</small>;
              if (loading || !data) return <small>Loading...</small>;
              let lessonIds = data.lessons
                .filter((lesson) => {
                  return lesson.avgRating > 3;
                })
                .map((lesson) => {
                  return lesson.id;
                });
              return <LessonList lessonIds={lessonIds} />;
            }}
          </Query>
        </div>
      </div>
    );
  }
}

const NavLand = () => (
  <div>
    <h1>Mentor Match</h1>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  </div>
);
export default Home;

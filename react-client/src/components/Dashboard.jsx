import React from 'react';
// import Navigation from './NavigationBar.jsx';
// import Header from './Header.jsx';
// import Search from './Search.jsx';
import FeaturedLesson from './FeaturedLesson.jsx';
import UserLessonList from './UserLessonList.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (error) return <h1>error</h1>;
          if (loading || !data) return <div> Loading test ...</div>;
          console.log('dashboard client query', data.userInfo);
          return (
            <div className="container">
              <div>
                <div />
                <FeaturedLesson />
                <div>
                  <h2>Favorites</h2>
                  {/* {lessontype tells it to render favorites, offered, or signups} 
                          userId hard coded for now, we should decide which components to 
                          actually query the cache */}
                  <UserLessonList lessonType="favoriteLessons" userId={2} />
                  <h2>Recommendations</h2>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Dashboard;

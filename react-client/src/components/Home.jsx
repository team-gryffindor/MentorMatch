import React from 'react';
// import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
// import LessonList from './LessonList.jsx';
import SearchBar from './SearchBar.jsx';
import LessonList from './LessonList.jsx';
import LessonListItem from './LessonListItem.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { GET_LESSONS } from '../apollo/resolvers/backendQueries.js';
import { Query } from 'react-apollo';

//This componenet could be a functional componenet and not requrie storing state at all
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topLessons: []
    };
  }

  render() {
    // return (
    //   <div>
    //     <h1>Mentor Match</h1>
    //     <Navigation
    //       isLoggedIn={this.props.isLoggedIn}
    //       handleLogin={this.handleLogin}
    //     />
    //     {/* <Search query={props.query} /> */}
    //     <h1>Today's Top Services</h1>
    //     {/* currently grabbing all lessons */}
    //     <LessonList style="horizontal" />
    //   </div>
    // );

    return (
      <div className="container">
        {/* <NavLand /> */}
        <SearchBar />
        <h1>Top Services</h1>

        <Query query={GET_LESSONS}>
          {({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading || !data) return <h1>Loading...</h1>;
            return (
              <ul>
                {data.lessons.map((lesson) => {
                  if (lesson.avgRating > 3) {
                    return <LessonListItem lessonId={lesson.id} key={lesson.id} />;
                  }
                })}
              </ul>
            );
          }}
        </Query>
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

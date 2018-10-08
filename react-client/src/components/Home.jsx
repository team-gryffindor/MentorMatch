import React from 'react';
// import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
// import LessonList from './LessonList.jsx';
import Search from './Search.jsx';
import Navigation from './NavigationBar.jsx';
import LessonList from './LessonList.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Query } from 'react-apollo';

//This componenet could be a functional componenet and not requrie storing state at all
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // return (
    //   <div>
    //     <h1>Mentor Match</h1>
    //     <Navigation
    //       isLoggedIn={this.props.isLoggedIn}
    //       handleUserLoggingIn={this.handleUserLoggingIn}
    //     />
    //     {/* <Search query={props.query} /> */}
    //     <h1>Today's Top Services</h1>
    //     {/* currently grabbing all lessons */}
    //     <LessonList style="horizontal" />
    //   </div>
    // );

    return (
      <div>
        <NavLand />
        {/* Searchbar component goes here */}
        <h1>Top Services</h1>
        {/* Need to change LessonList to display top services not just all lessons in our DB */}
        <Query
      </div>
      
    )
  }
}

const NavLand = () => (
  <div>
    <h1>Mentor Match</h1>
    <ul>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/signup'>Sign Up</Link></li>
    </ul>
  </div>
)
export default Home;

import React from 'react';
// import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
// import LessonList from './LessonList.jsx';
import Search from './Search.jsx';
import Navigation from './NavigationBar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return(
      <div>
        <h1>Mentor Match</h1>
        <Navigation isLoggedIn={this.props.isLoggedIn} handleUserLoggingIn={this.handleUserLoggingIn}/> 

        {/* <Search query={props.query} /> */}
        <h1>Today's Top Services</h1>
        {/* <LessonList services={props.todaysServices} /> */}
      </div>
    )
  }
}

export default Home;

import React from 'react';
import Navigation from './NavigationBar.jsx';
// import Header from './Header.jsx';
// import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
import SearchBar from './SearchBar.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    console.log('dashboard shown');
    return (
      <div>
        <h1>
          <Link to="/">Mentor Match</Link>
        </h1>
        <div>
          {/* <ServiceOfTheDay service={this.props.service} /> */}
          <div>
            <div>
              <Navigation
                isLoggedIn={this.props.isLoggedIn}
                handleUserLoggingIn={this.props.handleUserLoggingIn}
              />
              <SearchBar />
            </div>
            {/* <ServiceOfTheDay service={this.props.service} /> */}
            <div>
              <h2>Favorites</h2>
              {/* <LessonList services={props.todaysServices} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const ServiceOfTheDay = ({ service }) => (
//   <div>
//     <img src={service.profilePicture} />
//     <h1>{service.title}</h1>
//     <p>{service.description}</p>
//     <button>Book Now</button>
//   </div>
// );

export default Dashboard;

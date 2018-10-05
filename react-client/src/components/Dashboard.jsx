import React from 'react';
import Navigation from './NavigationBar.jsx';
// import Header from './Header.jsx';
// import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
import Search from './Search.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
  
  

  render() {
    return (
      <div>
      <h1><Link to='/'>Mentor Match</Link></h1>
          <div>
            <div>
              <Navigation />
              <Search />
            </div>
            {/* <ServiceOfTheDay service={this.props.service} /> */}
            <div>
              <h2>Favorites</h2>
              {/* <ServiceDisplay services={this.props.favorites} /> */}
            </div>
         </div>
    </div>
    );
  }
}

const ServiceOfTheDay = ({ service }) => (
  <div>
    <img src={service.profilePicture} />
    <h1>{service.title}</h1>
    <p>{service.description}</p>
    <button>Book Now</button>
  </div>
);

export default Dashboard;


//
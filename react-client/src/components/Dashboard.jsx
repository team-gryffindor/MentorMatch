import React from 'react';
import { graphql } from 'react-apollo';
<<<<<<< HEAD
import { getUserInfoQuery } from '../../apollo/queries';
import { getActiveLessonsQuery } from '../../apollo/queries.js';
=======
import { getUser } from '../../apollo/queries.js';
>>>>>>> dev
import Navigation from './NavigationBar.jsx';
import Header from './Header.jsx';
import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
import Search from './Search.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  displayUser() {
    // var data = this.props.data;
    // if (data.loading) {
    //   return <div>Loading books...</div>;
    // } else {
    //   return <li>{data.name}</li>;
    // }
  }
  render() {
    console.log(this.props.data); //checking for apollo query return

    return (
      <div>
        <h1>Mentor Match</h1>
        <ul id="user-list">{this.displayUser()}</ul>
        <div>
          <Navigation />
          <Search query={this.props.query} getLessons={this.props.getLessons}/>
        </div>
        <ServiceOfTheDay service={this.props.service} />
        <div>
          <h2>Favorites</h2>
          <ServiceDisplay services={this.props.favorites} />
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

export default graphql(getUser)(Dashboard);

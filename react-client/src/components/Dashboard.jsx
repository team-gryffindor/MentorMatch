import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import Navigation from './NavigationBar.jsx';
import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
import Search from './Search.jsx';

const getUserInfoQuery = gql`
  {
    users {
      name
      id
    }
  }
`;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  displayUsers() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.users.map((user) => {
        return <li>{user.name}</li>;
      });
    }
  }
  render() {
    console.log(this.props); //checking for apollo query return

    return (
      <div>
        <h1>Mentor Match</h1>
        <ul id="user-list">{this.displayUsers()}</ul>
        <div>
          <Navigation />
          <Search query={this.props.query} />
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

export default graphql(getUserInfoQuery)(Dashboard);

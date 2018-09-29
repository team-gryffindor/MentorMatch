import React from 'react';
import Navigation from './NavigationBar.jsx';
import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
import Search from './Search.jsx';
import UserProfileInfo from './UserProfileInfo.jsx';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Mentor Match</h1>
        <div>
          <Navigation/>
          <Search query={this.props.query}/>
        </div>
        <ServiceOfTheDay service={this.props.service}/>
        <div>
          <h2>Favorites</h2>
          <ServiceDisplay services={this.props.favorites}/>
        </div>
        {/* Add user profile info componenent here */}
        <UserProfileInfo user={this.props.user}/>
      </div>
    )
  }
}

const ServiceOfTheDay = ({service}) => (
  <div>
    <img src={service.profilePicture}/>
    <h1>{service.title}</h1>
    <p>{service.description}</p>
    <button>Book Now</button>
  </div>
);


export default Dashboard;
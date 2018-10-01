import React from 'react';
import Header from './Header.jsx';
import ServiceDisplay from './ServicesHorizontalDisplay.jsx';
import Search from './Search.jsx';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          <Search query={this.props.query}/>
        </div>
        <ServiceOfTheDay service={this.props.service}/>
        <div>
          <h2>Favorites</h2>
          <ServiceDisplay services={this.props.favorites}/>
        </div>
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
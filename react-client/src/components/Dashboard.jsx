import React from 'react';
import Navigation from './NavigationBar.jsx';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    console.log('PROPS: ', this.props);
    return (
      <div>
        <h1>Mentor Match</h1>
        <Navigation/>
        <ServiceOfTheDay service={this.props.service}/>
        <div>
          <h2>Favorites</h2>
          <div></div>
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
// const ServiceOfTheDay = ({service}) => (
//   <div>
//     <img/>
//     <h1>Test</h1>
//     <p>Description test</p>
//     <button>Book Now</button>
//   </div>
// );

export default Dashboard;
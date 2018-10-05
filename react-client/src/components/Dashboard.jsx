import React from 'react';
import Navigation from './NavigationBar.jsx';
import Header from './Header.jsx';
import LessonList from './LessonList.jsx';
import Search from './Search.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // this.displayUser = this.displayUser.bind(this);
    this.displayLessons = this.displayLessons.bind(this);
  }

  // displayUser() {
  //   var data = this.props.data;
  //   if (data.loading) {
  //     return <div>Loading books...</div>;
  //   } else {
  //     return <li>{data.name}</li>;
  //   }
  // }

  displayLessons() {
    // console.log('DATA: ', this.props)
    var data = this.props.data;
    if (data.loading) {
      return <div> Loading test ...</div>;
    } else {
      var favorites = this.props.data.user.favoriteLessons;
      var offered = this.props.data.user.offeredLessons;
      var active = this.props.data.user.signupLessons;
      var userInfo = this.props.user;

      console.log('DASH', favorites, offered, active, userInfo);
      this.props.getLessonsQuery(favorites, offered, active, userInfo);
    }

    // if (data.loading) {
    //   return <div>Loading books...</div>;
    // } else {
    //   return <li>{data.name}</li>;
    //   console.log('PROPS: ', this.props);

    // }
  }
  componentDidMount() {
    this.displayLessons();
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
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
=======
        <h1>Mentor Match</h1>
        <div>
          <Navigation />
          <Search query={this.props.query} getLessons={this.props.getLessons} />
        </div>
        <ServiceOfTheDay service={this.props.service} />
        <div>
          <h2>Favorites</h2>
          <LessonList style="horizontal" />
        </div>
      </div>
>>>>>>> dev
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
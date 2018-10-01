import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Feed from './components/Feed.jsx';
import data from '../dist/data';
import ActiveLessons from './components/ActiveLessons.jsx';
import OfferedLessons from './components/OfferedLessons.jsx';
import PastLessons from './components/PastLessons.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import UserProfileInfo from './components/UserProfileInfo.jsx';
import firebase from 'firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputService: '',
      userInputLocation: '',
      serviceData: window.sampleService,
      locationData: window.sampleLocation,
      favoritesData: window.sampleService,
      serviceOfTheDay: window.serviceOfTheDay,
      todaysTopServices: window.sampleService,
      userActiveLessons: window.sampleService,
      userOfferedLessons: window.sampleService,
      userPastLessons: window.sampleService,
      userInfo: {
        username: 'AC130',
        avatar: 'https://source.unsplash.com/1600x900/?mountain,sunset',
        location: 'Boston',
        userDescription:
          'The pro mutters. Outside a native blinks the jury. An ozone surrounds each dated custom below a dirt. The blessed bathroom peers. A supporting power stirs within the earth.'
      }
    };
    this.querySet = this.querySet.bind(this);
  }

  querySet(service, location) {
    //apollo call
  }
  componentDidMount() {
    //set the sate for today's top services
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Home query={this.querySet} todaysServices={this.state.todaysTopServices} />
            )}
          />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signUp" render={() => <SignUp />} />
          <Route
            path="/active"
            render={() => <ActiveLessons lessons={this.state.userActiveLessons} />}
          />
          <Route
            path="/offered"
            render={() => <OfferedLessons lessons={this.state.userOfferedLessons} />}
          />
          <Route path="/past" render={() => <PastLessons lessons={this.state.userPastLessons} />} />
          <Route
            path="/feed"
            render={() => (
              <Feed services={this.state.serviceData} location={this.state.locationData} />
            )}
          />
          <Route
            path="/dashboard"
            render={() => (
              <Dashboard
                query={this.querySet}
                service={this.state.serviceOfTheDay}
                favorites={this.state.favoritesData}
              />
            )}
          />
          <Route
            path="/userProfile"
            render={() => <UserProfileInfo user={this.state.userInfo} />}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

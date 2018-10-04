import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { gql } from 'apollo-boost';

// components
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
import AddService from './components/AddService.jsx';
import RediSearch from './components/RediSearch.jsx';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputService: '',
      userInputLocation: '',
      serviceData: window.sampleService,
      locationData: window.sampleLocation,
      userFavoritesData: [],
      serviceOfTheDay: window.serviceOfTheDay,
      todaysTopServices: window.sampleService,
      userActiveLessons: [],
      userOfferedLessons: [],
      userPastLessons: window.sampleService,
      userInfo: {}
    };
    this.getLessonsQuery = this.getLessonsQuery.bind(this);
  }

  getLessonsQuery(favorites, offered, active) {
    this.setState({
      userFavoritesData: favorites,
      userActiveLessons: active,
      userOfferedLessons: offered
    });
  }

  componentDidMount() {
    //set the state for today's top services
  }

  getUser() {}

  render() {
    const { authenticated, loading } = this.state;

    return (
      <ApolloProvider client={client}>
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
            <Route
              path="/past"
              render={() => <PastLessons lessons={this.state.userPastLessons} />}
            />
            <Route
              path="/feed"
              render={() => (
                <Feed services={this.state.searchResults} location={this.state.locationData} />
              )}
            />
            <Route
              path="/dashboard"
              render={() => (
                <Dashboard
                  query={this.querySet}
                  service={this.state.serviceOfTheDay}
                  favorites={this.state.userFavoritesData}
                  getLessonsQuery={this.getLessonsQuery}
                />
              )}
            />
            <Route
              path="/userProfile"
              render={() => <UserProfileInfo user={this.state.userInfo} />}
            />
            <Route path="/addService" render={() => <AddService />} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

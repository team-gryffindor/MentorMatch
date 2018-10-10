import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, Mutation } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import localStateDefaults from './apollo/defaults';
import { UPDATE_USER_INFO } from './apollo/resolvers/clientSideQueries';

// components
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Feed from './components/Feed.jsx';
import ActiveLessons from './components/ActiveLessons.jsx';
import OfferedLessons from './components/OfferedLessons.jsx';
import PastLessons from './components/PastLessons.jsx';
import Dashboard from './components/Dashboard.jsx';
import UserProfileInfo from './components/UserProfileInfo.jsx';
import AddLesson from './components/AddLesson.jsx';
import LessonContent from './components/LessonContent.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import NavBarMain from './components/NavBarMain.jsx';
import Calendar from './components/Calendar.jsx';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: localStateDefaults,
  resolvers: {
    Mutation: {
      updateUserInfo: (
        _,
        { theUserId, theUserName, theDescription, theCityOfResidence, theImage },
        { cache }
      ) => {
        cache.writeData({
          data: {
            userInfo: {
              __typename: 'userInfo',
              userId: theUserId,
              username: theUserName,
              description: theDescription,
              cityOfResidence: theCityOfResidence,
              image: theImage
            }
          }
        });
      }
    }
  }
});

// RTqbQEMIb9gLB8wTZheYtz6a1LI3

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      url: 'http:localhost:3000/',
      uri: '/graphql'
    })
  ]),
  cache: cache
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(boolean) {
    console.log('USER IS LOGGED IN AND FIREBASE PASSED');
    this.setState({
      isLoggedIn: boolean
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route
              path="/"
              render={({ location }) => (
                <NavBarMain
                  isLoggedIn={this.state.isLoggedIn}
                  firebaseID={this.state.firebaseID}
                  handleLogin={this.handleLogin}
                  currentPath={location.pathname}
                />
              )}
            />

            {/* <NavigationBar /> */}
            <Route
              exact
              path="/"
              render={() => (
                <Home isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin} />
              )}
            />
            <Route
                path="/login"
                render={() => (
                  <Login
                    handleUserLoggingIn={this.handleUserLoggingIn}
                    isLoggedIn={this.state.isLoggedIn}
                
                  />
                )}
              />
            {/* <Route
              path="/login"
              render={() => (
                <Mutation mutation={UPDATE_USER_INFO}>
                  {(updateUserInfo) => (
                    <Login
                      updateUserInfo={updateUserInfo}
                      handleLogin={this.handleLogin}
                      isLoggedIn={this.state.isLoggedIn}
                      uid={this.state.firebaseID}
                    />
                  )}
                </Mutation>
              )}
                  />*/}
            <Route
              path="/signUp"
              render={({ location }) => (
                <SignUp uid={location.state.uid} firebaseID={this.state.firebaseID} />
              )}
            />
            <Route path="/active" render={() => <ActiveLessons />} />
            {/* <Route path="/offered" render={() => <OfferedLessons />} /> */}
            {/* <Route path="/past" render={() => <PastLessons />}/> */}
            <Route path="/feed" render={(props) => <Feed {...props} />} />
            <Route
              path="/dashboard"
              render={() => (
                <Dashboard isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin} />
              )}
            />
            <Route path="/userProfile" render={() => <ProfilePage />} />
            {/* example of how to pass props to a Route */}
          
            <Route
              path="/lessonContent/:lessonId"
              render={({ location }) => <LessonContent lesson={location.state.lesson} />}
            />
            <Route path="/addLesson" render={() => <AddLesson />} />
            <Route path="/calendar" render={() => <Calendar />} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

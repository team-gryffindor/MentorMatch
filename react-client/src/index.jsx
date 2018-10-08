import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
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
import AddService from './components/AddService.jsx';
import LessonContent from './components/LessonContent.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import NavBarMain from './components/NavBarMain.jsx';
import NavigationBar from './components/NavigationBar.jsx';

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
        client.writeData({
          data: {
            mentorMatch: {
              __typename: 'mentorMatch',
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

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: '/graphql'
    })
  ]),
  cache: cache
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      usrId: 2
    };
    this.handleUserLoggingIn = this.handleUserLoggingIn.bind(this);
  }

  handleUserLoggingIn() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <NavBarMain
              isLoggedIn={this.state.isLoggedIn}
              handleUserLoggingIn={this.handleUserLoggingIn}
            />
            <NavigationBar />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  isLoggedIn={this.state.isLoggedIn}
                  handleUserLoggingIn={this.handleUserLoggingIn}
                />
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
            {/* <Route path="/signup" render={() => <SignUp />} /> */}
            <Route path="/active" render={() => <ActiveLessons />} />
            {/* <Route path="/offered" render={() => <OfferedLessons />} /> */}
            {/* <Route path="/past" render={() => <PastLessons />}/> */}
            <Route path="/feed" render={(props) => <Feed {...props} />} />
            <Route
              path="/dashboard"
              render={() => (
                <Dashboard
                  isLoggedIn={this.state.isLoggedIn}
                  handleUserLoggingIn={this.handleUserLoggingIn}
                />
              )}
            />
            <Route path="/userProfile" render={() => <ProfilePage />} />
            {/* example of how to pass props to a Route */}
            <Route
              path="/lessonContent/:lessonId"
              render={({ location }) => <LessonContent lesson={location.state.lesson} />}
            />
            <Route path="/addService" render={() => <AddService />} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

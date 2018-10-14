import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloConsumer, WithQuery, Mutation } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import localStateDefaults from './apollo/defaults';
import { UPDATE_USER_INFO, GET_USER_INFO } from './apollo/resolvers/clientSideQueries';
import { GET_USER } from './apollo/resolvers/backendQueries';
import { StripeProvider } from 'react-stripe-elements';

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
import Checkout from './components/Checkout.jsx';

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
      isLoggedIn: false,
      eventToSchedule: '',
      events: []
    };
    this.handleLogin = this.handleLogin.bind(this);
    // this.scheduleEvent = this.scheduleEvent.bind(this);
  }

  // scheduleEvent(event) {
  //   this.setState({
  //     eventToSchedule: event
  //   },() => console.log('SCHEDULING EVENT: ', this.state.eventToSchedule));
  // }

  calendarEvents = (date, title) => {
    let currentEvents = this.state.events;
    let event = {
      allDay: false,
      endDate: date,
      startDate: date,
      title: title
    };

    currentEvents.push(event);

    this.setState(
      {
        events: currentEvents
      },
      () => console.log('INDEX STATE: ', this.state.events)
    );
  };

  handleLogin(boolean) {
    console.log('USER IS LOGGED IN AND FIREBASE PASSED');
    this.setState({
      isLoggedIn: boolean
    });
  }

  render() {
    return (
      <ApolloConsumer>
        {(apolloClient) => {
          <StripeProvider apiKey={process.env.PUBLISHABLE_KEY}>
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
                />
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
                    <Dashboard
                      isLoggedIn={this.state.isLoggedIn}
                      handleLogin={this.handleLogin}
                      scheduleEvent={this.scheduleEvent}
                      calendarEvents={this.calendarEvents}
                    />
                  )}
                />
                <Route path="/userProfile" render={() => <ProfilePage />} />
                {/* example of how to pass props to a Route */}

                <Route
                  path="/lessonContent/:lessonId"
                  render={({ location }) => (
                    <Query query={GET_USER_INFO} className="container">
                      {({ loading, error, data }) => {
                        if (error) return <h1>Error...</h1>;
                        if (loading || !data) return <h1>Loading...</h1>;
                        return (
                          <Query query={GET_USER} variables={{ id: data.userInfo.userId }}>
                            {({ loading, error, data }) => {
                              if (error) return <h1>Error...</h1>;
                              if (loading || !data) return <h1>Loading...</h1>;
                              let favorite = false;
                              let userFavorites = data.user.favoriteLessons;
                              for (let i = 0; i < userFavorites.length; i++) {
                                if (userFavorites[i].id === location.state.lesson.id) {
                                  favorite = true;
                                  break;
                                }
                              }
                              let booked = false;
                              let scheduled = data.user.signupLessons;
                              for (let i = 0; i < scheduled.length; i++) {
                                if (scheduled[i].id === location.state.lesson.id) {
                                  booked = true;
                                  break;
                                }
                              }
                              return (
                                <LessonContent
                                  userId={data.user.id}
                                  lesson={location.state.lesson}
                                  isFavorite={favorite}
                                  isBooked={booked}
                                />
                              );
                            }}
                          </Query>
                        );
                      }}
                    </Query>
                  )}
                />
                <Route path="/addLesson" render={() => <AddLesson />} />
                <Route path="/calendar" render={() => <Calendar events={this.state.events} />} />
                <Route path="/checkout" render={() => <Checkout />} />
              </div>
            </Router>
          </StripeProvider>;
        }}
      </ApolloConsumer>
    );
  }
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);

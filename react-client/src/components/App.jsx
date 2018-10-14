import React from 'react';
import { ApolloConsumer, Query, Mutation } from 'react-apollo';
import { UPDATE_USER_INFO, GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { GET_USER } from '../apollo/resolvers/backendQueries';
import { Route } from 'react-router-dom';

// components
import Home from './home/Home.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Feed from './Feed.jsx';
import ActiveLessons from './ActiveLessons.jsx';
import Dashboard from './Dashboard.jsx';
import AddLesson from './AddLesson.jsx';
import LessonContent from './LessonContent.jsx';
import ProfilePage from './profile/ProfilePage.jsx';
import UpdateProfileInfo from './profile/UpdateProfileInfo.jsx';
import NavBarMain from './navbarmain/NavBarMain.jsx';
import Calendar from './Calendar.jsx';
import Checkout from './Checkout.jsx';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    eventToSchedule: '',
    events: []
  };

  calendarEvents = (date, title) => {
    let currentEvents = events;
    let event = {
      allDay: false,
      endDate: date,
      startDate: date,
      title: title
    };
    currentEvents.push(event);
    this.setState({ events: currentEvents }, () => console.log('INDEX STATE: ', events));
  };

  handleLogin = (boolean) => {
    this.setState({ isLoggedIn: boolean });
  };

  render() {
    let { isLoggedIn, eventToSchedule, events } = this.state;
    return (
      <ApolloConsumer>
        {(apolloClient) => {
          return (
            <div>
              <Route
                path="/"
                render={({ location }) => (
                  <NavBarMain
                    isLoggedIn={isLoggedIn}
                    handleLogin={this.handleLogin}
                    currentPath={location.pathname}
                  />
                )}
              />
              <Route
                exact
                path="/"
                render={() => <Home isLoggedIn={isLoggedIn} handleLogin={this.handleLogin} />}
              />
              <Route
                path="/login"
                render={() => (
                  <Mutation mutation={UPDATE_USER_INFO}>
                    {(updateUserInfo) => (
                      <Login
                        updateUserInfo={updateUserInfo}
                        handleLogin={this.handleLogin}
                        isLoggedIn={isLoggedIn}
                        apolloClient={apolloClient}
                      />
                    )}
                  </Mutation>
                )}
              />
              <Route
                path="/signUp"
                render={({ location }) => (
                  <SignUp
                    uid={location.state.uid}
                    handleLogin={this.handleLogin}
                    apolloClient={apolloClient}
                  />
                )}
              />
              <Route path="/active" render={() => <ActiveLessons />} />
              <Route path="/feed" render={(props) => <Feed {...props} />} />
              <Route
                path="/dashboard"
                render={() => (
                  <Dashboard
                    isLoggedIn={isLoggedIn}
                    handleLogin={this.handleLogin}
                    scheduleEvent={this.scheduleEvent}
                    calendarEvents={this.calendarEvents}
                  />
                )}
              />
              <Route path="/userProfile" render={() => <ProfilePage />} />
              <Route path="/editProfile" render={(props) => <UpdateProfileInfo {...props} />} />
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
              <Route path="/calendar" render={() => <Calendar events={events} />} />
              <Route path="/checkout" render={() => <Checkout />} />
            </div>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export default App;

import React from 'react';
import { ApolloConsumer, Query, Mutation } from 'react-apollo';
import { UPDATE_USER_INFO, GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { GET_USER } from '../apollo/resolvers/backendQueries';
import { Route } from 'react-router-dom';

// components
import NavBarMain from './navbarmain/NavBarMain.jsx';
import Home from './home/Home.jsx';
import Login from './authentication/Login.jsx';
import SignUp from './authentication/SignUp.jsx';
import Feed from './searchFeed/Feed.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import ProfilePage from './profile/ProfilePage.jsx';
import UpdateProfileInfo from './profile/UpdateProfileInfo.jsx';
import LessonContent from './lessonContent/LessonContent.jsx';
import AddLesson from './addLesson/AddLesson.jsx';
import Calendar from './calendar/Calendar.jsx';
import Checkout from './checkout/Checkout.jsx';

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
                      if (error) return <small>Error...</small>;
                      if (loading || !data) return <small>Loading...</small>;
                      return (
                        <Query query={GET_USER} variables={{ id: data.userInfo.userId }}>
                          {({ loading, error, data }) => {
                            if (error) return <small>Error...</small>;
                            if (loading || !data) return <small>Loading...</small>;
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

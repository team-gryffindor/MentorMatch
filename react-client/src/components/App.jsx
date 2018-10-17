import React from 'react';
import { ApolloConsumer, Query, Mutation } from 'react-apollo';
import { UPDATE_USER_INFO, GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { GET_USER, GET_LESSON } from '../apollo/resolvers/backendQueries';
import { Route } from 'react-router-dom';

// components
import NavBarMain from './navbarmain/NavBarMain.jsx';
import Home from './home/Home.jsx';
import Login from './authentication/Login.jsx';
import SignUp from './authentication/SignUp.jsx';
import Feed from './searchFeed/Feed.jsx';
import WriteReview from './WriteReview.jsx';
// import Dashboard from './dashboard/Dashboard.jsx';
import ProfilePage from './profile/ProfilePage.jsx';
import UpdateProfileInfo from './profile/UpdateProfileInfo.jsx';
import LessonContent from './lessonContent/LessonContent.jsx';
import AddLesson from './addLesson/AddLesson.jsx';
import Calendar from './calendar/Calendar.jsx';
import Checkout from './checkout/Checkout.jsx';
import UpdateLesson from './addLesson/UpdateLesson.jsx';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    loginModal: null,
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

  handleGuestOpt = (boolean) => {
    this.setState({ loginModal: boolean });
  };

  render() {
    let { isLoggedIn, loginModal, eventToSchedule, events } = this.state;
    return (
      <ApolloConsumer>
        {(apolloClient) => {
          return (
            <div>
              <Route
                path="/"
                render={({ location }) => (
                  <NavBarMain
                    apolloClient={apolloClient}
                    isLoggedIn={isLoggedIn}
                    handleLogin={this.handleLogin}
                    handleGuestOpt={this.handleGuestOpt}
                    currentPath={location.pathname}
                  />
                )}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    isLoggedIn={isLoggedIn}
                    handleLogin={this.handleLogin}
                    loginModal={loginModal}
                  />
                )}
              />
              <Route
                path="/auth"
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
              <Route path="/userProfile" render={() => <ProfilePage />} />
              <Route
                path="/editProfile"
                render={(props) => <UpdateProfileInfo apolloClient={apolloClient} {...props} />}
              />
              <Route
                path="/lessonContent/:lessonId"
                render={({ location }) => {
                  if (this.state.isLoggedIn) {
                    return (
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
                                    isLoggedIn={this.state.isLoggedIn}
                                    isFavorite={favorite}
                                    isBooked={booked}
                                  />
                                );
                              }}
                            </Query>
                          );
                        }}
                      </Query>
                    );
                  } else {
                    return (
                      <Query query={GET_LESSON} variables={{ id: location.state.lesson.id }}>
                        {({ loading, error, data }) => {
                          if (error) return <small>Error...</small>;
                          if (loading || !data) return <small>Loading...</small>;
                          return (
                            <LessonContent
                              userId={0}
                              lesson={location.state.lesson}
                              isLoggedIn={this.state.isLoggedIn}
                              isFavorite={false}
                              isBooked={false}
                            />
                          );
                        }}
                      </Query>
                    );
                  }
                }}
              />
              <Route path="/addLesson" render={() => <AddLesson />} />
              <Route
                path="/editLesson"
                render={({ location }) => <UpdateLesson lesson={location} />}
              />
              <Route path="/calendar" render={() => <Calendar events={events} />} />
              <Route path="/checkout" render={() => <Checkout />} />
              <Route path="/writeReview" render={(props) => <WriteReview {...props} />} />
            </div>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export default App;

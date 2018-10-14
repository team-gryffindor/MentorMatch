import React from 'react';
import FeaturedLesson from './FeaturedLesson.jsx';
import UserLessonList from './profile/UserLessonList.jsx';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries.js';

class Dashboard extends React.Component {
  state = {
    event: {}
  };

  setBookingDate = (evt, event) => {
    evt.preventDefault();
    this.setState({ event: event }, () => this.props.scheduleEvent(event));
  };

  render() {
    return (
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (error) return <small>error</small>;
          if (loading || !data) return <small> Loading ...</small>;
          console.log('dashboard client query', data.userInfo);
          return (
            <div className="container">
              <div>
                <div />
                <FeaturedLesson calendarEvents={this.props.calendarEvents} userId={data.userInfo} />
                <div>
                  <h2>Favorites</h2>
                  {/* {lessontype tells it to render favorites, offered, or signups} 
                          userId hard coded for now, we should decide which components to 
                          actually query the cache */}
                  <UserLessonList lessonType="favoriteLessons" userId={data.userInfo.userId} />
                  <h2>Recommendations</h2>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Dashboard;

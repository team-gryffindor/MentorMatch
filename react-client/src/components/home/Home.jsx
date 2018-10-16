import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';

import SearchHome from './SearchHome.jsx';
import FeaturedLesson from '../dashboard/FeaturedLesson.jsx';
import UserLessonList from '../lessonList/UserLessonList.jsx';

import LessonList from '../lessonList/LessonList.jsx';

//This componenet could be a functional componenet and not requrie storing state at all
class Home extends React.Component {
  state = {
    topLessons: []
  };

  render() {
    return (
      <div>
        <SearchHome />
        <div className="container">
          {/* Conditionally render top services depending on the client auth status */}
          <Query query={GET_USER_INFO}>
            {({ loading, error, data }) => {
              if (error) return <small>ERROR</small>;
              else if (loading || !data) return <small> Loading ...</small>;
              // If user is a guest
              else if (data.userInfo.uid === '') {
                return (
                  <div className="container">
                    <div>
                      <FeaturedLesson
                        calendarEvents={this.props.calendarEvents}
                        userId={data.userInfo}
                      />
                    </div>
                  </div>
                );
                // If user logged in,
              } else {
                return (
                  <div className="container">
                    <div>
                      <FeaturedLesson
                        calendarEvents={this.props.calendarEvents}
                        userId={data.userInfo}
                      />
                    </div>
                    <div>
                      <h2>Favorites</h2>
                      {/* {lessontype tells it to render favorites, offered, or signups} 
                            userId hard coded for now, we should decide which components to 
                            actually query the cache */}
                      <UserLessonList lessonType="favoriteLessons" userId={data.userInfo.userId} />
                      <h2>Recommendations</h2>
                    </div>
                  </div>
                );
              }
            }}
          </Query>
          {/* <h1>Top Services</h1>
          <Query query={GET_LESSONS}>
            {({ loading, error, data }) => {
              if (error) return <small>Error...</small>;
              if (loading || !data) return <small>Loading...</small>;
              let lessonIds = data.lessons
                .filter((lesson) => {
                  return lesson.avgRating > 3;
                })
                .map((lesson) => {
                  return lesson.id;
                });
              return <LessonList lessonIds={lessonIds} />;
            }}
          </Query> */}
        </div>
      </div>
    );
  }
}

export default Home;

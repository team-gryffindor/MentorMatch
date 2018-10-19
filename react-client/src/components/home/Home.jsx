import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';
import {
  GET_LESSONS_FILTERED,
  GET_LESSONS_FILTERED_GUEST
} from '../../apollo/resolvers/backendQueries.js';
import SearchHome from './SearchHome.jsx';
import FeaturedLesson from './FeaturedLesson.jsx';
import UserLessonList from '../lessonList/UserLessonList.jsx';

import HorizontalLessons from '../lessonList/HorizontalLessons.jsx';

//This componenet could be a functional componenet and not requrie storing state at all
class Home extends React.Component {
  state = {
    topLessons: [],
    categories: ['Music', 'Sports', 'Cooking', 'Arts'],
    cities: [['New York', 'NY'], ['Boston', 'MA'], ['Houston', 'TX'], ['San Francisco', 'CA']]
  };

  render() {
    return (
      <div>
        <SearchHome />
        <div className="container">
          {/* Conditionally render top services depending on the client auth status */}
          {this.props.isLoggedIn ? (
            <Query query={GET_USER_INFO}>
              {({ loading, error, data }) => {
                if (error) return <small>ERROR</small>;
                if (loading || !data) return <small> Loading ...</small>;
                let user = data.userInfo;
                return (
                  <div>
                    <div>
                      <FeaturedLesson calendarEvents={this.props.calendarEvents} />
                    </div>
                    <div>
                      <h4 id="featuredTitle">Recommendations</h4>
                      {this.state.categories.map((category) => (
                        <Query
                          query={GET_LESSONS_FILTERED}
                          variables={{
                            category: category,
                            cityOfService: user.cityOfResidence,
                            stateOfService: user.stateOfResidence
                          }}
                        >
                          {({ loading, error, data }) => {
                            if (error) return <small>ERROR</small>;
                            if (loading || !data) return <small> Loading ...</small>;
                            let lessonIds = data.lessonsFiltered.map((lesson) => lesson.id);
                            if (lessonIds.length >= 17) {
                              lessonIds = lessonIds.slice(0, 18);
                            }
                            return (
                              <React.Fragment>
                                <h3>{category}</h3>
                                <HorizontalLessons lessonIds={lessonIds} />
                              </React.Fragment>
                            );
                          }}
                        </Query>
                      ))}
                    </div>
                  </div>
                );
              }}
            </Query>
          ) : (
            <div>
              <div>
                <FeaturedLesson calendarEvents={this.props.calendarEvents} />
              </div>
              <div>
                <h4 id="featuredTitle">Recommendations</h4>
                {this.state.cities.map((city) => (
                  <Query
                    query={GET_LESSONS_FILTERED_GUEST}
                    variables={{
                      cityOfService: city[0],
                      stateOfService: city[1]
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (error) return <small>ERROR</small>;
                      if (loading || !data) return <small> Loading ...</small>;
                      console.log(data);
                      let lessonIds = data.lessonsFilteredGuest.map((lesson) => lesson.id);
                      if (lessonIds.length >= 17) {
                        lessonIds = lessonIds.slice(0, 18);
                      }
                      return (
                        <React.Fragment>
                          <h3>{city[0]}</h3>
                          <HorizontalLessons lessonIds={lessonIds} />
                        </React.Fragment>
                      );
                    }}
                  </Query>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;

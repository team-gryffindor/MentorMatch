import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';
import { GET_LESSONS_FILTERED } from '../../apollo/resolvers/backendQueries.js';
import SearchHome from './SearchHome.jsx';
import FeaturedLesson from './FeaturedLesson.jsx';
import UserLessonList from '../lessonList/UserLessonList.jsx';

import HorizontalLessons from '../lessonList/HorizontalLessons.jsx';

//This componenet could be a functional componenet and not requrie storing state at all
class Home extends React.Component {
  state = {
    topLessons: [],
    categories: ['Music', 'Sports', 'Cooking', 'Arts']
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
                            console.log(data);
                            let lessonIds = data.lessonsFiltered.map((lesson) => lesson.id);
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
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;

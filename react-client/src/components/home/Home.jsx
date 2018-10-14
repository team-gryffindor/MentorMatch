import React from 'react';
import { GET_LESSONS } from '../../apollo/resolvers/backendQueries.js';
import { Query } from 'react-apollo';

import SearchHome from './SearchHome.jsx';
import LessonList from '../LessonList.jsx';

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
          <h1>Top Services</h1>
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
          </Query>
        </div>
      </div>
    );
  }
}

export default Home;

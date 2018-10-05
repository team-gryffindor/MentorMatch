<<<<<<< HEAD
// import React from 'react';
// import Header from './Header.jsx';
// import ServicesVerticalDisplay from './ServicesVerticalDisplay.jsx';
// import { Query } from 'react-apollo';
// import { GET_LESSON } from '/Users/Arjun/Documents/gryffindor/react-client/src/apollo/resolvers/backendQueries.js';

// const ActiveLessons = (props) => (
//   <Query query={ GET_LESSON }>
//     {({ loading, error, data } => {
//       if (error) return <h1>Error...</h1>;
//       if (loading || !data) return <h1>Loading...</h1>;

//       return <h1>{data.mentorMatch.currentUsers}</h1>
//     }}
//   </Query>
// );

// export default ActiveLessons;
=======
import React from 'react';
import Header from './Header.jsx';
import LessonList from './LessonList.jsx';

const ActiveLessons = (props) => (
  <div>
    <Header />
    <h1>Active Lessons</h1>
    <LessonList style="horizontal" />
  </div>
);
export default ActiveLessons;
>>>>>>> dev

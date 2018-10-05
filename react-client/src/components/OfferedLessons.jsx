<<<<<<< HEAD
// import React from 'react';
// import { Mutation } from 'react-apollo';
// import { updateCurrentUser } from '/Users/Arjun/Documents/gryffindor/react-client/src/graphql/index.js';

// class OfferedServices extends React.Component {

//   render() {
//     return (
//       <Mutation mutation={updateCurrentUser}>
//         {updateCurrentUser => (
//           <li  onClick={() => updateCurrentUser({ variables: { name: 'Kobe'} })}>Add Kobe</li>
//         )}
//       </Mutation>
//     );
//   }
// }

// export default OfferedServices;
=======
import React from 'react';
import Header from './Header.jsx';
import LessonList from './LessonList.jsx';

const OfferedServices = (props) => (
  <div>
    <Header />
    <h1>Offered Lessons</h1>
    <LessonList style="horizontal" />
  </div>
);
export default OfferedServices;
>>>>>>> dev

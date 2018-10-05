import React from 'react';
import Header from './Header.jsx';
import LessonListItem from './LessonListItem.jsx';
import { graphql, Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries.js';
import { GET_USER } from '../apollo/resolvers/backendQueries.js';
import { database } from 'firebase';

const UserLessonList = (props) => {
  return (
    <Query query={GET_USER_INFO}>
      {({ data }) => {
        return (
          <Query query={GET_USER} variables={{ id: data.mentorMatch.userId }}>
            {({ loading, error, data }) => {
              if (error) return <h1>error</h1>;
              if (loading) {
                return <div> Loading test ...</div>;
              } else {
                return (
                  <div className={props.style}>
                    {data.user[props.lessonType].map((lesson, i) => (
                      <LessonListItem lesson={lesson} key={i} />
                    ))}
                  </div>
                );
              }
            }}
          </Query>
        );
      }}
    </Query>
  );
};

export default UserLessonList;

// class UserLessonList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   displayList() {
//     if (this.props.data.loading) {
//       return <div> Loading test ...</div>;
//     } else {
//       let user = this.props.data.user;
//       return (
//         <div className={this.props.style}>
//           {user[this.props.lessonType].map((lesson, i) => (
//             <LessonListItem lesson={lesson} key={i} />
//           ))}
//         </div>
//       );
//     }
//   }

//   render() {
//     return <div>{this.displayList()}</div>;
//   }
// }

// export default graphql(GET_USER, {
//   options: (props) => {
//     return {
//       variables: {
//         id: 1
//       }
//     };
//   }
// })(UserLessonList);

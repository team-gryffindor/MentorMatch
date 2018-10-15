import React from 'react';
import { GET_LESSONS } from '../../apollo/resolvers/backendQueries.js';
import { Query } from 'react-apollo';
import firebase from 'firebase';

import SearchHome from './SearchHome.jsx';
import LessonList from '../lessonList/LessonList.jsx';
import AuthModal from '../authentication/AuthModal.jsx';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBJHJQeMF38kVCfhqgOvqXUjw3kftKMMm8',
  authDomain: 'mentormatch-c3923.firebaseapp.com',
  databaseURL: 'https://mentormatch-c3923.firebaseio.com',
  projectId: 'mentormatch-c3923',
  storageBucket: 'mentormatch-c3923.appspot.com',
  messagingSenderId: '803398282415'
});

//This componenet could be a functional componenet and not requrie storing state at all
class Home extends React.Component {
  state = {
    topLessons: []
  };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  render() {
    return (
      <div>
        <AuthModal
          firebaseApp={firebaseApp}
          uiConfig={this.uiConfig}
          loginModal={this.props.loginModal}
        />
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

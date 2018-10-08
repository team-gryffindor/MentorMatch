import React from 'react';
import ReactDOM from 'react-dom';
import { Query, Mutation } from 'react-apollo';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UPDATE_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { GET_USER } from '../apollo/resolvers/backendQueries';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBJHJQeMF38kVCfhqgOvqXUjw3kftKMMm8',
  authDomain: 'mentormatch-c3923.firebaseapp.com',
  databaseURL: 'https://mentormatch-c3923.firebaseio.com',
  projectId: 'mentormatch-c3923',
  storageBucket: 'mentormatch-c3923.appspot.com',
  messagingSenderId: '803398282415'
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      uID: null
    };
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        isSignedIn: !!user,
        uID: user.uid
      }) 
    })
  }

  handleLogOut() {
    this.setState({
      isSignedIn: false,
      userInfo: null 
    })
  }

  render() {
    {
      if (this.state.isSignedIn === false) {
        return (
          <div className="Login">
            <h1>Welcome to </h1>
            <div className="col-md-4" />
            <div className="form-group col-md-4">
              <a className="btn btn-block btn-social btn-facebook">
                <span className="fa fa-facebook" />
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
              </a>
              <br />
            </div>
          </div>
        );
      } else if (this.state.isSignedIn === true){
        return (
          <div>
              <Query query={GET_USER} variables={{ id: this.state.uID }}>
                {({ loading, error, data }) => {
                  if (error) return <h1>error</h1>;
                  if (loading) {
                    return <div> Loading test ...</div>;
                  } else {
                      if(data.id === null) {
                        return <Redirect to="/signup" />
                      } else {
                        const userid = data.id
                    return (
                      <Mutation mutation={UPDATE_USER_INFO}>
                          {(updateUserInfo, { data }) => (
                            updateUserInfo({variables: { userId: userId, username: data.name, description: data.description, cityOfResidence: data.city, image: data.image}})

                          )}
                      </Mutation>
                      );
                    }
                }
                }}
                      
              </Query>
            <div className="Login">
              <Redirect to="/dashboard" userInfo={this.state.userInfo} />
            </div>
          </div>
         
        );
      }
    }
  }
}

export default Login;



import React from 'react';
import ReactDOM from 'react-dom';
import { Query, Mutation, ApolloConsumer } from 'react-apollo';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UPDATE_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { CHECK_USER } from '../apollo/resolvers/backendQueries';

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
      if(user){
        console.log('THIS IS REACHED')
        this.props.handleUserLoggingIn(true, user.uid);
      } 
    })
  }

  

  render() {
    {
      if (this.props.isLoggedIn === false) {
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
      } else if (this.props.isLoggedIn === true) {
        return (
          
            <Query query={CHECK_USER} variables={{ uid: this.props.uid }}>
              {({ loading, error, data }) => {
                if (error) return <h1>error</h1>;
                if (loading) {
                  return <div> Loading test ...</div>;
                } else {
                  console.log('login', data);
                  if (data.checkUser === null) {
                    return <Redirect to="/signup" />;
                  } else {
                    console.log('login2', data);
                    let user = data.checkUser;
                    console.log(user);
                   
            //         return (
            //           <div>
            //             <h1>logged in</h1>
                    //   <ApolloConsumer>
                    //     {console.log('This is being hit')}
                    //   {client => (
                    //      client.writeData({
                    //       data: {
                    //         mentorMatch: {
                    //           __typename: 'mentorMatch',
                    //           userId: 5,
                    //           username: 'youngAlan',
                    //           description: 'love riding bikes',
                    //           cityOfResidence: 'NYC',
                    //           image: 'https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif'
                    //         }
                    //       }
                    //     })
                    //   )}
                    // </ApolloConsumer>

                    
                        // <Mutation mutation={UPDATE_USER_INFO} >
                        //   {updateUserInfo => (
                        //     // console.log(updateUserInfo);
                        //     <li className="sidebar-item" onClick={() => updateUserInfo({ variables: { userId: '123',
                        //                                                                               username: 'Alan',
                        //                                                                               description: 'Apollo State Mgmt ftw',
                        //                                                                               cityOfResidence: 'NYC',
                        //                                                                               image: 'https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif'} 
                        //                                                                             }).then(() => {
                        //                                                                               console.log('SUCESSSS!')
                        //                                                                             }).catch((err) => {
                        //                                                                               console.log("EROROROROROR", err)
                        //                                                                             })}>React</li>
                              
                        //   )}
                        // </Mutation>
                     
                        {/* <Query query={GET_USER_INFO}>
                          {({ loading, error, data }) => console.log(data)}
                        </Query> */}
            //           </div>
            //         );
                  }
                }
              }}
            </Query>
        
        );
      }
    }
  }
}

export default Login;

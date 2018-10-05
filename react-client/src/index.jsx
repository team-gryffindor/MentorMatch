import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { gql } from 'apollo-boost';

// components
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Feed from './components/Feed.jsx';
import ActiveLessons from './components/ActiveLessons.jsx';
import OfferedLessons from './components/OfferedLessons.jsx';
import PastLessons from './components/PastLessons.jsx';
import Dashboard from './components/Dashboard.jsx';
import UserProfileInfo from './components/UserProfileInfo.jsx';
import AddService from './components/AddService.jsx';
import RediSearch from './components/RediSearch.jsx';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: localStateDefaults,
  resolvers: {
    Mutation: {
      updateUserInfo: (
        _,
        { theUserName, theDescription, theCityOfResidence, theImage },
        { cache }
      ) => {
        client.writeData({
          data: {
            mentorMatch: {
              __typename: 'mentorMatch',
              username: theUserName,
              description: theDescription,
              cityOfResidence: theCityOfResidence,
              image: theImage
            }
          }
        });
      }
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: '/graphql'
    })
  ]),
  cache: cache
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleUserLoggingIn = this.handleUserLoggingIn.bind(this);
  }

  handleUserLoggingIn() {
    this.setState({
      userFavoritesData: favorites,
      userActiveLessons: active,
      userOfferedLessons: offered
    });
  }

  componentDidMount() {
    //set the state for today's top services
  }

  getUser() {}

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" render={() => <Home />} />
            <Route
              path="/login"
              render={() => <Login handleUserLoggingIn={this.handleUserLoggingIn} />}
            />
            <Route path="/signUp" render={() => <SignUp />} />
            <Route path="/active" render={() => <ActiveLessons />} />
            <Route path="/offered" render={() => <OfferedLessons />} />
            <Route path="/past" render={() => <PastLessons />} />
            <Route path="/feed" render={() => <Feed />} />
            <Route
              path="/dashboard"
              render={() => <Dashboard isLoggedIn={this.state.isLoggedIn} />}
            />
            <Route path="/userProfile" render={() => <UserProfileInfo />} />
            <Route path="/addService" render={() => <AddService />} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

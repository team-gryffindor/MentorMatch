import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
// import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
// import { withClientState } from 'apollo-link-state';
import localStateDefaults from './apollo/defaults';
import { StripeProvider } from 'react-stripe-elements';

import { GET_USER_INFO } from './apollo/resolvers/clientSideQueries';

import './style.css';
import App from './components/App.jsx';

const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const httpLink = new createHttpLink({
  uri: 'http://localhost:8080/graphql'
  // credentials: 'same-origin'
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
  resolvers: {}
});

// Check if userInfo saved from last use
const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log(`USERINFO IS THERE:${JSON.stringify(localUserInfo)}`);
// before filling with empty vals
if (localUserInfo) {
  console.log('Userinfo was found');
  cache.writeData({
    data: {
      userInfo: {
        __typename: 'userInfo',
        userId: localUserInfo.id,
        username: localUserInfo.name,
        description: localUserInfo.description,
        locationOfResidence: localUserInfo.locationOfResidence,
        cityOfResidence: localUserInfo.cityOfResidence,
        stateOfResidence: localUserInfo.stateOfResidence,
        image: localUserInfo.image,
        uid: localUserInfo.uid,
        lat: localUserInfo.lat,
        lng: localUserInfo.lng
      }
    }
  });
  const { userInfo } = cache.readQuery({ query: GET_USER_INFO });
  console.log(`userinfo readQuery: ${JSON.stringify(userInfo)}`);
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <StripeProvider apiKey={process.env.PUBLISHABLE_KEY}>
      <Router>
        <App />
      </Router>
    </StripeProvider>
  </ApolloProvider>,
  document.getElementById('app')
);

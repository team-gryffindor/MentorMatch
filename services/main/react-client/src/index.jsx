import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from 'react-router-dom';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import localStateDefaults from './apollo/defaults';
import { StripeProvider } from 'react-stripe-elements';

import App from './components/App.jsx';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: localStateDefaults,
  resolvers: {
    Mutation: {
      updateUserInfo: (
        _,
        {
          theUserId,
          theUserName,
          theDescription,
          theLocationOfResidence,
          theCityOfResidence,
          theStateOfResidence,
          theImage
        },
        { cache }
      ) => {
        cache.writeData({
          data: {
            userInfo: {
              __typename: 'userInfo',
              userId: theUserId,
              username: theUserName,
              description: theDescription,
              locationOfResidence: theLocationOfResidence,
              cityOfResidence: theCityOfResidence,
              stateOfResidence: theStateOfResidence,
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
      url: 'http:localhost:3000/',
      uri: '/graphql',
      credentials: 'same-origin'
    })
  ]),
  cache: cache
});

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

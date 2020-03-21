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

const token = await auth.currentUser.getIdToken(true);

const client = new ApolloClient({
  headers: { token: token },
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      url: 'http:localhost:' + process.env.SERVER_PORT,
      uri: '/graphql',
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
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

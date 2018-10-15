import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_USER } from '../../apollo/resolvers/backendQueries.js';
import { Redirect } from 'react-router-dom';

import Geosuggest from 'react-geosuggest';

class SignUp extends React.Component {
  state = {
    username: '',
    cityOfResidence: '',
    lat: 0,
    lgn: 0,
    description: '',
    image: '',
    redirect: false
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <Mutation mutation={ADD_USER}>
          {(addUser) => (
            <div>
              <h1>Sign Up! {console.log('props', this.props.uid)}</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addUser({
                    variables: {
                      name: this.state.username,
                      description: this.state.description,
                      cityOfResidence: this.state.cityOfResidence,
                      lat: this.state.lat,
                      lng: this.state.lng,
                      image: this.state.image,
                      uid: this.props.uid
                    }
                  }) // Cache the new user
                    .then(({ data }) => {
                      let userInDB = data.addUser;
                      this.props.apolloClient.writeData({
                        data: {
                          userInfo: {
                            __typename: 'userInfo',
                            userId: userInDB.id,
                            username: userInDB.name,
                            description: userInDB.description,
                            cityOfResidence: userInDB.cityOfResidence,
                            image: userInDB.image,
                            uid: userInDB.uid
                          }
                        }
                      });
                    })
                    .then(() => {
                      this.setState({ redirect: true }, () => this.props.handleLogin(true));
                    })
                    .catch((err) => console.error(err));
                }}
              >
                Name:
                <input
                  value={this.state.username}
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                />
                Description:
                <input
                  value={this.state.description}
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
                City:
                <Geosuggest
                  placeholder={'City of Residence'}
                  onSuggestSelect={(suggest) => {
                    console.log('CITY', typeof suggest.description);
                    this.setState(
                      {
                        cityOfResidence: suggest.description,
                        lat: suggest.location.lat,
                        lng: suggest.location.lng
                      },
                      () => {
                        console.log(this.state.lat, this.state.lng);
                      }
                    );
                  }}
                  types={['geocode']}
                  value={this.state.cityOfResidence}
                />
                Link to your image:
                <input
                  value={this.state.image}
                  onChange={(e) => {
                    console.log('CITY', this.state.cityOfResidence);
                    this.setState({ image: e.target.value });
                  }}
                />
                <button type="submit">Sign Up!</button>
              </form>
            </div>
          )}
        </Mutation>
      );
    }
  }
}

export default SignUp;

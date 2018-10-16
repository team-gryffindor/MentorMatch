import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_USER } from '../../apollo/resolvers/backendQueries.js';
import { Redirect } from 'react-router-dom';

import Geosuggest from 'react-geosuggest';
import { extractCityState } from '../../util/addressHelper.js';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    username: '',
    locationOfResidence: '',
    lat: 0,
    lgn: 0,
    cityOfResidence: '',
    stateOfResidence: '',
    description: '',
    image: '',
    redirect: false
  };

  reverseGeocode = () => {
    return (
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${
            this.state.lng
          }&result_type=locality&key=${process.env.MAP_API_KEY}`
        )
        .then((res) => {
          // console.log('IN AXIOS THEN', res.data.results[0]);
          // first address components is the most accurate address
          let { city, state } = extractCityState(res.data.results[0].address_components);
          this.setState({ cityOfResidence: city, stateOfResidence: state }, () => {
            console.log('DATA', res.data.results[0].address_components);
            console.log('REVERSE GEOCODE', city, state);
          });
        })
        // .then((results) => console.log(results))
        .catch((err) => {
          console.log('ERROR!~');
          console.error(err);
        })
    );
  };

  render() {
    console.log(this.state.redirect);
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <Mutation mutation={ADD_USER}>
          {(addUser) => (
            <div>
              <h1>Sign Up! {console.log('props', this.props.uid)}</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.reverseGeocode()
                    .then(() => {
                      console.log(this.state.cityOfResidence);
                      return addUser({
                        variables: {
                          name: this.state.username,
                          description: this.state.description,
                          locationOfResidence: this.state.locationOfResidence,
                          cityOfResidence: this.state.cityOfResidence,
                          stateOfResidence: this.state.stateOfResidence,
                          lat: this.state.lat,
                          lng: this.state.lng,
                          image: this.state.image,
                          uid: this.props.uid
                        }
                      });
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
                            locationOfResidence: userInDB.locationOfResidence,
                            cityOfResidence: userInDB.cityOfResidence,
                            stateOfResidence: userInDB.stateOfResidence,
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
                    if (suggest) {
                      console.log('CITY', typeof suggest.description);
                      this.setState(
                        {
                          locationOfResidence: suggest.description,
                          lat: suggest.location.lat,
                          lng: suggest.location.lng
                        },
                        () => {
                          console.log(this.state.lat, this.state.lng);
                        }
                      );
                    }
                  }}
                  types={['geocode']}
                  value={this.state.locationOfResidence}
                />
                Link to your image:
                <input
                  value={this.state.image}
                  onChange={(e) => {
                    console.log('CITY', this.state.locationOfResidence);
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

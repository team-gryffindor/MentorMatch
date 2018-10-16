import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { UPDATE_USER } from '../../apollo/resolvers/backendQueries.js';
import { UPDATE_USER_INFO, GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';
import Geosuggest from 'react-geosuggest';
import axios from 'axios';
import { extractCityState } from '../../util/addressHelper.js';

class UpdateProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.user);
    let {
      userId,
      username,
      image,
      locationOfResidence,
      cityOfResidence,
      stateOfResidence,
      description,
      lat,
      lng
    } = props.location.state.user;
    this.state = {
      userId: userId,
      username: username,
      image: image,
      locationOfResidence: locationOfResidence,
      cityOfResidence: cityOfResidence,
      stateOfResidence: stateOfResidence,
      description: description,
      lat: lat,
      lng: lng,
      editProfile: true
    };
  }

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

  editProfile = () => {
    this.setState({ editProfile: true });
  };

  render() {
    let {
      userId,
      username,
      image,
      locationOfResidence,
      cityOfResidence,
      stateOfResidence,
      description,
      lat,
      lng,
      editProfile
    } = this.state;
    console.log('STATE BEFORE QUERY AND MUTATION', this.state);
    // figure out how to conditionally render input fields
    if (editProfile) {
      return (
        <Mutation mutation={UPDATE_USER}>
          {(updateUser) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.reverseGeocode()
                  .then(() => {
                    updateUser({
                      variables: {
                        id: userId,
                        name: username,
                        image: image,
                        description: description,
                        locationOfResidence: locationOfResidence,
                        cityOfResidence: cityOfResidence,
                        stateOfResidence: stateOfResidence,
                        lat: lat,
                        lng: lng
                      }
                    });
                  }) // TODO: refactor to notify user of error with modal?
                  .then(() => {
                    return this.props.apolloClient.writeData({
                      data: {
                        userInfo: {
                          __typename: 'userInfo',
                          userId: userId,
                          username: username,
                          description: description,
                          locationOfResidence: locationOfResidence,
                          cityOfResidence: cityOfResidence,
                          stateOfResidence: stateOfResidence,
                          image: image,
                          lat: lat,
                          lng: lng
                        }
                      }
                    });
                  })
                  .then(() => {
                    this.setState({
                      editProfile: false
                    });
                  })
                  .catch((err) => console.error(err));
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder={username}
                  value={username}
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">About Me</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                  value={description}
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="img">My Location</label>
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
                          console.log(suggest, this.state.lat, this.state.lng);
                        }
                      );
                    }
                  }}
                  types={['geocode']}
                  initialValue={locationOfResidence}
                />
              </div>
              <div className="form-group">
                <label htmlFor="img">Link To My Profile Image</label>
                <input
                  type="img"
                  className="form-control"
                  id="img"
                  placeholder={image}
                  value={image}
                  onChange={(e) => {
                    this.setState({ image: e.target.value });
                  }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <Link to="/userProfile">
                  <button className="btn btn-secondary mb-2">Back To Profile</button>
                </Link>
                <button type="submit" className="btn btn-primary mb-2">
                  Update Profile
                </button>
              </div>
            </form>
          )}
        </Mutation>
      );
    } else {
      return <Redirect to="/userProfile" />;
    }
  }
}

export default UpdateProfileInfo;

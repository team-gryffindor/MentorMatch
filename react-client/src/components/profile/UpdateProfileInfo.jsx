import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { UPDATE_USER } from '../../apollo/resolvers/backendQueries.js';
import { UPDATE_USER_INFO, GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries.js';
import Geosuggest from 'react-geosuggest';

class UpdateProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    let {
      userId,
      username,
      image,
      cityOfResidence,
      description,
      lat,
      lng
    } = props.location.state.user;
    this.state = {
      userId: userId,
      username: username,
      image: image,
      cityOfResidence: cityOfResidence,
      description: description,
      lat: lat,
      lng: lng,
      editProfile: true
    };
  }

  editProfile = () => {
    this.setState({ editProfile: true });
  };

  render() {
    let {
      userId,
      username,
      image,
      cityOfResidence,
      description,
      lat,
      lng,
      editProfile
    } = this.state;
    // figure out how to conditionally render input fields
    if (editProfile) {
      return (
        <Mutation mutation={UPDATE_USER}>
          {(updateUser) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateUser({
                  variables: {
                    id: userId,
                    name: username,
                    image: image,
                    description: description,
                    cityOfResidence: cityOfResidence,
                    lat: lat,
                    lng: lng
                  }
                }) // TODO: refactor to notify user of error with modal?
                  .then(() => {
                    return this.props.apolloClient.writeData({
                      data: {
                        userInfo: {
                          __typename: 'userInfo',
                          userId: userId,
                          username: username,
                          description: description,
                          cityOfResidence: cityOfResidence,
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
                          cityOfResidence: suggest.description,
                          lat: suggest.location.lat,
                          lng: suggest.location.lng
                        },
                        () => {
                          console.log(lat, lng);
                        }
                      );
                    }
                  }}
                  types={['geocode']}
                  initialValue={cityOfResidence}
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

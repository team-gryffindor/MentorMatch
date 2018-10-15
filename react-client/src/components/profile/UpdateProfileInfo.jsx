import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { UPDATE_USER } from '../../apollo/resolvers/backendQueries.js';
import Geosuggest from 'react-geosuggest';

class UpdateProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.user);
    let { username, image, cityOfResidence, description, lat, lng } = props.location.state.user;
    this.state = {
      username: username,
      image: image,
      cityOfResidence: cityOfResidence,
      description: description,
      lat: lat,
      lng: lng
    };
  }

  editProfile = () => {
    this.setState({ editProfile: true });
  };

  render() {
    let { username, image, cityOfResidence, description, lat, lng, editProfile } = this.state;
    // figure out how to conditionally render input fields
    return (
      <Mutation mutation={UPDATE_USER}>
        {(updateUser) => (
          <div className="container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateUser({
                  variables: {
                    username: username,
                    description: description,
                    cityOfResidence: cityOfResidence,
                    lat: lat,
                    lng: lng,
                    image: image
                  }
                }) // TODO: refactor to notify user of error with modal?
                  .then((data) => data)
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
          </div>
        )}
      </Mutation>
    );
  }
}

export default UpdateProfileInfo;

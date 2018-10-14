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
          <React.Fragment>
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
              Name:
              <input
                value={username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              />
              Description:
              <input
                value={description}
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
                      console.log(lat, lng);
                    }
                  );
                }}
                types={['geocode']}
                value={cityOfResidence}
              />
              Link to your image:
              <input
                value={image}
                onChange={(e) => {
                  this.setState({ image: e.target.value });
                }}
              />
              <button type="submit">Update Profile</button>
            </form>
            <Link to="/userProfile">
              <button type="submit">Back To Profile</button>
            </Link>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default UpdateProfileInfo;

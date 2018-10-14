import React from 'react';
// import Header from './Header.jsx';
import { Mutation } from 'react-apollo';
import { UPDATE_USER } from '../apollo/resolvers/backendQueries.js';
import Geosuggest from 'react-geosuggest';

class UserProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.username,
      image: props.user.image,
      cityOfResidence: props.user.cityOfResidence,
      description: props.user.description,
      lat: props.user.lat,
      lng: props.user.lng,
      editProfile: false
    };
    this.editProfile = this.editProfile.bind(this);
  }

  editProfile() {
    this.setState({ editProfile: true });
    console.log(this.state);
  }

  render() {
    // figure out how to conditionally render input fields
    if (this.state.editProfile) {
      return (
        <Mutation mutation={UPDATE_USER}>
          {(updateUser) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateUser({
                  variables: {
                    name: this.state.username,
                    description: this.state.description,
                    cityOfResidence: this.state.cityOfResidence,
                    lat: this.state.lat,
                    lng: this.state.lng,
                    image: this.state.image
                  }
                }) // TODO: refactor to notify user of error with modal?
                  .then((data) => data)
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
                  this.setState({ image: e.target.value });
                }}
              />
              <button type="submit">Update Your Profile!</button>
            </form>
          )}
        </Mutation>
      );
    } else {
      return (
        <div>
          <ul>
            <div>
              <img src={this.props.user.image} className="img-responsive" />
              <h2>Hello {this.props.user.username}</h2>
            </div>
            <h2>{this.props.user.cityOfResidence}</h2>
            <p style={{ fontSize: '30px', textAlign: 'left' }}>{this.props.user.description}</p>
          </ul>
          <button onClick={this.editProfile}>Edit Profile</button>
        </div>
      );
    }
  }
}

export default UserProfileInfo;

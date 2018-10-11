import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { ADD_USER } from '../apollo/resolvers/backendQueries.js';

import Geosuggest from 'react-geosuggest';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cityOfResidence: '',
      description: '',
      image: ''
    };
  }

  render() {
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser) => (
          <div>
            <h1>Sign Up!</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addUser({
                  variables: {
                    name: this.state.username,
                    description: this.state.description,
                    cityOfResidence: this.state.cityOfResidence,
                    image: this.state.image,
                    uid: this.props.uid
                  }
                });
              }}
            >
              Name:
              <input
                value={this.state.username}
                onChange={(e) => {
                  console.log('CITY', this.state.cityOfResidence);
                  this.setState({ username: e.target.value });
                }}
              />
              Description:
              <input
                value={this.state.description}
                onChange={(e) => {
                  console.log('CITY', this.state.cityOfResidence);
                  this.setState({ description: e.target.value });
                }}
              />
              City:
              <Geosuggest
                placeholder={'City of Residence'}
                onSuggestSelect={(suggest) => {
                  console.log('CITY', typeof suggest.description);
                  this.setState({ cityOfResidence: suggest.description });
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

export default SignUp;

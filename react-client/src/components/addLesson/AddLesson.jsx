import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ADD_LESSON, GET_USER } from '../../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';
import Geosuggest from 'react-geosuggest';
import { extractCityState } from '../../util/addressHelper.js';
import axios from 'axios';

class AddLesson extends React.Component {
  state = {
    title: '',
    description: '',
    locationOfService: '',
    image: '',
    difficulty: '',
    userId: '',
    category: '',
    lng: 0,
    lat: 0,
    city: '',
    state: '',
    price: 0,
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
          this.setState({ city, state }, () => {
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
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    } else {
      return (
        <Query query={GET_USER_INFO}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            let userID = data.userInfo.userId;
            console.log('inside addLesson', userID);
            return (
              <Mutation
                mutation={ADD_LESSON}
                refetchQueries={[{ query: GET_USER, variables: { id: userID } }]}
              >
                {(addLesson) => {
                  return (
                    <div className="container">
                      <h1 style={{ textAlign: 'center' }}>Create a Lesson</h1>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          this.reverseGeocode()
                            .then(() => {
                              return addLesson({
                                variables: {
                                  title: this.state.title,
                                  description: this.state.description,
                                  locationOfService: this.state.locationOfService,
                                  lat: this.state.lat,
                                  lng: this.state.lng,
                                  cityOfService: this.state.city,
                                  stateOfService: this.state.state,
                                  image: this.state.image,
                                  difficulty: this.state.difficulty,
                                  userId: userID,
                                  category: this.state.category,
                                  price: Number(this.state.price)
                                }
                              });
                            })
                            .then((data) => {
                              console.log(data);
                              this.setState({
                                redirect: true
                              });
                            })
                            .catch((err) => console.error(err));
                        }}
                      >
                        <div className="form-group">
                          <label htmlFor="title">Lesson Title</label>
                          <input
                            type="title"
                            className="form-control"
                            id="title"
                            onChange={(e) => {
                              this.setState({ title: e.target.value });
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">About My Lesson</label>
                          <textarea
                            className="form-control"
                            id="description"
                            rows="5"
                            onChange={(e) => {
                              this.setState({ description: e.target.value });
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="price">Price of the Lesson</label>
                          <input
                            type="number"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                            onChange={(e) => {
                              this.setState({ price: e.target.value });
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="img">Location of the Lesson</label>
                          <Geosuggest
                            onSuggestSelect={(suggest) => {
                              if (suggest) {
                                this.setState(
                                  {
                                    locationOfService: suggest.description,
                                    lat: suggest.location.lat,
                                    lng: suggest.location.lng
                                  },
                                  () => {
                                    console.log(this.state.lat, this.state.lng);
                                  }
                                );
                              }
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="difficulty">Difficulty</label>
                          <select
                            className="form-control"
                            id="difficulty"
                            onChange={(e) => {
                              this.setState({ difficulty: e.target.value });
                            }}
                          >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="category">Lesson Category</label>
                          <select
                            className="form-control"
                            id="category"
                            onChange={(e) => {
                              this.setState({ category: e.target.value });
                            }}
                          >
                            <option value="Music">Music</option>
                            <option value="Sports">Sports</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Academic">Academic</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="img">Link To My Lesson Image</label>
                          <input
                            type="img"
                            className="form-control"
                            id="img"
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
                            Create Lesson
                          </button>
                        </div>
                      </form>
                    </div>
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      );
    }
  }
}

export default AddLesson;

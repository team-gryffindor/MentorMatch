import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_LESSON } from '../../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';
import Geosuggest from 'react-geosuggest';
import { Redirect } from 'react-router-dom';

class AddLesson extends React.Component {
  state = {
    title: '',
    description: '',
    cityOfService: '',
    image: '',
    difficulty: '',
    userId: '',
    category: '',
    lng: 0,
    lat: 0,
    price: '',
    redirect: false
  };

  submitForm = (e) => {
    this.setState({});
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
            return (
              <Mutation mutation={ADD_LESSON}>
                {(addLesson) => (
                  <div className="container">
                    <h1 style={{ textAlign: 'center' }}>Create a Lesson</h1>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        addLesson({
                          variables: {
                            title: this.state.title,
                            description: this.state.description,
                            cityOfService: this.state.cityOfService,
                            lat: this.state.lat,
                            lng: this.state.lng,
                            image: this.state.image,
                            difficulty: this.state.difficulty,
                            userId: userID,
                            category: this.state.category,
                            price: Number(this.state.price)
                          }
                        })
                          .then((data) => {
                            this.setState({
                              redirect: true
                            });
                          })
                          .catch((err) => console.error(err));
                      }}
                    >
                      <div className="form-group">
                        <label for="title">Lesson Title</label>
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
                        <label for="description">About My Lesson</label>
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
                        <label for="price">Price of the Lesson</label>
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
                        <label for="img">Location of the Lesson</label>
                        <Geosuggest
                          onSuggestSelect={(suggest) => {
                            console.log('CITY', suggest.description);
                            this.setState(
                              {
                                cityOfService: suggest.description,
                                lat: suggest.location.lat,
                                lng: suggest.location.lng
                              },
                              () => {
                                console.log(this.state.lat, this.state.lng);
                              }
                            );
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label for="difficulty">Difficulty</label>
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
                        <label for="category">Lesson Category</label>
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
                        <label for="img">Link To My Lesson Image</label>
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
                )}
              </Mutation>
            );
          }}
        </Query>
      );
    }
  }
}

export default AddLesson;

import React from 'react';
import { UPDATE_LESSON, GET_USER, GET_LESSON } from '../../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';
import Geosuggest from 'react-geosuggest';
import { Redirect, Link } from 'react-router-dom';

class UpdateLesson extends React.Component {
  state = {
    id: '',
    title: '',
    description: '',
    locationOfService: '',
    image: '',
    difficulty: '',
    category: '',
    lng: 0,
    lat: 0,
    price: '',
    redirect: false
  };

  componentDidMount() {
    let {
      id,
      title,
      description,
      locationOfService,
      image,
      difficulty,
      category,
      lat,
      lng,
      price
    } = this.props.lesson.state.lesson;
    this.setState({
      id: id,
      title: title,
      description: description,
      locationOfService: locationOfService,
      image: image,
      difficulty: difficulty,
      category: category,
      lng: lng,
      lat: lat,
      price: price
    });
  }
  render() {
    let {
      id,
      title,
      description,
      locationOfService,
      image,
      difficulty,
      category,
      lat,
      lng,
      price
    } = this.state;
    let { lesson } = this.props.lesson.state;
    if (this.state.redirect) {
      return (
        <Redirect
          to={{ pathname: `/lessonContent/${lesson.id}`, state: { lesson: lesson } }}
          style={{ textDecoration: 'none', color: 'black' }}
        />
      );
    } else {
      return (
        <Query query={GET_USER_INFO}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            let userId = data.userInfo.userId;
            return (
              <Mutation
                mutation={UPDATE_LESSON}
                refetchQueries={[{ query: GET_USER, variables: { id: userId } }]}
              >
                {(updateLesson) => (
                  <div className="container">
                    <h1 style={{ textAlign: 'center' }}>Edit Lesson</h1>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        updateLesson({
                          variables: {
                            id: this.state.id,
                            title: this.state.title,
                            description: this.state.description,
                            locationOfService: this.state.locationOfService,
                            lat: this.state.lat,
                            lng: this.state.lng,
                            image: this.state.image,
                            difficulty: this.state.difficulty,
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
                        <label htmlFor="title">Lesson Title</label>
                        <input
                          type="title"
                          className="form-control"
                          id="title"
                          value={title}
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
                          value={description}
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
                          value={price}
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
                          types={['geocode']}
                          initialValue={locationOfService}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="difficulty">Difficulty</label>
                        <select
                          className="form-control"
                          id="difficulty"
                          value={difficulty}
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
                          value={category}
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
                          value={image}
                          onChange={(e) => {
                            this.setState({ image: e.target.value });
                          }}
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <Link
                          to={{
                            pathname: `/lessonContent/${lesson.id}`,
                            state: { lesson: lesson }
                          }}
                          style={{ textDecoration: 'none', color: 'black' }}
                        >
                          <button className="btn btn-secondary mb-2">Back To Lesson</button>
                        </Link>
                        <button type="submit" className="btn btn-primary mb-2">
                          Edit Lesson
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

export default UpdateLesson;

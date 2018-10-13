import React from 'react';
import { ADD_LESSON } from '../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';
import Geosuggest from 'react-geosuggest';
import { Redirect } from 'react-router-dom';

class AddLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      cityOfService: '',
      image: '',
      difficulty: '',
      userId: '',
      category: '',
      lng: 0,
      ltd: 0,
      price: 1,
      redirect: false
    };
  }
  submitForm(e) {
    this.setState({});
  }
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
                  <div>
                    <p>Create a Lesson! {console.log(addLesson)}</p>
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
                      Title:
                      <input
                        value={this.state.title}
                        onChange={(e) => {
                          this.setState({ title: e.target.value });
                        }}
                      />
                      Description:
                      <textarea
                        value={this.state.description}
                        onChange={(e) => {
                          this.setState({ description: e.target.value });
                        }}
                      />
                      Price:
                      <input
                        value={this.state.price}
                        type="number"
                        onChange={(e) => {
                          this.setState({ price: e.target.value });
                        }}
                      />
                      City:
                      <Geosuggest
                        placeholder={'Location of Lesson'}
                        onSuggestSelect={(select) => {
                          this.setState({
                            cityOfService: select.description,
                            lat: select.location.lat,
                            lng: select.location.lng
                          });
                          console.log(select);
                        }}
                      />
                      Difficulty:
                      <input
                        value={this.state.difficulty}
                        onChange={(e) => {
                          this.setState({ difficulty: e.target.value });
                        }}
                      />
                      Category:
                      <input
                        value={this.state.category}
                        onChange={(e) => {
                          this.setState({ category: e.target.value });
                        }}
                      />
                      img:
                      <input
                        value={this.state.image}
                        onChange={(e) => {
                          this.setState({ image: e.target.value });
                        }}
                      />
                      <button type="submit">Create Lesson!</button>
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

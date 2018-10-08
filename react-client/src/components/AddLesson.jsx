import React from 'react';
import { ADD_LESSON } from '../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';

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
      category: ''
    };
  }
  submitForm(e) {
    this.setState({});
  }
  render() {
    return (
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let userID = data.mentorMatch.userId;
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
                          image: this.state.image,
                          difficulty: this.state.difficulty,
                          userId: userID,
                          category: this.state.category
                        }
                      });
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
                    <input
                      value={this.state.description}
                      onChange={(e) => {
                        this.setState({ description: e.target.value });
                      }}
                    />
                    City:
                    <input
                      value={this.state.cityOfService}
                      onChange={(e) => {
                        this.setState({ cityOfService: e.target.value });
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

export default AddLesson;

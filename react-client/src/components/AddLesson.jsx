import React from 'react';
import { ADD_LESSON } from '../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';
import Geosuggest from 'react-geosuggest';

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
    ltd: 0
  };

  render() {
    let { title, description, cityOfService, image, difficulty, category } = this.state;
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
                          title: title,
                          description: description,
                          cityOfService: cityOfService,
                          image: image,
                          difficulty: difficulty,
                          userId: userID,
                          category: category
                        }
                      });
                    }}
                  >
                    Title:
                    <input
                      value={title}
                      onChange={(e) => {
                        this.setState({ title: e.target.value });
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
                      value={difficulty}
                      onChange={(e) => {
                        this.setState({ difficulty: e.target.value });
                      }}
                    />
                    Category:
                    <input
                      value={category}
                      onChange={(e) => {
                        this.setState({ category: e.target.value });
                      }}
                    />
                    img:
                    <input
                      value={image}
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

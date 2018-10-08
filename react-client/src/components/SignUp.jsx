import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      city: '',
      description: '',
      image: ''
    };
  }

  render() {
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
  }
}

export default SignUp;

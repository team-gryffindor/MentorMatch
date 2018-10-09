import React from 'react';
import { ADD_REVIEW } from '../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: '',
      rating: 0
    };
  }
  render() {
    // figure out how to pull lessonid and userid
    return (
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let userID = data.mentorMatch.userId;
          return (
            <Mutation mutation={ADD_REVIEW}>
              {(addReview) => (
                <div>
                  <h3>Write a Review!</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      addReview({
                        variables: {
                          title: this.state.title,
                          comment: this.state.comment,
                          // TODO: restrict user using stars or something
                          rating: Number(this.state.rating),
                          lessonId: 1,
                          userId: 2
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
                    Comment:
                    <input
                      value={this.state.comment}
                      onChange={(e) => {
                        this.setState({ comment: e.target.value });
                      }}
                    />
                    Rating:
                    <input
                      value={this.state.rating}
                      onChange={(e) => {
                        this.setState({ rating: e.target.value });
                      }}
                    />
                    <button type="submit">Write Review!</button>
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

export default WriteReview;

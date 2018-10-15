import React from 'react';
import { ADD_REVIEW } from '../apollo/resolvers/backendQueries';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries';
import { Query, Mutation } from 'react-apollo';

class WriteReview extends React.Component {
  state = {
    title: '',
    comment: '',
    rating: 0
  }
 
  render() {
    let { lessonId } = this.props;
    let { title, comment, rating } = this.state;
    // TODO: need to refetch??
    return (
      <Query query={GET_USER_INFO}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let user = data.userInfo;
          console.log(lessonId);
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
                          title: title,
                          comment: comment,
                          // TODO: restrict user using stars or something
                          rating: Number(rating),
                          lessonId: lessonId,
                          userId: user.userId
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
                    Comment:
                    <input
                      value={comment}
                      onChange={(e) => {
                        this.setState({ comment: e.target.value });
                      }}
                    />
                    Rating:
                    <input
                      value={rating}
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

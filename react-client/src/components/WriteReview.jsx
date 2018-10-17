import React from 'react';
import { ADD_REVIEW, GET_USER, GET_LESSON } from '../apollo/resolvers/backendQueries';
import { Mutation, Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

class WriteReview extends React.Component {
  state = {
    title: '',
    comment: '',
    rating: 0,
    redirect: false,
    updatedLesson: {}
  };

  render() {
    let { title, comment, rating } = this.state;
    let { location } = this.props;
    let { lesson, userId } = location;
    console.log(lesson, userId);
    if (this.state.redirect) {
      return (
        <Query query={GET_LESSON} variables={{ id: lesson.lesson.id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            console.log('NEWLY QUERIED DATA FROM DB', data);
            return (
              <Redirect
                to={{
                  pathname: `/lessonContent/${lesson.lesson.id}`,
                  state: { lesson: data.lesson }
                }}
                style={{ textDecoration: 'none', color: 'black' }}
              />
            );
          }}
        </Query>
      );
    } else {
      return (
        <Query query={GET_LESSON} variables={{ id: lesson.lesson.id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return (
              <Mutation
                mutation={ADD_REVIEW}
                // refetchQueries={[{ query: GET_USER, variables: { id: userId.userId } }]}
              >
                {(addReview) => (
                  <div className="container">
                    <h1 style={{ textAlign: 'center' }}>Review Lesson, "{data.lesson.title}"</h1>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        addReview({
                          variables: {
                            title,
                            comment,
                            rating: Number(rating),
                            lessonId: lesson.lesson.id,
                            userId: userId.userId
                          }
                        })
                          .then(() => {
                            this.setState({
                              title: '',
                              comment: '',
                              rating: 0,
                              redirect: true,
                              updatedLesson: data.lesson
                            });
                          })
                          .catch((err) => console.error(err));
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="title">Comment Title</label>
                        <input
                          className="form-control"
                          id="title"
                          value={title}
                          onChange={(e) => {
                            this.setState({ title: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Comment</label>
                        <input
                          className="form-control"
                          id="comment"
                          value={comment}
                          onChange={(e) => {
                            this.setState({ comment: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="price">Rating</label>
                        <input
                          type="number"
                          className="form-control"
                          value={rating}
                          onChange={(e) => {
                            this.setState({ rating: e.target.value });
                          }}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary mb-2">
                        Submit a Review
                      </button>
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

export default WriteReview;

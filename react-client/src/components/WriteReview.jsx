import React from 'react';
import { ADD_REVIEW } from '../apollo/resolvers/backendQueries';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

class WriteReview extends React.Component {
    state = {
      title: '',
      comment: '',
      rating: 0
    }

  render() {
    let { title, comment, rating} = this.state;
    let { location } = this.props;
    let { lesson, userId } = location;
   
    return (
        <form>
          Title:
          <input
            placeholder='Title'
            value={title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
          Comment:
          <input
            placeholder='Comment'
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
          <Mutation mutation={ADD_REVIEW}>
            {(addReview) => (
              <button onClick={(e) => {
                e.preventDefault()
                addReview({
                  variables: {
                    title,
                    comment,
                    rating: Number(rating),
                    lessonId: lesson.lesson.id,
                    userId: userId.userId
                  }
                })
                this.setState({
                  title: '',
                  comment: '',
                  rating: 0
                })
                alert('Thank you for sending in your review!');
              }}>Submit Review</button>
            )}
          
          </Mutation>
        </form>
    );
  }
}

export default WriteReview;
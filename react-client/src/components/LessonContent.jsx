import React from 'react';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';

class LessonContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.lesson.title}</h2>
        <h4>{this.props.lesson.provider.name}</h4>
        <p>{this.props.lesson.description}</p>
        <span>
          rating: {this.props.lesson.avgRating} <br /> {this.props.lesson.numOfReviews} reviews
        </span>
        <ReviewList reviews={this.props.lesson.reviews} />
        {console.log(this.props.lesson.id)}
        <WriteReview />
      </div>
    );
  }
}

export default LessonContent;

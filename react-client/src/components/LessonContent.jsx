import React from 'react';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import LessonDetailHeader from './LessonDetailHeader.jsx';

class LessonContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.lesson);
    return (
      <div className="container" style={{ marginBottom: '30px' }}>
        <LessonDetailHeader lesson={this.props.lesson} />
        <h3>
          {this.props.lesson.numOfReviews} reviews from people who took{' '}
          {this.props.lesson.provider.name}
          's lesson
          <br />
        </h3>
        <ReviewList reviews={this.props.lesson.reviews} />
        {console.log(this.props.lesson.id)}
        <WriteReview lessonId={this.props.lesson.id} />
      </div>
    );
  }
}

export default LessonContent;

import React from 'react';
import MentorInfo from './MentorInfo.jsx';

const LessonDetailHeader = ({ lesson }) => {
  console.log(lesson);
  return (
    <div className="lesson-detail-header-margin-top">
      <div className="jumbotron">
        <span className="badge badge-pill badge-info">{lesson.category}</span>
        <div className="d-flex w-100 justify-content-between">
          <h1 className="display-4">{lesson.title}</h1>
          <small className="text">
            <p style={{ textAlign: 'right' }}>
              Location: {lesson.cityOfService}
              <br />
              Difficulty: {lesson.difficulty}
            </p>
          </small>
        </div>
        <h4>About your Lesson</h4>
        <p className="lead">{lesson.description}</p>
        <hr className="my-4" />
        <MentorInfo provider={lesson.provider} />
        <p className="lead text-right">
          <a className="btn btn-info btn-lg" href="#" role="button">
            Book Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default LessonDetailHeader;

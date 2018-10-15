import React from 'react';
import { Mutation } from 'react-apollo';
import { DELETE_SIGNUP_LESSON } from '../../apollo/resolvers/backendQueries.js';

const CancelNow = ({ userId, toggleBooking, lesson }) => (

    
  <Mutation
    mutation={DELETE_SIGNUP_LESSON}
   >
      {(deleteSignupLesson) => (
        <button
          type="button"
          className="btn btn-default"
          onClick={() => {
            deleteSignupLesson({
              variables: {
                userId: userId,
                lessonId: lesson.id
              }
            }).then((data) => {
              toggleBooking(false);
            }).catch((err) => {
              console.error('Error inside CancelNow Component', err);
            })
          }}
        >
          Cancel Booking
        </button>
      )}
    </Mutation>
)

export default CancelNow;


import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import {
  ADD_FAVORITE_LESSON,
  DELETE_FAVORITE_LESSON,
  ADD_SIGNUP_LESSON,
  DELETE_SIGNUP_LESSON,
  GET_USER
} from '../../apollo/resolvers/backendQueries.js';
import { extractCityState } from '../../util/addressHelper.js';

import Checkout from '../checkout/Checkout.jsx';
import BookNow from './BookNow.jsx';
import CancelNow from './CancelNow.jsx';

const LessonContentHeader = ({
  userCompletedPayment,
  paid,
  renderPayment,
  payNow,
  lesson,
  isLoggedIn,
  isFavorite,
  isBooked,
  toggleFavorite,
  toggleBooking,
  userId
}) => {
  let mutateFav = ADD_FAVORITE_LESSON;
  if (isFavorite) mutateFav = DELETE_FAVORITE_LESSON;
  let mutateBooking = ADD_SIGNUP_LESSON;
  if (isBooked) mutateBooking = DELETE_SIGNUP_LESSON;
  // let { city, state } = extractCityState(lesson.location.addressComponents);
  let providerId = lesson.provider.id;
  return (
    <div className="lesson-detail-header-margin-top">
      <div className="jumbotron">
        <div className="container">
          <span className="badge badge-pill badge-primary">{lesson.category}</span>
          <div className="d-flex w-100 justify-content-between">
            <h1>{lesson.title}</h1>
            <small className="text">
              <p style={{ textAlign: 'right' }}>
                Location: {lesson.cityOfService}, {lesson.stateOfService}
                <br />
                Difficulty: {lesson.difficulty} + {lesson.id}
                <br />
                Price: ${lesson.price}
                /hour
              </p>
            </small>

            {/* wrap this in a mutation tag and refectch here? */}
            <Mutation
              mutation={mutateFav}
              refetchQueries={[{ query: GET_USER, variables: { id: userId } }]}
            >
              {(mutateFavorite) => {
                if (isLoggedIn) {
                  return (
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={() => {
                        mutateFavorite({
                          variables: {
                            userId: userId,
                            lessonId: lesson.id
                          }
                        }).then((data) => {
                          toggleFavorite(!isFavorite);
                        });
                      }}
                    >
                      {isFavorite ? <i className="fas fa-star" /> : <i className="far fa-star" />}
                    </button>
                  );
                } else return null;
              }}
            </Mutation>
          </div>
          <h4>About your Lesson</h4>
          <p className="lead">{lesson.description}</p>
          <hr className="my-4" />
          <div>
            <img
              className="profile-image rounded border"
              src={lesson.provider.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '../Default.png';
              }}
              alt={'mentor image'}
            />
            {/* <img src={lesson.provider.image} className="profile-image" /> */}
            <h4>About your mentor, {lesson.provider.name}</h4>
            <p>{lesson.provider.description}</p>
          </div>
          <div className="d-flex justify-content-end">
            {isLoggedIn ? (
              isBooked ? (
                // <button onClick={() => toggleBooking(false)}>Cancel Booking</button>
                <CancelNow lesson={lesson} toggleBooking={toggleBooking} userId={userId} />
              ) : (
                <BookNow event={lesson} userId={userId} renderPayment={renderPayment} />
              )
            ) : null}
            {payNow ? (
              <Checkout userCompletedPayment={userCompletedPayment} lesson={lesson} />
            ) : null}
            {providerId === userId ? (
              <Link to={{ pathname: '/editLesson', state: { lesson: lesson } }}>
                <button className="btn btn-secondary mb-2">Edit Lesson</button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContentHeader;

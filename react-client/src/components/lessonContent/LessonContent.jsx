import React from 'react';

import LessonContentHeader from './LessonContentHeader.jsx';
import Map from './map/Map.jsx';
import Reviews from './reviews/Reviews.jsx';

class LessonContent extends React.Component {
  state = {
    isLoggedIn: this.props.isLoggedIn,
    isFavorite: this.props.isFavorite,
    isBooked: this.props.isBooked,
    payNow: false,
    paid: false
  };

  userCompletedPayment = (boolean) => {
    this.setState({
      paid: boolean,
      payNow: false,
      isBooked: true
    });
  };

  renderPayment = (boolean) => {
    this.setState({
      payNow: boolean
    });
  };

  toggleFavorite = (favorite) => {
    this.setState({
      isFavorite: favorite
    });
  };

  toggleBooking = (booking) => {
    this.setState({
      isBooked: booking
    });
  };

  render() {
    let { lesson, userId } = this.props;
    let { isLoggedIn, isFavorite, isBooked, payNow, paid } = this.state;
    return (
      <div className="container" style={{ marginBottom: '30px' }}>
        <LessonContentHeader
          lesson={lesson}
          userCompletedPayment={this.userCompletedPayment}
          paid={paid}
          renderPayment={this.renderPayment}
          payNow={payNow}
          isLoggedIn={isLoggedIn}
          isFavorite={isFavorite}
          isBooked={isBooked}
          toggleFavorite={this.toggleFavorite}
          toggleBooking={this.toggleBooking}
          userId={userId}
        />
        <Map
          style={{ height: '60vh', width: '100%', marginBottom: '30px' }}
          location={{
            center: {
              lat: lesson.lat,
              lng: lesson.lng
            }
          }}
        />
        <Reviews lesson={lesson} />
      </div>
    );
  }
}

export default LessonContent;

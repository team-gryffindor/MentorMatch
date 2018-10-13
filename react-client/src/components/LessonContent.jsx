import React from 'react';
import LessonDetailHeader from './LessonDetailHeader.jsx';
import Map from './Map.jsx';
import Reviews from './Reviews.jsx';

class LessonContent extends React.Component {
  state = {
    isFavorite: this.props.isFavorite,
    isBooked: this.props.isBooked,
    payNow: false, 
    paid: false
  };

  // use this to setState?
  // and mutate?
  userCompletedPayment = (boolean) => {
    this.setState({
      paid: boolean
    })
  }

  renderPayment = (boolean) => {
    this.setState({
      payNow: boolean
    })
  }

  toggleFavorite = (favorite) => {
    this.setState({
      isFavorite: favorite
    });
  };

  toggleBooking = (booking) => {
    this.setState({
      isBooked: booking,
    });
  };

  render() {
    let { lesson, userId } = this.props;
    let { isFavorite, isBooked, payNow, paid } = this.state;
    console.log(lesson, lesson.lat, lesson.ltn);
    return (
      <div className="container" style={{ marginBottom: '30px' }}>
        <LessonDetailHeader
          lesson={lesson}
          userCompletedPayment={this.userCompletedPayment}
          paid={paid}
          renderPayment={this.renderPayment}
          payNow={payNow}
          isFavorite={isFavorite}
          isBooked={isBooked}
          toggleFavorite={this.toggleFavorite}
          toggleBooking={this.toggleBooking}
          userId={userId}
        />
        <h3>
          {lesson.numOfReviews} reviews from people who took {lesson.provider.name}
          's lesson
          <br />
        </h3>

        <Map
          style={{ height: '80vh', width: '100%' }}
          location={{
            center: {
              lat: lesson.lat,
              lng: lesson.lng
            }
          }}
        />
        <Reviews lesson={lesson} />
        {console.log(lesson.id)}
        {/* <WriteReview lessonId={lesson.id} /> */}
      </div>
    );
    // Moved this into index.js
    // console.log(lesson);
    // TODO: if isLoggedIN from app state do this
    // else just render without this query
    // return (
    //   <Query query={GET_USER_INFO} className="container">
    //     {({ loading, error, data }) => {
    //       if (error) return <h1>Error...</h1>;
    //       if (loading || !data) return <h1>Loading...</h1>;
    //       let user = data.userInfo;
    //       return (
    //         <Query query={GET_USER_FAVORITES} variables={{ id: 2 }}>
    //           {({ loading, error, data }) => {
    //             if (error) return <h1>Error...</h1>;
    //             if (loading) return <h1>Loading...</h1>;
    //             // TODO:
    //             let favorite = false;
    //             let userFavorites = data.user.favoriteLessons;
    //             for (let i = 0; i < userFavorites.length; i++) {
    //               if (userFavorites[i].id === lesson.id) {
    //                 favorite = true;
    //                 break;
    //               }
    //             }
    //             console.log('computed favorite', favorite, 'state', isFavorite);
    //             console.log('toggle', this.toggleFavorite);
    //             if (favorite !== isFavorite) {
    //               this.toggleFavorite(favorite);
    //             }
    //             return (
    //               <div className="container" style={{ marginBottom: '30px' }}>
    //                 <LessonDetailHeader
    //                   lesson={lesson}
    //                   userId={user.userId}
    //                   isFavorite={isFavorite}
    //                   toggleFavorite={this.toggleFavorite}
    //                 />
    //                 <h3>
    //                   {lesson.numOfReviews} reviews from people who took{' '}
    //                   {lesson.provider.name}
    //                   's lesson
    //                   <br />
    //                 </h3>

    //                 <ReviewList reviews={lesson.reviews} />
    //                 {console.log(lesson.id)}
    //                 <WriteReview lessonId={lesson.id} />
    //               </div>
    //             );
    //           }}
    //         </Query>
    //       );
    //     }}
    //   </Query>
    // );
  }
}

export default LessonContent;

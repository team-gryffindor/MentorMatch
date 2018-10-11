import React from 'react';
import LessonDetailHeader from './LessonDetailHeader.jsx';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../apollo/resolvers/clientSideQueries.js';
import { GET_USER_FAVORITES } from '../apollo/resolvers/backendQueries.js';
import Map from './Map.jsx';
import Reviews from './Reviews.jsx';

class LessonContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: props.isFavorite,
      isBooked: props.isBooked
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.toggleBooking = this.toggleBooking.bind(this);
  }
  // use this to setState?
  // and mutate?
  toggleFavorite(favorite) {
    this.setState({
      isFavorite: favorite
    });
  }
  toggleBooking(booking) {
    this.setState({
      isBooked: booking
    });
  }

  render() {
    return (
      <div className="container" style={{ marginBottom: '30px' }}>
        <LessonDetailHeader
          lesson={this.props.lesson}
          // userId={user.userId}
          isFavorite={this.state.isFavorite}
          isBooked={this.state.isBooked}
          toggleFavorite={this.toggleFavorite}
          toggleBooking={this.toggleBooking}
          userId={this.props.userId}
        />
        <h3>
          {this.props.lesson.numOfReviews} reviews from people who took{' '}
          {this.props.lesson.provider.name}
          's lesson
          <br />
        </h3>

        <Map style={{ height: '80vh', width: '100%' }} />
        {/* <SimpleMap location={this.props.lesson.cityOfService} /> */}
        <Reviews lesson={this.props.lesson} />
        {console.log(this.props.lesson.id)}
        {/* <WriteReview lessonId={this.props.lesson.id} /> */}
      </div>
    );
    // Moved this into index.js
    // console.log(this.props.lesson);
    // TODO: if this.props.isLoggedIN from app state do this
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
    //               if (userFavorites[i].id === this.props.lesson.id) {
    //                 favorite = true;
    //                 break;
    //               }
    //             }
    //             console.log('computed favorite', favorite, 'state', this.state.isFavorite);
    //             console.log('toggle', this.toggleFavorite);
    //             if (favorite !== this.state.isFavorite) {
    //               this.toggleFavorite(favorite);
    //             }
    //             return (
    //               <div className="container" style={{ marginBottom: '30px' }}>
    //                 <LessonDetailHeader
    //                   lesson={this.props.lesson}
    //                   userId={user.userId}
    //                   isFavorite={this.state.isFavorite}
    //                   toggleFavorite={this.toggleFavorite}
    //                 />
    //                 <h3>
    //                   {this.props.lesson.numOfReviews} reviews from people who took{' '}
    //                   {this.props.lesson.provider.name}
    //                   's lesson
    //                   <br />
    //                 </h3>

    //                 <ReviewList reviews={this.props.lesson.reviews} />
    //                 {console.log(this.props.lesson.id)}
    //                 <WriteReview lessonId={this.props.lesson.id} />
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

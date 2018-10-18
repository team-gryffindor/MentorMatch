const Models = require('./server/db/index.js');

// const ADD_USER = gql`
//   mutation(
//     $name: String!
//     $description: String!
//     $locationOfResidence: String!
//     $image: String!
//     $uid: ID!
//     $lat: Float!
//     $lng: Float!
//     $cityOfResidence: String!
//     $stateOfResidence: String!
//   ) {
//     addUser(
//       name: $name
//       description: $description
//       locationOfResidence: $locationOfResidence
//       cityOfResidence: $cityOfResidence
//       stateOfResidence: $stateOfResidence
//       image: $image
//       uid: $uid
//       lat: $lat
//       lng: $lng
//     ) {
//       name
//       description
//       locationOfResidence
//       cityOfResidence
//       stateOfResidence
//       image
//       id
//       uid
//       lat
//       lng
//     }
//   }
// `;
//  addUser({
//   variables: {
//     name: this.state.username,
//     description: this.state.description,
//     locationOfResidence: this.state.locationOfResidence,
//     cityOfResidence: this.state.cityOfResidence,
//     stateOfResidence: this.state.stateOfResidence,
//     lat: this.state.lat,
//     lng: this.state.lng,
//     image: this.state.image,
//     uid: this.props.uid
//   }
// });

const users = 
{ 
  variables:[
    {
      name: "Jeanette Walter DDS",
      description: "",
      locationOfResidence: "369 Lexington Avenue, New York, NY, USA",
      cityOfResidence: "New York",
      stateOfResidence: "NY",
      lat: 40.750471,
      lng: -73.97640409999997,
      image:"https://s3.amazonaws.com/uifaces/faces/twitter/reetajayendra/128.jpg", 
      uid:  "gXzg9ab4GxbAmqXV39C2mxpMtMc2"
    },
    {
      name: "Deshawn Krajcik",
      description: "",
      locationOfResidence: "124 12th Avenue, New York, NY, USA",
      cityOfResidence: "New York", 
      stateOfResidence: "NY",
      lat: 40.7682779,
      lng: -73.99546329999998,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg",
      uid:  "gXzg9ab4GxbAmqXV39C2xypMtMc2"
    },
    {
      name: "Rosalee Waelchi",
      description: '',
      locationOfResidence: "12 West 109th Street, New York, New York, USA",
      cityOfResidence: "New York",
      stateOfResidence: "NY", 
      lat: 40.8002555,
      lng: -73.95948699999997,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg", 
      uid: "fGzg9ab4GxbAmqXV39C2xypMtMc2"
    },
    {
      name: "Hettie Reinger",
      description: '',
      locationOfResidence: "43 West Street, NY, New York, USA",
      cityOfResidence: "New York",
      stateOfResidence: "NY",
      lat: 40.7093519,
      lng: -74.01523859999998,
      image:"https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg",
      uid:  "gGzg9ab4GxbAmqXV49C2xypMtMc2"
    },
    {
      name: "Marina Rice",
      description: '',
      locationOfResidence:  "123 East 16th Street, New York, New York, USA",
      cityOfResidence: "New York",
      stateOfResidence: "NY",
      lat: 40.7352956,
      lng: -73.987819,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/aislinnkelly/128.jpg",
      uid: "fGzg9ab4GxbAmqXV39C2xypMtCb3" 
    },
    {
      name: "Frankie Waters",
      description: '',
      locationOfResidence:  "100 Park Ave, New York, New York, USA",
      cityOfResidence: "New York",
      stateOfResidence: "NY",
      lat: 40.751357,
      lng: -73.97896000000003,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/vaughanmoffitt/128.jpg",
      uid:  "yTzg9ab4GxbAmqXV39C2xypMtMc2"
    },
    {
      name: "Hillary Mraz",
      description: '',
      locationOfResidence: "110 West Road, San Francisco, CA, USA",
      cityOfResidence: "San Francisco",
      stateOfResidence: "CA",
      lat: 37.7271095,
      lng: -122.4479981,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/kaelifa/128.jpg",
      uid:  "yTzg9ab4GxbAmqBM39C2xypMtMc2"
    },
    {
      name: "Malachi Lubowitz",
      description: '',
      locationOfResidence: "98 Avenue D, San Francisco, CA, USA",
      cityOfResidence: "San Francisco",
      stateOfResidence: "CA",
      lat: 37.8242848,
      lng: -122.37279820000003,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/depaulawagner/128.jpg",
      uid:  "wBzg9ab4GxbAmqBM39C2xypMtMc4"
    },
    {
      name: "Damaris Stokes",
      description: '',
      locationOfResidence:  "645 Market Street, San Francisco, CA, USA",
      cityOfResidence: "San Francisco",
      stateOfResidence: "CA",
      lat: 37.7882706,
      lng: -122.40233790000002,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/uxpiper/128.jpg",
      uid:  "wBzg9ab4GxbAmqBM39C2vcpGtMc4"
    },
    {
      name: "Mark Stanton",
      description: '',
      locationOfResidence: "356 Volkman Drive, Victor, NY, USA",
      cityOfResidence: "Victor",
      stateOfResidence: "NY",
      lat: 42.9890298,
      lng: -77.37786410000001, 
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/brandonburke/128.jpg",
      uid:  "eBzg6sd4GxbAmqBM39C2xypMtMc4"
    },
    {
      name: 'Baron Abshire',
      description: '',
      locationOfResidence: "669 New York Avenue, Huntington, New York, USA",
      cityOfResidence: "Huntington",
      stateOfResidence: "NY",
      lat: 40.8603303,
      lng: -73.4209502,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/bradenhamm/128.jpg",
      uid:  "eYzg7dy7GxbAmqBM39C2xypMtMc4"
    },
    {
      name: 'Liza Streich',
      description: '',
      locationOfResidence: "9593 New York 25A, Flushing, NY, USA",
      cityOfResidence: "New York",
      stateOfResidence: "NY",
      lat: 40.7619866,
      lng: -73.80362680000002,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/megdraws/128.jpg",
      uid:  "tGwg7dy6GxbAmqDM39C2xypMtMc4"
    }
  ]
}

Models.User.bulkCreate(users.variables)
            .then((data) => {
              console.log('DATA', data)
            })
            .catch((err) => {
              console.error('Error inside', err)
            })
// const lessons = {

// }












// return addLesson({
//   variables: {
//     title: this.state.title,
//     description: this.state.description,
//     locationOfService: this.state.locationOfService,
//     lat: this.state.lat,
//     lng: this.state.lng,
//     cityOfService: this.state.city,
//     stateOfService: this.state.state,
//     image: this.state.image,
//     difficulty: this.state.difficulty,
//     userId: userID,
//     category: this.state.category,
//     price: Number(this.state.price)
//   }
// });
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
      locationOfResidence: "2811 Crona Street, Junction City, OR, USA",
      cityOfResidence: "Junction City", 
      stateOfResidence: "OR",
      lat: 44.2169933,
      lng: -123.19362239999998,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg",
      uid:  "gXzg9ab4GxbAmqXV39C2xypMtMc2"
    },
    {
      name: "Rosalee Waelchi",
      description: '',
      locationOfResidence: "12 120th Street, Queens, NY, USA",
      cityOfResidence: "Queens",
      stateOfResidence: "NY", 
      lat: 40.678533,
      lng: -73.81966,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg", 
      uid: "fGzg9ab4GxbAmqXV39C2xypMtMc2"
    },
    {
      name: "Hettie Reinger",
      description: '',
      locationOfResidence: "18087 168th Street, Jamaica, NY, USA",
      cityOfResidence: "Jamaica",
      stateOfResidence: "NY",
      lat: 40.7086116,
      lng: -73.79392610000002,
      image:"https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg",
      uid:  "fGzg9ab4GxbAmqXV39C2xypMtMc2"
    },
    {
      name: "Marina Rice",
      description: '',
      locationOfResidence: "29748 East Warren Avenue, Detroit, MI, USA",
      cityOfResidence: "Detroit",
      stateOfResidence: "MI",
      lat: 42.4119322,
      lng: -82.91300609999996,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/aislinnkelly/128.jpg",
      uid: "fGzg9ab4GxbAmqXV39C2xypMtCb3" 
    },
    {
      name: "Frankie Waters",
      description: '',
      locationOfResidence: "1718 Jaydee Court, Far Rockaway, NY, USA",
      cityOfResidence: "Far Rockaway",
      stateOfResidence: "NY",
      lat: 40.6072837,
      lng: -73.7578295000000,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/vaughanmoffitt/128.jpg",
      uid:  "yTzg9ab4GxbAmqXV39C2xypMtMc2"
    },
    {
      name: "Hillary Mraz",
      description: '',
      locationOfResidence: "8583 Flavie Road, Kaplan, LA, USA",
      cityOfResidence: "Kaplan",
      stateOfResidence: "LA",
      lat: 29.9812,
      lng: -92.28793999999999,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/kaelifa/128.jpg",
      uid:  "yTzg9ab4GxbAmqBM39C2xypMtMc2"
    },
    {
      name: "Malachi Lubowitz",
      description: '',
      locationOfResidence: "113 Walsh Road, Lagrangeville, New York, USA",
      cityOfResidence: "Lagrangeville",
      stateOfResidence: "NY",
      lat: 41.6721431,
      lng: -73.71962819999999,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/depaulawagner/128.jpg",
      uid:  "wBzg9ab4GxbAmqBM39C2xypMtMc4"
    },
    {
      name: "Damaris Stokes",
      description: '',
      locationOfResidence:  "889 Danny Court, Dix Hills, New York, USA",
      cityOfResidence: "Dix Hills",
      stateOfResidence: "NY",
      lat: 40.7973069,
      lng: -73.36147399999999,
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
      cityOfResidence: "Flushing",
      stateOfResidence: "NY",
      lat: 40.7619866,
      lng: -73.80362680000002,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/megdraws/128.jpg",
      uid:  "tGwg7dy6GxbAmqDM39C2xypMtMc4"
    }
  ]
}
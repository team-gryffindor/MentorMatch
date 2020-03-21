const Models = require('./db/index.js');
const faker = require('faker');

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

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

const users = {
  variables: [
    {
      name: 'Jeanette Walter DDS',
      description: faker.lorem.paragraph(),
      locationOfResidence: '369 Lexington Avenue, New York, NY, USA',
      cityOfResidence: 'New York',
      stateOfResidence: 'NY',
      lat: 40.750471,
      lng: -73.97640409999997,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/reetajayendra/128.jpg',
      uid: 'gXzg9ab4GxbAmqXV39C2mxpMtMc2'
    },
    {
      name: 'Deshawn Krajcik',
      description: faker.lorem.paragraph(),
      locationOfResidence: '124 12th Avenue, New York, NY, USA',
      cityOfResidence: 'New York',
      stateOfResidence: 'NY',
      lat: 40.7682779,
      lng: -73.99546329999998,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg',
      uid: 'gXzg9ab4GxbAmqXV39C2xypMtMc2'
    },
    {
      name: 'Rosalee Waelchi',
      description: faker.lorem.paragraph(),
      locationOfResidence: '12 West 109th Street, New York, New York, USA',
      cityOfResidence: 'New York',
      stateOfResidence: 'NY',
      lat: 40.8002555,
      lng: -73.95948699999997,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg',
      uid: 'fGzg9ab4GxbAmqXV39C2xypMtMc2'
    },
    {
      name: 'Hettie Reinger',
      description: faker.lorem.paragraph(),
      locationOfResidence: '43 West Street, NY, New York, USA',
      cityOfResidence: 'New York',
      stateOfResidence: 'NY',
      lat: 40.7093519,
      lng: -74.01523859999998,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg',
      uid: 'gGzg9ab4GxbAmqXV49C2xypMtMc2'
    },
    {
      name: 'Marina Rice',
      description: faker.lorem.paragraph(),
      locationOfResidence: '123 East 16th Street, New York, New York, USA',
      cityOfResidence: 'New York',
      stateOfResidence: 'NY',
      lat: 40.7352956,
      lng: -73.987819,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/aislinnkelly/128.jpg',
      uid: 'fGzg9ab4GxbAmqXV39C2xypMtCb3'
    },
    {
      name: 'Frankie Waters',
      description: faker.lorem.paragraph(),
      locationOfResidence: '100 Park Ave, New York, New York, USA',
      cityOfResidence: 'New York',
      stateOfResidence: 'NY',
      lat: 40.751357,
      lng: -73.97896000000003,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/vaughanmoffitt/128.jpg',
      uid: 'yTzg9ab4GxbAmqXV39C2xypMtMc2'
    },
    {
      name: 'Hillary Mraz',
      description: faker.lorem.paragraph(),
      locationOfResidence: '110 West Road, San Francisco, CA, USA',
      cityOfResidence: 'San Francisco',
      stateOfResidence: 'CA',
      lat: 37.7271095,
      lng: -122.4479981,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kaelifa/128.jpg',
      uid: 'yTzg9ab4GxbAmqBM39C2xypMtMc2'
    },
    {
      name: 'Malachi Lubowitz',
      description: faker.lorem.paragraph(),
      locationOfResidence: '98 Avenue D, San Francisco, CA, USA',
      cityOfResidence: 'San Francisco',
      stateOfResidence: 'CA',
      lat: 37.8242848,
      lng: -122.37279820000003,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/depaulawagner/128.jpg',
      uid: 'wBzg9ab4GxbAmqBM39C2xypMtMc4'
    },
    {
      name: 'Damaris Stokes',
      description: faker.lorem.paragraph(),
      locationOfResidence: '645 Market Street, San Francisco, CA, USA',
      cityOfResidence: 'San Francisco',
      stateOfResidence: 'CA',
      lat: 37.7882706,
      lng: -122.40233790000002,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/uxpiper/128.jpg',
      uid: 'wBzg9ab4GxbAmqBM39C2vcpGtMc4'
    },
    {
      name: 'Mark Stanton',
      description: faker.lorem.paragraph(),
      locationOfResidence: '11 Boston Street, Boston, MA, USA',
      cityOfResidence: 'Boston',
      stateOfResidence: 'MA',
      lat: 42.3291384,
      lng: -71.057547,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/brandonburke/128.jpg',
      uid: 'eBzg6sd4GxbAmqBM39C2xypMtMc4'
    },
    {
      name: 'Baron Abshire',
      description: faker.lorem.paragraph(),
      locationOfResidence: '334 West Chicago Avenue, Chicago, IL, USA',
      cityOfResidence: 'Chicago',
      stateOfResidence: 'IL',
      lat: 41.8967046,
      lng: -87.63700449999999,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/bradenhamm/128.jpg',
      uid: 'eYzg7dy7GxbAmqBM39C2xypMtMc4'
    },
    {
      name: 'Liza Streich',
      description: faker.lorem.paragraph(),
      locationOfResidence: 'The Breakfast Klub, Travis Street, Houston, TX, USA',
      cityOfResidence: 'Houston',
      stateOfResidence: 'TX',
      lat: 29.738557,
      lng: -95.38065660000001,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/megdraws/128.jpg',
      uid: 'tGwg7dy6GxbAmqDM39C2xypMtMc4'
    }
  ]
};

// Models.User.bulkCreate(users.variables)
//   .then((data) => {
//     console.log('DATA', data);
//   })
//   .catch((err) => {
//     console.log('Error in fake/data/users', err);
//   });

var categories = ['Music', 'Sports', 'Cooking', 'Academic', 'Gaming', 'Arts', 'Miscellaneous'];
var difficulty = ['Beginner', 'Intermediate', 'Expert'];

const addFakeLessons = () => {
  var lessons = {
    variables: []
  };
  for (var i = 0; i < users.variables.length; i++) {
    for (var j = 0; j < 20; j++) {
      let lesson = {};
      lesson.title = faker.lorem.words();
      lesson.description = faker.lorem.paragraph();
      lesson.locationOfService = users.variables[i].locationOfResidence;
      lesson.lat = users.variables[i].lat;
      lesson.lng = users.variables[i].lng;
      lesson.cityOfService = users.variables[i].cityOfResidence;
      lesson.stateOfService = users.variables[i].stateOfResidence;
      lesson.image = `https://picsum.photos/1200/600?image=${800 + j + i * 20}`;
      lesson.difficulty = difficulty[Math.floor(Math.random() * 3)];
      // adjust for testing
      lesson.userId = i + 1;
      lesson.category = categories[Math.floor(Math.random() * categories.length)];
      lesson.price = Math.round(Math.random() * 40) + 10;
      lesson.avgRating = Math.random() * 2 + 3;
      lesson.numOfReviews = Math.floor(Math.random() * 10) + 10;
      lessons.variables.push(lesson);
    }
    // for each user - create x lessons pull certain fields like location from user
    // give random titles
  }
  Models.Lesson.bulkCreate(lessons.variables)
    .then((data) => {
      console.log('FUCK YEAH:', data);
    })
    .catch((err) => {
      console.log('Error in fake/data/lessons', err);
    });
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const addFakeReviews = () => {
  let reviews = [];
  for (var i = 0; i < 400; i++) {
    let review = {};
    review.title = faker.company.catchPhrase();
    review.comment = faker.lorem.sentences();
    review.lessonId = getRandomInt(239) + 481;
    review.rating = Math.floor(Math.random() * 3) + 3;
    review.userId = getRandomInt(12) + 1;
    reviews.push(review);
    console.log('One reivew in with id: ', review.userId, review.lessonId);
  }
  Models.Review.bulkCreate(reviews)
    .then((data) => {
      console.log('Reviews are in.');
    })
    .catch((err) => {
      console.log('Error in fake/data/reviews');
    });
};

// addFakeReviews();
// addFakeLessons(users);

// console.log(addFakeLessons(users));

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

// match numOfReviews from lessons with actual reviews
const fixReviews = () => {
  return Models.Lesson.findAll()
    .then((lessons) => {
      lessons.forEach((lesson) => {
        console.log(`counting reviews for lesson: ${lesson.id}`);
        Models.Review.count({
          where: {
            lessonId: lesson.id
          }
        })
          .then((reviewCount) => {
            console.log(`updating for lesson: ${lesson.id}, reviewCount: ${reviewCount}`);
            Models.Lesson.update(
              { numOfReviews: reviewCount },
              {
                where: {
                  id: lesson.id
                }
              }
            ).catch((e) => console.error(`Can't update properly for Lesson: ${lesson.id}`));
          })
          .catch((e) => console.error("can't count reviews"));
      });
    })
    .catch((e) => console.error("can't find all lessons"));
};

fixReviews();

// console.log(lessons.every((lesson) => lesson instanceof Models.Lesson));

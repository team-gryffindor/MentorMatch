const Models = require('./db/index.js');
const faker = require('faker');

const USERS = {
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

const STATES = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
];

const addUsers = () => {
  let users = [];
  for (var i = 0; i < 500; i++) {
    /* User Card format
{
  "name": faker.Name.findName(),
  "username": faker.Internet.userName(),
  "email": faker.Internet.email(),
  "address": {
      "street": faker.Address.streetName(true),
      "suite": faker.Address.secondaryAddress(),
      "city": faker.Address.city(),
      "zipcode": faker.Address.zipCode(),
      "geo": {
          "lat": faker.Address.latitude(),
          "lng": faker.Address.longitude()
      }
  },
  "phone": faker.PhoneNumber.phoneNumber(),
  "website": faker.Internet.domainName(),
  "company": {
      "name": faker.Company.companyName(),
      "catchPhrase": faker.Company.catchPhrase(),
      "bs": faker.Company.bs()
  }
};
*/
    userCard = faker.helpers.userCard();
    user = {
      name: userCard.name,
      description: faker.lorem.paragraph(),
      locationOfResidence: userCard.address.street,
      cityOfResidence: userCard.address.city,
      stateOfResidence: STATES[Math.floor(Math.random() * STATES.length)],
      lat: userCard.address.geo.lat,
      lng: userCard.address.geo.lng,
      image: faker.image.avatar(),
      // fake user doesn't need correct uid.
      // only used to check if in firebase
      uid: userCard.username
    };
    users.push(user);
    // console.log(`User with image, ${user.image}`);
    // console.log(`User, ${JSON.stringify(user)}, got created`);
  }
  Models.User.bulkCreate(users)
    .then((data) => {
      console.log('Added users: ', data);
    })
    .catch((err) => {
      console.log('Error in fake/data/users', err);
    });
};

var CATEGORIES = ['Music', 'Sports', 'Cooking', 'Academic', 'Gaming', 'Arts', 'Miscellaneous'];
var DIFFICULTY = ['Beginner', 'Intermediate', 'Expert'];

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
      lesson.DIFFICULTY = DIFFICULTY[Math.floor(Math.random() * 3)];
      // adjust for testing
      lesson.userId = i + 1;
      lesson.category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
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

function didUserLeaveReview(userId, lessonId) {
  return Models.Review.count({
    where: {
      lessonId: lessonId,
      userId: userId
    }
  })
    .then((count) => {
      return count != 0 ? true : false;
    })
    .catch((e) => console.error("Couldn't search Review table properly"));
}

const addReview = (userId, lessonId) => {
  return Models.Review.create({
    title: faker.company.catchPhrase(),
    comment: faker.lorem.sentences(),
    lessonId: lessonId,
    rating: Math.floor(Math.random() * 3) + 3,
    userId: userId
  });
};

const addReviews = async (users) => {
  const reviews = await Promise.all(
    users.map((user) => {
      let lessonId = getRandomInt(239) + 481;
      addReview(user.id), lessonId;
      // didUserLeaveReview(user.id, lessonId).then((leftReview) => {
      //   if (!leftReview) {
      //     addReview(user.id, lessonId);
      //   } else {
      //     console.log('USER LEFT A REVIEW BEFORE');
      //   }
      // });
    })
  ).then((results) => console.log(`SOMETHING`));
};

const addFakeReviewsByUser = () => {
  // for every user
  // pick 10 random lessons to leave reviews
  // make sure to check if user left a review before
  return Models.User.findAll()
    .then((dbUsers) => {
      users = dbUsers.reduce((res, curr) => {
        return res.concat([curr, curr, curr]);
      }, []);
      var promises = users.map((user) => addReview(user.id, getRandomInt(239) + 481));
      Promise.all(promises).then(function(results) {
        console.log(results);
      });
      // console.log(`${users.length}`);
      // addReviews(users);
      // console.log(`${reviews}`);
      // Models.Review.bulkCreate(reviews)
      //   .then((data) => {
      //     console.log('Reviews are in.');
      //   })
      //   .catch((err) => {
      //     console.log('Error in fake/data/reviews');
      //   });
    })
    .catch((e) => console.error("Couldn't retrieve all users to add reviews"));
};

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

// addUsers();
// addFakeLessons(users);
// addFakeReviews();
// addFakeReviewsByUser();
fixReviews();

// console.log(lessons.every((lesson) => lesson instanceof Models.Lesson));

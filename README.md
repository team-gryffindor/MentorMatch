# Mentor Match
Mentor Match is a web application that allows users to connect with other users offering mentorship/lessons in regards to a specific topic.

![Main](./readmeImgs/landingScreenshot.png)


## Team
  - Product Owner: Alexander Charles
  - Scrum Master: Julie Jung
  - Developers: Alan Chang, Arjun Logeswaran

## Features
  - Guest landing page with top rated lessons and full search functionality
  - Access booking feature and location-based recommendations by signup/login through Firebase
  - 

## Built With
- **[React](https://reactjs.org/)** - Used to render the client
- **[React Router](https://www.npmjs.com/package/react-router)** - Used for front end routes 
- **[Apollo](https://www.apollographql.com/)** - GraphQl client for iuse with React
- **[GraphQL](https://graphql.org/)** - API queries
- **[Sequelize](http://docs.sequelizejs.com/)** - ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Primary Database
- **[Node.JS](https://nodejs.org/en/)** - Server
- **[Express](https://expressjs.com/)** - Server
- **[Axios](https://github.com/axios/axios)** - HTTP request with Redis search
- **[Redis Search](https://github.com/RedisLabsModules/RediSearch)** - Search functionality
- **[Geo suggest](https://github.com/ubilabs/react-geosuggest)** - Location identificaiton for search functionality
- **[Firebase](https://firebase.google.com/)** - Authentication middleware
- **[Stripe](https://stripe.com/)** - Payment functionality (Only sending dummy payments)


## Screenshots

![RecGuest](./readmeImgs/rec-guest.gif)
![RecUser](./readmeImgs/rec-user.gif)

Once the user signs in, the recommendations changes according to the user's city of residence.

![Search1](./readmeImgs/search-cookingsteak.gif)
![Search2](./readmeImgs/search-cookingsteakforbeginners.gif)

MentorMatch can conduct O(1) search with the power of Redisearch and its inverted indexing methods.

![UserProfile](./readmeImgs/userProfile.gif)
![LessonDetails](./readmeImgs/lessonDetails.gif)

## Installing Dependencies

``` 
npm install
```







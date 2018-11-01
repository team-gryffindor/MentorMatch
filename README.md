# Mentor Match
Mentor Match is a web application that allows users to connect with other users offering mentorship/lessons in regards to a specific topic.

![Main](./readmeImgs/landingScreenshot.png)

## Table of Contents
1. [Team](#team)
1. [Features](#features)
1. [Built With](#built-with)
1. [Screenshots](#screenshots)

## Team
  - Product Owner: Alexander Charles
  - Scrum Master: Julie Jung
  - Developers: Alan Yang, Arjun Logeswaran

## Features
  - Guest landing page with top rated lessons and full search functionality.
  - Google and Facebook sign up and log in.
  - View scheduled, taken, offerred, and favorite lessons in user profile.
  - Monthly calendar and list view in user profile to display upcoming lessons
  - Searching by keywords and location and will display best matches first in the list of results
  - Home page recommends top rated lessons near user location
  - Lesson content page displaying detailed information including interactive map

## Built With
- [React](https://reactjs.org/)
- [React Router](https://www.npmjs.com/package/react-router)
- [Apollo](https://www.apollographql.com/)
- [GraphQL](https://graphql.org/)
- [Sequelize](http://docs.sequelizejs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Redis Search](https://github.com/RedisLabsModules/RediSearch)
- [Geo suggest](https://github.com/ubilabs/react-geosuggest)
- [Firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)


## Screenshots

![RecGuest](./readmeImgs/rec-guest.gif)
![RecUser](./readmeImgs/rec-user.gif)

Once the user signs in, the recommendations changes according to the user's city of residence.

![Search1](./readmeImgs/search-cookingsteak.gif)
![Search2](./readmeImgs/search-cookingsteakforbeginners.gif)

MentorMatch can conduct O(1) search with the power of Redisearch and its inverted indexing methods.

![UserProfile](./readmeImgs/userProfile.gif)
![LessonDetails](./readmeImgs/lessonDetails.gif)

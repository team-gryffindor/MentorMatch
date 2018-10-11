import React from 'react';
import SearchBarHome from './SearchBarHome.jsx';
// import Unsplash from 'unsplash-js';

// const unsplash = new Unsplash({
//   applicationId: '{APP_ACCESS_KEY}',
//   secret: '{APP_SECRET}',
//   callbackUrl: '{CALLBACK_URL}'
// });

// unsplash.photos
//   .getRandomPhoto({ username: 'naoufal' })
//   .then(toJson)
//   .then((json) => {
//     // Your code
//   });

const SearchHome = (props) => (
  <div className="home-search flex-column">
    <div className="d-flex w-100 justify-content-center vertical-center container">
      <SearchBarHome />
    </div>
  </div>
);

export default SearchHome;

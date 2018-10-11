import React from 'react';
import { Link } from 'react-router-dom';
import Geosuggest from 'react-geosuggest';

const NavSearchBar = (props) => (
  <div className="w-100 mx-auto order-0">
    <form className="form-inline my-2 my-lg-0">
      <input
        className="geosuggest geosuggest__input"
        type="keywords"
        placeholder="Lesson"
        aria-label="Lesson"
      />
      {/* <input
        className="form-control mr-sm-2"
        type="location"
        placeholder="Location"
        aria-label="Location"
      /> */}
      <Geosuggest placeholder={'Location'} />
      {/* <button className="btn btn-primary my-2 my-sm-0" type="submit">
        <i className="fas fa-search" />
      </button> */}

      <button className="btn btn-primary my-2 my-sm-0" type="submit">
        <Link to={{ pathname: '/feed' }} style={{ textDecoration: 'none', color: 'white' }}>
          <i className="fas fa-search" />
        </Link>
      </button>
    </form>
  </div>
);

export default NavSearchBar;

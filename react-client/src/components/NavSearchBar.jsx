import React from 'react';

const NavSearchBar = (props) => (
  <div className="w-100 mx-auto order-0">
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="keywords"
        placeholder="Lesson"
        aria-label="Lesson"
      />
      <input
        className="form-control mr-sm-2"
        type="location"
        placeholder="Location"
        aria-label="Location"
      />
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
  </div>
);

export default NavSearchBar;

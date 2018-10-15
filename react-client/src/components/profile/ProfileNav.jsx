import React from 'react';

const ProfileNav = (props) => {
  return (
    <div
      className="nav flex-column nav-pills col-md-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        className="nav-link active"
        id="v-pills-offered-tab"
        data-toggle="pill"
        href="#v-pills-offered"
        role="tab"
        aria-controls="v-pills-offered"
        aria-selected="false"
      >
        Offered
      </a>
      <a
        className="nav-link"
        id="v-pills-upcoming-tab"
        data-toggle="pill"
        href="#v-pills-upcoming"
        role="tab"
        aria-controls="v-pills-upcoming"
        aria-selected="false"
      >
        Upcoming
      </a>
      <a
        className="nav-link"
        id="v-pills-taken-tab"
        data-toggle="pill"
        href="#v-pills-taken"
        role="tab"
        aria-controls="v-pills-taken"
        aria-selected="false"
      >
        Taken
      </a>
      <a
        className="nav-link"
        id="v-pills-favorites-tab"
        data-toggle="pill"
        href="#v-pills-favorites"
        role="tab"
        aria-controls="v-pills-favorites"
        aria-selected="false"
      >
        Favorites
      </a>
    </div>
  );
};

export default ProfileNav;

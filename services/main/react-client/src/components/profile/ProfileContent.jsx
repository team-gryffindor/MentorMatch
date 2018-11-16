import React from 'react';

import OfferedLessons from './content/OfferedLessons.jsx';
import UpcomingLessons from './content/UpcomingLessons.jsx';
import TakenLessons from './content/TakenLessons.jsx';
import FavoriteLessons from './content/FavoriteLessons.jsx';

const ProfileContent = ({ user }) => {
  return (
    <React.Fragment>
      <div
        className="tab-pane fade show active"
        id="v-pills-upcoming"
        role="tabpanel"
        aria-labelledby="v-pills-upcoming-tab"
      >
        <UpcomingLessons user={user} />
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-taken"
        role="tabpanel"
        aria-labelledby="v-pills-taken-tab"
      >
        <TakenLessons user={user} />
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-offered"
        role="tabpanel"
        aria-labelledby="v-pills-offered-tab"
      >
        <OfferedLessons user={user} />
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-favorites"
        role="tabpanel"
        aria-labelledby="v-pills-favorites-tab"
      >
        <FavoriteLessons user={user} />
      </div>
    </React.Fragment>
  );
};
export default ProfileContent;

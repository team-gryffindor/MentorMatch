import React from 'react';

const MentorInfo = ({ provider }) => (
  // TODO: include image
  <div>
    <h4>About your mentor, {provider.name}</h4>
    <p>{provider.description}</p>
  </div>
);

export default MentorInfo;

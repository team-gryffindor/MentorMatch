import React from 'react';
import GoogleMapReact from 'google-map-react';

const SimpleMap = ({ location }) => (
  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '100%', marginBottom: '30px' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
      defaultCenter={location.center}
      defaultZoom={11}
    />
  </div>
);

export default SimpleMap;

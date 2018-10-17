import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker.jsx';

const Map = ({ location }) => {
  console.log(location);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%', marginBottom: '30px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
        defaultCenter={location.center}
        defaultZoom={15}
      >
        <MapMarker lat={location.center.lat} lng={location.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

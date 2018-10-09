import React from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends React.Component {
  constructor(props) {
    super(props);
    this.defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  }

  render() {
    console.log('API KEY FOR MAP', process.env.MAP_API_KEY);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%', marginBottom: '30px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAHLV0F2kKJU1fnJddHbh2wg10oGcocAt8' }}
          defaultCenter={this.defaultProps.center}
          defaultZoom={this.defaultProps.zoom}
        />
      </div>
    );
  }
}

export default SimpleMap;

import React from 'react';
const ServiceDisplay = (props) => (
  <div>
    <ul>
      {props.services.map((service, i) => <Display service={service} key={i}/>)}
    </ul>
  </div>
);

const Display = ({service}) => (
  <li>
    <img src={service.profilePicture}/>
    <h1>{service.title}</h1>
  </li>
);

export default ServiceDisplay;
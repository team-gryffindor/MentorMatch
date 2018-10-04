import React from 'react';
import Header from './Header.jsx';

const ServiceVerticalDisplay = (props) => (
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

export default ServiceVerticalDisplay;
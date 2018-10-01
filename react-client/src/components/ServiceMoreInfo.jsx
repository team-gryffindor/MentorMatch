import React from 'react';
import Navigation from './NavigationBar'

const SderviceMoreInfo = (props) => (
  <div>
    <h1>Mentor Match</h1>
    <Navigation/>

    <h2>{props.service.title}</h2>
    <h3>{props.service.userName}</h3>
    <p>{props.service.description}</p>


  </div>
)

export default SderviceMoreInfo;
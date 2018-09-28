import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


const Feed = (props) => (
  <div>
    <h1>Feed</h1>
    {props.services.map((service, i) => <Service service={service} key={i}/>)}
  </div>
)

const Service = ({service}) => (
  //Service details to be rendered
  <div>
    <img src={service.pic}/>
    <h1>{service.title}</h1>
    <p>{service.description}</p>
    <span>{service.userName}</span>
  </div>
)


export default Feed;
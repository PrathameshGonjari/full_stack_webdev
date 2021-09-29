import React from 'react';
import './index.css'
export default function AppHeader(props){
  return(
    <div className="AppHeader">
      <h1 className="Header">Welcome to React</h1>
      <h4> UserName : {props.username}</h4>
      <h4>Location : {props.location}</h4>
    </div>
  ) 
}
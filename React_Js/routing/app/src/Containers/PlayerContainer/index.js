import React from "react"
import './index.css'
import { Link } from 'react-router-dom'
export default function PlayerContainer(props){
  const renderContainer = () =>{
    console.log(props)
  } 
  return(  
    <div className='PlayerContainer'>
      <h1>Player Details</h1>
      <h5><Link to='/players'> Back </Link></h5>
      <ul>
        {renderContainer()}
      </ul>  
      <h3>{props.match.params.name}</h3>
      <img src={require('../../assets/images/'+props.match.params.image).default} alt="football" width="400px"></img>
    </div>
  )

}
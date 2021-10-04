import React,{Component} from "react";
import { Link } from 'react-router-dom'
import './index.css';
export default class Navigation extends Component{

  render(){
    return(
      <div className="Navigation">
        <h1>Welcome to Foot Ball</h1>
        <ul >
            <li><Link className='url' to='/'>Home</Link></li>
            <li><Link className='url' to='/about'>About</Link></li>
            <li><Link className='url' to='/contact'>Contact</Link></li>
            <li><Link className='url' to='/players'>Players</Link></li>
      </ul>
      </div>
      

    )


  }

}
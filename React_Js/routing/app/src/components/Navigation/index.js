import React,{Component} from "react";
import {Link} from 'react-router-dom'
import './index.css';
export default class Navigation extends Component{

  render(){
    return(
      <div>
        <h1>Welcome to React Js</h1>
        <ul>
        <li><Link className='url' to='/'>Home</Link></li>
        <li><Link className='url' to='/about'>About</Link></li>
        <li><Link className='url' to='/contact'>Contact</Link></li>
        <li><Link className='url' to='/photos'>Players</Link></li>
      </ul>
      </div>
      

    )


  }

}
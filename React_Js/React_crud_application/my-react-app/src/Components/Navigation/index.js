import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

export default function Navigation(){
  return(
    <div className="navigation">
      <ul>
        <li><Link className="link" to="/">All Users</Link></li>
        <li><Link className="link" to="/createuser">Create User</Link></li>
      </ul>
    </div>
  )
}
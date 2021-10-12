import React,{ Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default class UserList extends Component{

  state = {
    users : []
  }  

  componentDidMount(){
      
    axios.get('http://localhost:3004/users')
    .then(res=> {

      console.log(res.data);
      this.setState({
        users : res.data
      })
      console.log(this.state.users)

    })

  }

  deleteUser = (e) =>{
    e.preventDefault();
    const id = e.target.id;
    axios.delete(`http://localhost:3004/users/`+id)
    .then(res =>{
      console.log(res.data);
    })
  }

  render(){
    
    return(

      <div>
        <h1>List of Users</h1>
      {
        this.state.users.map((user) => (
          <div>
            <li id={user.id}>{user.name}</li>
            <Link to={`/edituser/`+user.id+`/`+
          user.name}>EDIT</Link>
          <button id={user.id} onClick={this.deleteUser}>DELETE</button>
          </div>
          
        ))
      }
      </div>

    )


  }

}
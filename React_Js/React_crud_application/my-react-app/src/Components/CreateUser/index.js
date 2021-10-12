import React,{ Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component{
  state = {
      user:''
  }
  handleInputChange = (e) =>{
    const user = e.target.value
    this.setState({
      user:user
    })
  }
  saveUser = (e) => {
    e.preventDefault();
    const name = this.state.user;
    axios.post('http://localhost:3004/users/',{name})
    .then(res=>{
      console.log(res.data);
    })
  }
  render(){

    return(
      <div>
        <input name='user' onChange={this.handleInputChange} type='text' placeholder='Enter UserName'/>
        <button onClick={this.saveUser}>Submit</button> 
        
      </div>
    )

  }





}
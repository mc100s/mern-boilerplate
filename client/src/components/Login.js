import React, { Component } from 'react';
import api from '../api';

class Login extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }

  login() {
    api.login("m", "m").then(data => {
      console.log("Login successful")
      console.log(data)
    })
  }
  render() {   
    this.login()             
    return (
      <div className="Login">
        <h2>Login</h2>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import api from '../../api';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          Username: <input type="text" value={this.state.username} onChange={(e) => this.handleInputChange("username", e)} /> <br />
          Name: <input type="text" value={this.state.name} onChange={(e) => this.handleInputChange("name", e)} /> <br />
          Password: <input type="password" value={this.state.password} onChange={(e) => this.handleInputChange("password", e)} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default Signup;

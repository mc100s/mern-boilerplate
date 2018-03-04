import React, { Component } from 'react';
import api from './api';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }
  componentDidMount() {
    api.service.get("/countries")
      .then(response => {
        console.log(response)
        this.setState({
          countries: response.data
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>List of countries</h2>
        {this.state.countries.map((c, i) => <li key={i}>{c.name}</li>)}
      </div>
    );
  }
}

export default App;

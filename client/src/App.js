import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
          <Link to="/">Home</Link> <Link to="/test">Test</Link> <Link to="/countries">Countries</Link> <Link to="/countries/1">Country 1</Link>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.    
        </p>
        <Route path="/" exact render={() => <h2>Home</h2>} />
        <Route path="/test" render={() => <h2>Test</h2>} />
        <Route path="/countries" render={() => (
          <div>
            <h2>List of countries</h2>
            {this.state.countries.map((c, i) => <li key={i}>{c.name}</li>)}
          </div>
        )} />
      </div>
    );
  }
}

export default App;

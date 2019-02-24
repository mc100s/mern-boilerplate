import React, { Component } from 'react';
import api from '../../api';


class AddCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      capitals: "",
      area: "",
      description: "",
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.description)
    let data = {
      name: this.state.name,
      capitals: this.state.capitals,
      area: this.state.area,
      description: this.state.description,
    }
    api.postCountries(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          capitals: "",
          area: "",
          description: "",
          message: `Your country '${this.state.name}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <div className="AddCountry">
        <h2>Add country</h2>
        <form>
          Name: <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
          Capitals: <input type="text" value={this.state.capitals} onChange={(e) => { this.handleInputChange("capitals", e) }} /> <br />
          Area: <input type="number" value={this.state.area} onChange={(e) => { this.handleInputChange("area", e) }} /> <br />
          Description: <textarea value={this.state.description} cols="30" rows="10" onChange={(e) => { this.handleInputChange("description", e) }} ></textarea> <br />
          <button onClick={(e) => this.handleClick(e)}>Create country</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default AddCountry;

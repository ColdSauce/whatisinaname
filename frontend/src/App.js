import React, { Component } from 'react';
import logo from './logo.svg';
import Dropzone from 'react-dropzone'
import './App.css';
import { getName } from './Api.js'

const PASTEL = [
  "#c0392b",
  "#2980b9",
  "#16a085",
  "#34495e",
  "#d35400"
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: null
    }
  }

  onDrop = acceptedFiles => {
    getName(acceptedFiles[0], (name) => name.then((realName) => this.setState({name: realName})))
  };

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentDidMount() {
    document.body.style.backgroundColor = PASTEL[this.getRandomInt(PASTEL.length)];
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1> My Name is My Name </h1>
          <p> Let the AI Gods decide what your name should be based on how you look! </p>
        </div>
        <Dropzone
  					className="dropZone"
  					activeClassName="dropZoneActive"
  					onDrop={this.onDrop}
  				>
  					<div className="dropText">
  						Upload your selfie here!
  					</div>
  				</Dropzone>

        <div>
          {this.state.name && <h2> Not gonna lie... You look like a {this.state.name} </h2>}
        </div>

      </div>
    );
  }
}

export default App;

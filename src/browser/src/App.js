import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {getTranslation} from './TranslationService';

// Main component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.serverAddress = props.server;
    this.state = {input: '', translated: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputString = event.target.value;

    // State updates
    this.setState({input: inputString});
    getTranslation(this.serverAddress, inputString).then(translation => this.setState({translated: translation}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <form onSubmit={event => event.preventDefault()}>
            <input type="text" onChange={this.handleChange} />
          </form>
          {this.state.translated}
        </div>
      </div>
    );
  }
}

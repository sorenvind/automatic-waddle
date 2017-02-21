import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {format} from 'url';

const fetchParams = {method: 'GET', mode: 'cors'};

class App extends Component {
  constructor(props) {
    super(props);
    this.serverAddress = props.server;
    this.state = {input: '', translated: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  translate(string) {
    const url = format({
      host: this.serverAddress,
      pathname: '/aaw',
      query: {q: string},
    });

    fetch(url, fetchParams)
      .then(response => {
        if (!response.ok) {
          throw Error(`Failed translating: ${JSON.stringify(response)}`);
        }
        return response.json();
      })
      .then(json => this.setState({translated: json.translated}));
  }

  handleChange(event) {
    const s = event.target.value;
    this.translate(s);
    this.setState({input: s});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="App-header">
            <form onSubmit={event => event.preventDefault()}>
              <label>
                EMOJIS:
                <input type="text" onChange={this.handleChange}/>
              </label>
            </form>
            {this.state.translated}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

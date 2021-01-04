import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { SignOut } from 'aws-amplify-react';
Amplify.configure(awsmobile);

class App extends Component {
  componentDidMount(){
    document.title = "Amplify React Demo"
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello {this.props.authData.username}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <SignOut />
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);

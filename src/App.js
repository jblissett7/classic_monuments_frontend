/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './containers/NavBarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
      </div>
    );
  }
}

export default App;

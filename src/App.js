import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './containers/NavBarContainer';
import TopAppBarNav from './components/TopAppBarNav';
import OrderTable from './components/OrderTable';
import Main from './components/Main';

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

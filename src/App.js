import React, { Component } from 'react';
import './App.css';
import TopAppBarNav from './components/TopAppBarNav';
import OrderTable from './components/OrderTable';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopAppBarNav />
      </div>
    );
  }
}

export default App;

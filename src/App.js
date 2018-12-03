import React, { Component } from 'react';
import './App.css';
import 'material-components-web/dist/material-components-web.min.css';
import TopAppBarNav from './components/TopAppBarNav';
import OrderTable from './components/OrderTable';
import Main from './components/Main';

class App extends Component {
  render() {
    
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        <TopAppBarNav />
        <Main />
      </div>
    );
  }
}

export default App;

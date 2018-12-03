import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import OrderTable from './OrderTable';
import MonumentTable from './MonumentTable';
import OrderFormContainer from '../containers/OrderFormContainer';
import MonumentFormContainer from '../containers/MonumentFormContainer';

class Main extends Component {
  render() {
    return (
      <main>
        <Route exact path="/orders" component={OrderTable} />
        <Route exact path="/monuments" component={MonumentTable} />
        <Route path="/monuments/new" component={MonumentFormContainer} />
        <Route path="/orders/new" component={OrderFormContainer} />
      </main>
    );
  }
}

export default Main;

import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import OrderTable from './OrderTable';
import MonumentTable from './MonumentTable';
import MonumentCreationForm from './MonumentCreationForm';
import OrderCreationForm from './OrderCreationForm';

class Main extends Component {

  render() {
    return(
      <main>
        <Route exact path='/orders' component={OrderTable}/>
        <Route exact path='/monuments' component={ MonumentTable }/>
        <Route path='/monuments/new' component={ MonumentCreationForm } />
        <Route path='/orders/new' component={ OrderCreationForm } />
      </main>
    );
  }
}

export default Main;
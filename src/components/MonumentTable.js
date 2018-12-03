import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Axios from 'axios';

const columns = [{
  Header: 'Monument Type',
  accessor: "monument_type",
  Filter: ({ filter, onChange }) =>
    <select
      onChange={event => onChange(event.target.value)}
      value={filter ? filter.value : 'all'}
    >
      <option value='all'>All Monument Types</option>
      <option value='Bevel'>Bevel</option>
      <option value='Slant'>Slant</option>
      <option value='Flat'>Flat</option>
    </select>
}, {
  Header: 'Color',
  accessor: 'color',
  Filter: ({ filter, onChange }) =>
    <select
      onChange={event => onChange(event.target.value)}
      value={filter ? filter.value : 'all'}
    >
      <option value='all'>All Colors</option>
      <option value='Georgia Gray'>Georgia Gray</option>
      <option value='Morning Rose'>Morning Rose</option>
      <option value='Salisbury Pink'>Salisbury Pink</option>
      <option value='Autumn Rose'>Autumn Rose</option>
      <option value='Flash Black'>Flash Black</option>
      <option value='Jet Black'>Jet Black</option>
      <option value='American Black'>American Black</option>
      <option value='Blue Silk'>Blue Silk</option>
      <option value='Missouri Red'>Missouri Red</option>
      <option value='Sienna Red'>Sienna Red</option>
      <option value='Dakota Mahogany'>Dakota Mahogany</option>
      <option value='Canadian Mahogany'>Canadian Mahogany</option>
      <option value='Barre'>Barre</option>
      <option value='India Mist'>India Mist</option>
      <option value='India Red'>India Red</option>
      <option value='Night Star'>Night Star</option>
      <option value='Carelian'>Carelian</option>
    </select>
}, {
  Header: 'Length',
  accessor: 'length'
}, {
  Header: "Width",
  accessor: 'width'
}, {
  Header: 'Height',
  accessor: 'Height'
}, {
  Header: "Single Or Double",
  accessor: 'single_or_double',
  Filter: ({ filter, onChange }) =>
    <select
      onChange={event => onChange(event.target.value)}
      value={filter ? filter.value : 'both'}
    >
      <option value='Both'>Both</option>
      <option value='Single'>Single</option>
      <option value='Double'>Double</option>
    </select>
}, {
  Header: 'Price',
  accessor: 'price_cents',
  Cell: e =><a href="root"> {`$ ${e.value}` }</a>
}];

class MonumentTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      monuments: []
    }
  }

  componentDidMount() {
    console.log('Inside componentDidMount');
    Axios.get('monuments.json')
    .then(res => {
      const monuments = res.data;
      this.setState({ monuments });
    });
  }
  
  render() {
    console.log('Hello World')
    return (
      <ReactTable
        data={ this.state.monuments }
        columns={ columns }
        filterable
      />
    );
  }
}

export default MonumentTable;
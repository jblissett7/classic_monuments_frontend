import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Axios from 'axios';

const columns = [{
  Header: 'Last Name',
  accessor: 'last_name' 
}, {
  Header: 'First Name',
  accessor: 'first_name'
}, {
  Header: 'Status',
  accessor: 'status'
}, {
  Header: 'Cemetery',
  accessor: 'cemetery'
}, {
  Header: 'Ordered By',
  accessor: 'ordered_by'
}, {
  Header: 'Address',
  accessor: 'address'
}, {
  Header: 'Phone Number',
  accessor: 'phone_number'
}, {
  Header: 'Email',
  accessor: 'email'
}, {
  Header: 'Total Fees',
  accessor: 'total_fees_cents'
}, {
  Header: 'Balance Due',
  accessor: 'balance_due_cents'
}
];

class OrderTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    Axios.get('orders.json')
    .then(res => {
      const orders = res.data;
      this.setState({ orders });
    });
  }

  render() {
    return (
      <ReactTable
        data={ this.state.orders }
        columns={ columns } 
        filterable
        />
    );
  }
}

export default OrderTable;
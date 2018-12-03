import React, { Component } from 'react';
import Axios from 'axios'; 

class OrderCreationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      last_name: '',
      first_name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    var last_name = this.state.last_name;
    var first_name = this.state.first_name;
    Axios.post('/orders', {order: {
      last_name: last_name, first_name: first_name}}
    ).then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } >
        <input 
          name='last_name'
          type='text'
          value={this.state.last_name}
          onChange={this.handleChange}
          placeholder='Last Name' 
        />

        <input 
          name='first_name'
          type='text'
          value={this.state.first_name}
          onChange={this.handleChange}
          placeholder='FirstName'
        />

        <input
          
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default OrderCreationForm;
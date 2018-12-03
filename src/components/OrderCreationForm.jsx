import React, { Component } from 'react';
import Axios from 'axios';

class OrderCreationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      last_name: '',
      first_name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { last_name, first_name } = this.state;
    Axios.post('/orders', {
      order: { last_name, first_name },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { last_name, first_name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="last_name"
          type="text"
          value={last_name}
          onChange={this.handleChange}
          placeholder="Last Name"
        />

        <input
          name="first_name"
          type="text"
          value={first_name}
          onChange={this.handleChange}
          placeholder="FirstName"
        />

        <input />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default OrderCreationForm;

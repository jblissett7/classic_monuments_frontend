import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target);
  }

  render() {
    const { firstName, lastName } = this.props;
    return (
      <form>
        <TextField
          id="firstName"
          label="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        <TextField
          id="lastName"
          label="Last Name"
          value={lastName}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default OrderForm;

import React, { Component } from 'react';
import Axios from 'axios';

class MonumentCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monument_type: '',
      color: '',
      length: '',
      width: '',
      height: '',
      single_or_double: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getValidationState() {

  // }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const {
      monument_type,
      color,
      length,
      width,
      height,
      single_or_double,
    } = this.state;
    Axios.post('/monuments', {
      monument: {
        monument_type,
        color,
        length,
        width,
        height,
        single_or_double,
      },
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          placeholder="Monument Type"
          name="monument_type"
          onChange={this.handleChange}
        >
          <option value="Bevel">Bevel</option>
          <option value="Slant">Slant</option>
          <option value="Flat">Flat</option>
        </select>

        <select
          placeholder="Color"
          name="color"
          onChange={this.handleChange}
        >
          <option value="Georgia Gray">Georgia Gray</option>
          <option value="Morning Star">Morning Star</option>
        </select>

        <input
          name="Length"
          type="text"
          value={value}
          placeholder="Length in inches"
          onChange={this.handleChange}
        />

        <input
          name="Width"
          type="text"
          value={value}
          placeholder="Width in inches"
          onChange={this.handleChange}
        />

        <input
          name="Height"
          type="text"
          value={value}
          placeholder="Height in inches"
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MonumentCreationForm;

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class MonumentForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target);
  }

  render() {
    const { length, width, height } = this.props;
    return (
      <form>
        <TextField
          id="length"
          label="Length"
          value={length}
          onChange={this.handleChange}
        />
        <TextField
          id="width"
          label="Width"
          value={width}
          onChange={this.handleChange}
        />
        <TextField
          id="height"
          label="Height"
          value={height}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default MonumentForm;

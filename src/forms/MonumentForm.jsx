import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { types } from '../Utils/ValidMonumentInputData';

class MonumentForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    this.props.onInputChange(event.target);
  }

  render() {
    const { length, width, height, monumentType } = this.props;
    return (
      <form>
        <Select
          id="monumentType"
          value={monumentType}
          onChange={this.handleChange}
          inputProps={{
            id: 'monumentType',
            name: 'monumentType',
          }}
        >
          {types.map(type => (
            <MenuItem key={type.value} value={type.value}>
              {type.value}
            </MenuItem>
          ))}
        </Select>

        <TextField
          id="length"
          name="length"
          label="Length"
          value={length}
          onChange={this.handleChange}
        />
        <TextField
          id="width"
          name="width"
          label="Width"
          value={width}
          onChange={this.handleChange}
        />
        <TextField
          id="height"
          name="width"
          label="Height"
          value={height}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default MonumentForm;

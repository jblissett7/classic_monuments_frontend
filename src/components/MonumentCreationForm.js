import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  Radio
} from 'react-bootstrap';
import { Button } from '../../node_modules/rmwc';
import Axios from 'axios';

class MonumentCreationForm extends Component {

  constructor(props){
    super(props);
    this.state = {
        monument_type: '',
        color: '',
        length: '',
        width: '',
        height: '',
        single_or_double: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getValidationState() {

  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name
    this.setState({ 
      [name]: value
     });
  }

  handleSubmit() {
    var monument_type = this.state.monument_type;
    var color = this.state.color;
    var length = this.state.length;
    var width = this.state.width;
    var height = this.state.height;
    var single_or_double = this.state.single_or_double;
    Axios.post('/monuments', { monument: {
      monument_type: monument_type,
      color: color,
      length: length,
      width: width,
      height: height,
      single_or_double: single_or_double
    }}).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <select
          placeholder='Monument Type'
          name='monument_type'
          onChange={ this.handleChange }
        >
          <option value='Bevel'>Bevel</option>
          <option value='Slant'>Slant</option>
          <option value='Flat'>Flat</option>
        </select>

        <select
          placeholder='Color'
          name='color'
          onChange={ this.handleChange }
        >
          <option value='Georgia Gray'>Georgia Gray</option>
          <option value='Morning Star'>Morning Star</option>
        </select>

        <input
          name='Length'
          type='text'
          value={ this.state.value }
          placeholder='Length in inches'
          onChange={ this.handleChange }
          />

        <input
          name='Width'
          type='text'
          value={ this.state.value }
          placeholder='Width in inches'
          onChange={ this.handleChange }
        />

        <input
          name='Height'
          type='text'
          value={ this.state.value }
          placeholder='Height in inches'
          onChange={ this.handleChange }
        />
          
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default MonumentCreationForm;
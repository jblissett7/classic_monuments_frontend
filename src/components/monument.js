import React, { Component } from 'react';
import axios from 'axios';

class Monument extends Component {
  constructor(props){
    super(props)
    this.state = {
      monument: []
    }
  }

  componentDidMount() {
    axios.get('monuments.json')
    .then(response => {
      console.log(response)
      this.setState({
        monument: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div className="monuments">
        {this.state.monument.map ( monument => {
          return (
            <div className="single_monument" key={monument.id}>
              <h4> {monument.monument_type} </h4>
              <h4> {monument.single_or_double} </h4>
            </div>
          )
        }
        )}
      </div>
    );
  }
}

export default Monument;
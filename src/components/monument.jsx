import React, { Component } from 'react';
import axios from 'axios';

class Monument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monument: [],
    };
  }

  componentDidMount() {
    axios.get('monuments.json')
      .then((response) => {
        console.log(response);
        this.setState({
          monument: response.data,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { monument } = this.state;
    return (
      <div className="monuments">
        {monument.map(singleMonument => (
          <div className="single_monument" key={singleMonument.id}>
            <h4>
              {singleMonument.monument_type}
            </h4>
            <h4>
              {singleMonument.single_or_double}
            </h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Monument;

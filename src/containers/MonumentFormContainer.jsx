import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MonumentForm from '../forms/MonumentForm';

class MonumentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monumentType: '',
      color: '',
      length: '',
      width: '',
      height: '',
      singleOrDouble: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(target) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={8}>
          <Card>
            <CardHeader title="Create Monument" />
            <CardContent>
              <MonumentForm onInputChange={this.handleChange} onSubmit={this.handleSubmit} />
            </CardContent>
            <CardActions>
              <Button onClick={this.handleSubmit}>
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default MonumentFormContainer;

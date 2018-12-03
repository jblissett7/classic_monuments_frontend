import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class RenderButtonLink extends Component {
  constructor(props) {
    super(props);

    this.renderLink = this.renderLink.bind(this);
  }

  renderLink(itemProps) {
    const { to } = this.props;
    return (
      <Link to={to} {...itemProps} />
    );
  }

  render() {
    const { primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
}

export default RenderButtonLink;

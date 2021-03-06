import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RenderButtonLink from './RenderButtonLink';
import NavBarStyles from '../styles/NavBarStyles';

class AppDrawer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onDrawerClose(true);
  }

  render() {
    const { classes, open } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleClick}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <RenderButtonLink to="/orders" primary="Orders" />
          <RenderButtonLink to="/monuments" primary="Monuments" />
          <RenderButtonLink to="/orders/new" primary="Create Orders" />
          <RenderButtonLink to="/monuments/new" primary="Create Monument" />
        </List>
      </Drawer>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.shape.isRequired,
  open: PropTypes.shape.isRequired,
  onDrawerClose: PropTypes.isRequired,
};

export default withStyles(NavBarStyles, { withTheme: true })(AppDrawer);

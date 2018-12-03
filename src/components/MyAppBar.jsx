import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import NavBarStyles from '../styles/NavBarStyles';

class MyAppBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onDrawerOpen();
  }

  render() {
    const { classes, open } = this.props;
    return (
      <AppBar
        position="fixed"
        color="default"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open Drawer"
            onClick={this.handleClick}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Classic Monuments
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

MyAppBar.propTypes = {
  classes: PropTypes.shape.isRequired,
  open: PropTypes.shape.isRequired,
  onDrawerOpen: PropTypes.isRequired,
};

export default withStyles(NavBarStyles, { withTheme: true })(MyAppBar);

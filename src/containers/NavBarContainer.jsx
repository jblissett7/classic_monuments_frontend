import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppDrawer from '../components/AppDrawer';
import MyAppBar from '../components/MyAppBar';
import Main from '../components/Main';
import NavBarStyles from '../styles/NavBarStyles';

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <MyAppBar open={open} onDrawerOpen={this.handleDrawerOpen} />
        <AppDrawer open={open} onDrawerClose={this.handleDrawerClose} />
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Main />
        </main>
      </div>
    );
  }
}

export default withStyles(NavBarStyles, { withTheme: true })(NavBarContainer);

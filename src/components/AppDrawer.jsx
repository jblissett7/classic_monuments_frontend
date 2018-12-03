import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RenderButtonLink from './RenderButtonLink';

const drawerWidth = 240;
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

class AppDrawer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles, {withTheme: true })(AppDrawer);

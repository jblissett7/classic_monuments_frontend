import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Router, Link } from 'react-router-dom';


class TopAppBarNav extends Component {
  render() {
    return (
      <AppBar position="static" color="default"> 
        <Toolbar>
          <h3>
            Classic Monuments
          </h3>
        </Toolbar>
      </AppBar>
    );
    /* return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Classic Monuments</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to="/orders">Orders</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/monuments">Monuments</Link>
          </NavItem>
          <NavItem eventKey={3} href="#">
            <Link to="/monuments/new">Create Monument</Link>
          </NavItem>
          <NavItem eventKey={4} href="#">
            <Link to="/orders/new">Create Order</Link>
          </NavItem>
        </Nav>
      </Navbar>

    );
    */
  }
}

export default TopAppBarNav;
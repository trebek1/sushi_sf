import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

// const myLink = <NavLink exact activeClassName="active" to="/" />;

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Button component={NavLink} to="/" exact activeStyle={{ color: 'green' }}>
        Home
      </Button>
      <Button
        component={NavLink}
        exact
        activeStyle={{ color: 'green' }}
        to="/about"
      >
        About
      </Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;

import React from 'react';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar style={{background: '#2E3B55'}} position='static'>
      <Tabs value={false}>
        <Tab label='Weather Exercise' disabled />
        <Tab label='Today' component={NavLink} to='/today' />
        <Tab label='Upcoming' component={NavLink} to='/upcoming' />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;

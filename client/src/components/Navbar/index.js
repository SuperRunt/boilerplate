import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to='/' exact
            activeClassName='active'>
              Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'
            activeClassName='active'>
              About
          </NavLink>
        </li>
        <li>
          <NavLink to='/info'
            activeClassName='active'>
              Info
          </NavLink>
        </li>
      </ul>
    );
  }
}
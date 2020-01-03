import React from 'react';
import { NavLink } from 'react-router-dom'
import './navigationBar.scss'

const NavigationBar = () => {
  return (
    <ul>
      <li>
        <NavLink exact className="links" activeClassName="active-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName="active-link" to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName="active-link" to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName="active-link" to="/about">About</NavLink>
      </li>
    </ul>
  );
};

export default NavigationBar;

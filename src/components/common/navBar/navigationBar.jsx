import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

import './navigationBar.scss'

const NavigationBar = () => {
  return (
    <Fragment>
        <ul>
           <li>
          <NavLink className="links" activeClassName="active-link" to="/dashboard">Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="links" activeClassName="active-link" to="/logout">Logout
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavigationBar;

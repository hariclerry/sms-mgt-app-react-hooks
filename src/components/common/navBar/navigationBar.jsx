import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
// import { useAuth } from 'context/context';
import './navigationBar.scss'

const NavigationBar = () => {
  let getAuth;
  // console.log(getAuth.authTokens, '******')
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

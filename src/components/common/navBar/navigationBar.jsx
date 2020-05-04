import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { useAuth } from 'context/context';
import './navigationBar.scss'

const NavigationBar = () => {
  const getAuth = useAuth()
  console.log(getAuth.authTokens, '******')
  return (
    <Fragment>
      {!getAuth.authTokens ? (
        <ul>
        <li>
          <NavLink exact className="links" activeClassName="active-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="links" activeClassName="active-link" to="/signup">Signup
          </NavLink>
        </li>
        <li>
          <NavLink className="links" activeClassName="active-link" to="/login">Login
          </NavLink>
        </li>
        <li>
          <NavLink className="links" activeClassName="active-link" to="/about">About
          </NavLink>
        </li>
      </ul>
      ) : (
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
      )}
    </Fragment>
  );
};

export default NavigationBar;

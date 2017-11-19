import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import React from 'react';

import './menu.scss';

const Menu = () => (
  <ul className="main-menu">
    <li><NavLink exact to="/" >Home</NavLink></li>
    {/* <li><NavLink exact to="/about">About</NavLink></li> */}
    {/* <li><NavLink exact to="/articles">Articles</NavLink></li> */}
  </ul>
);

const mapStateToProps = state =>
  ({ authenticated: state.auth.authenticated });

export default withRouter(connect(mapStateToProps)(Menu));

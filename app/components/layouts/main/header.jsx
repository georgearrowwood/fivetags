import React, { Component } from 'react';
import { Grid } from 'react-bootstrap/lib';

import Menu from './menu';

import './header.scss';
import LogoImage from './images/logo-d.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenuOpened: false,
    };
    this.onClickHamburger = this.onClickHamburger.bind(this);
    this.onClickHeaderMenu = this.onClickHeaderMenu.bind(this);
  }

  onClickHamburger() {
    this.setState({
      mobileMenuOpened: !this.state.mobileMenuOpened,
    });
  }

  onClickHeaderMenu() {
    this.setState({
      mobileMenuOpened: false,
    });
  }

  render() {
    return (
      <header className="header">
        <div className="header__top-line">
          <Grid>
            <div className="header__top-line-content">
              <div className="header__email">
                Email:
                <a href="mailto:kalininj@gmail.com" target="_top">
                  kalininj@gmail.com
                </a>
              </div>
            </div>
          </Grid>
        </div>
        <div className="header__main-line">
          <Grid>
            <div
              className={`header__hamburger ${this.state.mobileMenuOpened ? 'header__hamburger--opened' : ''}`}
              onClick={this.onClickHamburger}
              onKeyPress={this.onClickHamburger}
              role="presentation"
            />
            <div className="header__logo">
              <img src={LogoImage} alt="Fivetags Logo" />
            </div>
            <div
              className={`header__menu ${this.state.mobileMenuOpened ? 'header__menu--opened' : ''}`}
              onClick={this.onClickHeaderMenu}
              onKeyPress={this.onClickHeaderMenu}
              role="presentation"
            >
              <Menu />
            </div>
          </Grid>
        </div>
      </header>
    );
  }
}

export default Header;

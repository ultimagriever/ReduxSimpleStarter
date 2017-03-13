import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
          </div>

          <ul className="navbar-nav nav">
            <li>
              <Link to="/signin">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  getLinkList() {
    return this.props.authenticated ? [
      {
        to: "/feature",
        text: "Feature"
      },
      {
        to: "/signout",
        text: "Sign out"
      }
    ] : [
      {
        to: "/signin",
        text: "Sign in"
      },
      {
        to: "/signup",
        text: "Sign up"
      }
    ];
  }

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
            {
              this.getLinkList().map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to}>
                    {text}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.auth
  };
}

export default connect(mapStateToProps)(Header);

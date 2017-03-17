import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../../actions';

class AcceptToken extends Component {
  componentWillMount() {
    let token = window.location.search.replace('?token=', '');

    this.props.acceptToken(token);
  }

  render() {
    return (
      <div className="jumbotron alert-danger">
        <h1>This area is restricted.</h1>
        <p>You need an access token to get through.</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.auth
  };
}

export default connect(mapStateToProps, actions)(AcceptToken);

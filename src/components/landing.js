import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  flash() {
    return this.props.flash ? (
      <div className="alert alert-warning">
        <i className="glyphicon glyphicon-exclamation-sign"></i> {this.props.flash}
      </div>
    ) : null;
  }

  render() {
    return (
      <div>
        <h1>Redux Auth Simple Starter</h1>
        {this.flash()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flash: state.auth.flash
  };
}

export default connect(mapStateToProps)(Landing);

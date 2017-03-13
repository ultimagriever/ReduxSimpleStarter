import React, { PropTypes } from 'react';

const Alert = ({ errorMessage }) => (
  <div className="alert alert-danger">
    <strong>Oops!</strong> {errorMessage}
  </div>
);

Alert.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default Alert;

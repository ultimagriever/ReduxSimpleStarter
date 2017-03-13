import React, { PropTypes } from 'react';

const FormButtons = ({ pristine, submitting, reset, label }) => (
  <fieldset className="form-group">
    <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>{label}</button>
    <button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Reset</button>
  </fieldset>
);

FormButtons.propTypes = {
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default FormButtons;

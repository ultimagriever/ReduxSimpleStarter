import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../form/text_input';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit(values) {
    this.props.signinUser(values);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
        <Field component={TextInput} type="text" name="email" label="E-mail" placeholder="test@example.com" />
        <Field component={TextInput} type="password" name="password" label="Password" />
        <fieldset className="form-group">
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Sign in</button>
          <button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Reset</button>
        </fieldset>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(reduxForm({ form: 'signin' })(Signin));

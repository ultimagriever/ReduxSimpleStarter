import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import TextInput from '../form/text_input';
import Alert from '../form/alert';
import FormButtons from '../form/form_buttons';

class Signup extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signupUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return <Alert errorMessage={this.props.errorMessage} />
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const formButtonProps = { pristine, submitting, reset, label: 'Sign up' };
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
        <Field component={TextInput} type="text" name="email" label="E-mail" placeholder="test@example.com" />
        <Field component={TextInput} type="password" name="password" label="Password" />
        <Field component={TextInput} type="password" name="confirmPassword" label="Confirm Password" />
        <FormButtons { ...formButtonProps } />
      </form>
    );
  }
}

const validate = values => {
  const { email, password, confirmPassword } = values;
  const errors = {};

  if (!email) {
    errors.email = 'Email field is required';
  }

  if (!password) {
    errors.password = 'Password field is required';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Password confirmation is required';
  }

  if (password !== confirmPassword) {
    errors.password = errors.confirmPassword = "Passwords must match";
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(reduxForm({ form: 'signup', validate })(Signup));

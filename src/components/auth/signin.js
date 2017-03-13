import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../form/text_input';
import FormButtons from '../form/form_buttons';
import Alert from '../form/alert';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit(values) {
    this.props.signinUser(values);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <Alert errorMessage={this.props.errorMessage} />
      )
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const formButtonProps = { pristine, submitting, reset, label: 'Sign in' };
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
        <Field component={TextInput} type="text" name="email" label="E-mail" placeholder="test@example.com" />
        <Field component={TextInput} type="password" name="password" label="Password" />
        <FormButtons { ...formButtonProps } />
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

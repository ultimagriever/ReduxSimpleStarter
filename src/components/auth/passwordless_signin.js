import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FormButtons from '../form/form_buttons';
import TextInput from '../form/text_input';

class PasswordlessSignin extends Component {
  handleSubmit(values) {
    this.props.signinPasswordless(values);
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const formButtonProps = { pristine, submitting, reset };
    return (
      <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
        <Field component={TextInput} name="email" type="email" label="E-mail" placeholder="test@example.com"/>
        <FormButtons label="Send token" {...formButtonProps} />
      </form>
    );
  }
}

export default connect(null, actions)(reduxForm({ form: 'passwordless-signin' })(PasswordlessSignin));

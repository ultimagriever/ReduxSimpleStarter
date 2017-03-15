import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
//import { OAuthSignInButton } from "redux-auth/bootstrap-theme";
import GoogleLogin from 'react-google-login';
import TextInput from '../form/text_input';
import FormButtons from '../form/form_buttons';
import Alert from '../form/alert';
import * as actions from '../../actions';

const responseGoogle = (response) => {
  console.log(response);
}

class Signin extends Component {
  handleFormSubmit(values) {
    this.props.signinUser(values);
  }

  handleGoogleClick() {
    this.props.signinUserWithGoogle();
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="col-md-12">
          <Alert errorMessage={this.props.errorMessage} />
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const formButtonProps = { pristine, submitting, reset, label: 'Sign in' };
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Please sign in using one of the following alternatives
        </div>
        <div className="panel-body row">
          {this.renderAlert()}
          <div className="col-md-6">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field component={TextInput} type="text" name="email" label="E-mail" placeholder="test@example.com" />
              <Field component={TextInput} type="password" name="password" label="Password" />
              <FormButtons { ...formButtonProps } />
            </form>
          </div>
          <div className="col-md-6">
            <div style={googleBoxStyle}>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
                buttonText="Sign in with Google Account"
                className="btn btn-danger btn-lg"
                onSuccess={this.props.signinUserWithGoogle}
                onFailure={this.props.signinUserWithGoogle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const googleBoxStyle = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(reduxForm({ form: 'signin' })(Signin));

import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SIGNOUT_USER } from './types';
//import firebase from 'firebase';

const API_URL = 'http://localhost:8080';
//
// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
// });
//
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('openid');
// provider.addScope('profile');
// provider.addScope('email');

export const signinUser = ({ email, password }) => dispatch => {
  fetch(`${API_URL}/signin`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(json => signin(json, dispatch))
    .catch(() => {
      dispatch(authError('Bad login info'));
    });
};

export const authError = error => ({
  type: AUTH_ERROR,
  payload: error
});

export const signoutUser = () => {
  localStorage.removeItem('token');

  return {
    type: SIGNOUT_USER
  };
};

export const signupUser = ({ email, password }) => dispatch => {
  fetch(`${API_URL}/signup`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(json => json.error ? Promise.reject(json.error) : signin(json, dispatch))
    .catch(error => dispatch(authError('Bad signup info')));
};

const signin = (json, dispatch) => {
  dispatch({ type: AUTH_USER });

  localStorage.setItem('token', json.token);

  browserHistory.push('/feature');
};

export const signinUserWithGoogle = response => dispatch => {
  const { accessToken } = response;
  fetch(`${API_URL}/signin/google`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ accessToken })
  })
    .then(response => response.json())
    .then(json => json.error ? Promise.reject(json.error) : signin(json, dispatch))
    .catch(error => dispatch(authError(error)));
}

import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SIGNOUT_USER } from './types';

const API_URL = 'http://localhost:3000';

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

import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

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
    .then(json => {
      // Update state, save JWT and redirect to /feature
      dispatch({ type: AUTH_USER });

      localStorage.setItem('token', json.token);

      browserHistory.push('/feature');
    })
    .catch(() => {
      dispatch(authError('Bad login info'));
    });
};

const authError = error => ({
  type: AUTH_ERROR,
  payload: error
});

import { AUTH_USER, SIGNOUT_USER, AUTH_ERROR, TOKEN_SENT } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };
    case SIGNOUT_USER:
      return { ...state, authenticated: false, error: '' };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case TOKEN_SENT:
      return { ...state, flash: action.payload };
    default:
      return state;
  }
}

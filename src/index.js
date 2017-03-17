import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import Landing from './components/landing';
import Signin from './components/auth/signin';
import Feature from './components/feature';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import AcceptToken from './components/auth/accept_token';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={Feature} />
        <Route path="acceptToken" component={AcceptToken} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

import React from 'react';
import Authenticate from '../hoc/authenticate';

const Feature = () => (
  <h1>That's it! I've come up with a new recipe.</h1>
);

export default Authenticate(Feature);

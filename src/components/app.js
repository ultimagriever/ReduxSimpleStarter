import React from 'react';
import Header from './header';

export default ({ children }) => (
  <div className="container">
    <Header />
    {children}
  </div>
);

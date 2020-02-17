import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../utils/loginAuth/loginAuth';

const Protected = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={
      () => (isAuthenticated() ? <Component /> : <Redirect to="/login" />)
    }
  />
);
export default Protected;

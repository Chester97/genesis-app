import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { authUser } from '../../utils/loginAuth/loginAuth';

const Protected = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={
      () => (authUser.isAuth ? <Component /> : <Redirect to="/login" />)
    }
  />
);
export default Protected;

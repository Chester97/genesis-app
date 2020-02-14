import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const isAuthenticated = () => localStorage.getItem('AccessToken');

const Protected = ({component: Component, ...props}) => (
  <Route {...props} render={
    () => isAuthenticated() ? <Component/> : <Redirect to="/login" /> 
  }/>
);
export default Protected;
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Content from './components/Content/Content';
import { loginRedirectPath } from './utils/loginAuth/loginAuth';
import './reset.css';

const MainWrapper = styled.section`
  box-sizing: border-box;
  width:100%;
  margin:0;
  padding:0;
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <Router>
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Redirect to={loginRedirectPath} />
          <Route exact path="/content" component={Content} />
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;

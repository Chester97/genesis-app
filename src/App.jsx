import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Content from './components/Content/Content';
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
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/content" exact component={Content} />
        { !localStorage.getItem('AccessToken') ? <Redirect to="/login" /> : <Redirect to="/content" /> }
      </MainWrapper>
    </Router>
  );
}

export default App;

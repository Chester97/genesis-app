import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import styled from 'styled-components';
import Register from './components/Register/Register';
import './reset.css'

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
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </MainWrapper>
    </Router>
  );
}

export default App;

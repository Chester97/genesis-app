import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import Protected from './components/Protected/Protected';
import Child from './components/Child/Child';
import './reset.css';
import UserDetails from './components/UserDetails/UserDetails';
import Post from './components/Post/Post';

const MainWrapper = styled.section`
  box-sizing: border-box;
  width:100%;
  height: 100%;
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
          <Route exact path="/post" component={Post} />
          <Route exact path="/login" component={Login} />
          <Protected path="/main" component={Main} />
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;

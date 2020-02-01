import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { UserProvider } from './context/UserContext';
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
    <UserProvider>
      <Router>
        <MainWrapper>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </MainWrapper>
      </Router>
    </UserProvider>
  );
}

export default App;

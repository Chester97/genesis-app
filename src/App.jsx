import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import Protected from './components/Protected/Protected';
import { SideMenuProvider } from './context/SideMenu';
import './reset.css';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <Router>
      <SideMenuProvider>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Protected path="/main" component={Main} />
          </Switch>
        </Wrapper>
      </SideMenuProvider>
    </Router>
  );
}

export default App;

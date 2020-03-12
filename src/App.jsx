import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/index';
import Login from './components/Login/index';
import Register from './components/Register/index';
import Main from './components/Main/index';
import Protected from './components/Protected/index';
import { SideMenuProvider } from './context/SideMenu';
import './reset.css';
import AppWrapper from './components/Wrapper/index';

function App() {
  return (
    <Router>
      <SideMenuProvider>
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Protected path="/main" component={Main} />
          </Switch>
        </AppWrapper>
      </SideMenuProvider>
    </Router>
  );
}

export default App;

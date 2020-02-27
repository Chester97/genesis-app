import React, { useState, useEffect } from 'react';
import {
  useHistory,
  Route,
  useRouteMatch,
  useLocation,
  Switch,
} from 'react-router-dom';
import { authUser } from '../../utils/loginAuth/loginAuth';
import UserDetails from '../UserDetails/UserDetails';
import * as S from './styles';

const Main = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const { path, url } = useRouteMatch();
  const location = useLocation();

  const handleClick = () => authUser.signout(() => history.push('/login'));

  useEffect(() => {
    setCollapsed(false);
  }, [location]);

  const toggleHamburger = () => {
    setCollapsed(!collapsed);
    return null;
  };

  return (
    <S.MainContainer>
      <S.HamburgetButton onClick={toggleHamburger}>
        <S.HamburgerItemTop isCollapsed={collapsed} />
        <S.HamburgerItemMiddle isCollapsed={collapsed} />
        <S.HamburgerItemMiddle isCollapsed={collapsed} />
        <S.HamburgerItemBottom isCollapsed={collapsed} />
      </S.HamburgetButton>
      <Switch>
        <Route exact path={`${path}/userDetails`}>
          <UserDetails />
        </Route>
        <Route exact path={path}>
          <h1>Hello from Main Page</h1>
        </Route>
      </Switch>
      <S.ToggleMenu isCollapsed={collapsed}>
        <S.ToggleMenuItem to={`${url}`}>Main</S.ToggleMenuItem>
        <S.ToggleMenuItem onClick={handleClick} to="/login">Logout</S.ToggleMenuItem>
        <S.ToggleMenuItem to={`${url}/userDetails`}>UserDetails</S.ToggleMenuItem>
      </S.ToggleMenu>
    </S.MainContainer>
  );
};

export default Main;

import React, { useState, useEffect } from 'react';
import { useHistory, Link, Route } from 'react-router-dom';
import { authUser } from '../../utils/loginAuth/loginAuth';
import UserDetails from '../UserDetails/UserDetails';
import * as S from './styles';

const Main = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  const handleClick = () => {
    authUser.signout(() => history.push('/login'));
  };

  useEffect(() => {
  }, []);

  const toggleHamburger = () => {
    setCollapsed(!collapsed);
    return null;
  };

  const toggleUserDetailsComponent = () => {
    setUserDetails(true);
    toggleHamburger();
    return null;
  }

  return (
    <>
      <S.mainSection>
        <S.hamburgetButton onClick={toggleHamburger}>
          <S.hamburgerItemTop isCollapsed={collapsed} />
          <S.hamburgerItemMiddle isCollapsed={collapsed} />
          <S.hamburgerItemMiddle isCollapsed={collapsed} />
          <S.hamburgerItemBottom isCollapsed={collapsed} />
        </S.hamburgetButton>
        { userDetails && <UserDetails /> }
      </S.mainSection>
      <S.toggleMenu isCollapsed={collapsed}>
        <button type="button" onClick={handleClick}>Logout</button>
        <button type="button" onClick={toggleUserDetailsComponent}>User Details</button>
      </S.toggleMenu>
    </>
  );
};

export default Main;

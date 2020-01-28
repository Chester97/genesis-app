import React from 'react';
import * as S from './styles';

const Navbar = () => (
  <S.NavbarWrapper>
    <p>Logo</p>
    <S.RightSideNavbar>
      <S.NavbarItem to="/login">
        Login
      </S.NavbarItem>
      <S.NavbarItem to="/register">
        Register
      </S.NavbarItem>
    </S.RightSideNavbar>
  </S.NavbarWrapper>
);

export default Navbar;

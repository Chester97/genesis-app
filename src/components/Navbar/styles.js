import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: tomato;
  color:white;
  padding: 0 20px 0 20px;
`;

export const RightSideNavbar = styled.div`
  display: flex;
`;

export const NavbarItem = styled(Link)`
  padding: 0 0 0 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

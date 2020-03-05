import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgetButton = styled.button`
  position: fixed;
  top:40px;
  left:20px;
  border: none;
  background: transparent;
  display: block;
  width: 51px;
  height: 36px;
  transition: .5s ease-in-out;
  outline:none;
  -webkit-tap-highlight-color: transparent;
  z-index: 999;

  &:focus, &:active {
    outline:none;
  }
`;
export const HamburgerItemTop = styled.span`
  position: absolute;
  height: 1px;
  background: black;
  width: ${(props) => (props.isCollapsed ? '0%' : '100%')};
  opacity: 1;
  border-radius: 3px;
  height: 6px;
  top: ${(props) => (props.isCollapsed ? '18px' : '0')};
  left:0;
  transition: .25s ease-in-out;
  transform: rotate(0deg);
`;
export const HamburgerItemMiddle = styled.span`
  position: absolute;
  height: 1px;
  background: ${(props) => (props.isCollapsed ? 'white' : 'black')};
  margin-top: 5px;
  width: 100%;
  opacity: 1;
  border-radius: 3px;
  height: 6px;
  top:9px;
  left:0;
  transition: .25s ease-in-out;
  transform: ${(props) => (props.isCollapsed ? 'rotate(45deg)' : 'rotate(0)')};

  &:nth-child(2) {
    transform: ${(props) => (props.isCollapsed ? 'rotate(-45deg)' : 'rotate(0)')};
    background: white;
  }
`;
export const HamburgerItemBottom = styled.span`
  position: absolute;
  height: 1px;
  background: black;
  margin-top: 10px;
  width: ${(props) => (props.isCollapsed ? '0' : '100%')};;
  opacity: 1;
  border-radius: 3px;
  height: 6px;
  top:18px;
  left:0;
  transition: .25s ease-in-out;
`;

export const ToggleMenu = styled.div`
  width:100%;
  height:100vh;
  background:tomato;
  color:white;
  position: absolute;
  top:0;
  transition: .4s ease-in;
  left: ${(props) => (props.isCollapsed ? '0' : '-100%')};
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;

export const ToggleMenuItem = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
  padding: 26px;
  font-size: 24px;
`;

export const ToggleMenuButton = styled.button`
  background: transparent;
  border: 2px solid #F2F3F4;
  border-radius: 4px;
  color: #F2F3F4;
  padding: 15px 30px;
  margin: 20px 0;
`;

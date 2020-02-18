import styled, { css } from 'styled-components';

export const mainSection = styled.section`
  padding:10px;
`;

export const hamburgetButton = styled.button`
  position: relative;
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
export const hamburgerItemTop = styled.span`
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
export const hamburgerItemMiddle = styled.span`
  position: absolute;
  height: 1px;
  background: black;
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
  }
`;
export const hamburgerItemBottom = styled.span`
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

export const toggleMenu = styled.div`
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

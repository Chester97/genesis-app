import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { SideMenuContext } from '../../context/SideMenu';

const AppWrapper = ({ children }) => {
  const { menuOpen } = useContext(SideMenuContext);

  return (
    <S.Wrapper context={menuOpen}>{children}</S.Wrapper>
  );
};

export default AppWrapper;

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

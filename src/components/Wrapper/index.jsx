import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { SideMenuContext } from '../../context/SideMenu';

// Czego wrapper to jest? Nazwa nie jest jednoznaczna i nie wynika z kontekstu znaczeniowego.
const Wrapper = ({ children }) => {
  const { toggleMenu } = useContext(SideMenuContext);

  return (
    <S.Wrapper context={toggleMenu}>{children}</S.Wrapper>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

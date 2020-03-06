import React, { useContext } from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';
import { SideMenuContext } from '../../context/SideMenu';


const Wrapper = (props) => {
  const [context, setContext] = useContext(SideMenuContext);

  return (
    <S.Wrapper context={context}>{props.children}</S.Wrapper>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

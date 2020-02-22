import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const UserDetailsItem = ({ label, value }) => (
  <S.UserDetailsItemContainer>
    <S.UserDetailsItem isLabel>{label}</S.UserDetailsItem>
    <S.UserDetailsItem>{value}</S.UserDetailsItem>
  </S.UserDetailsItemContainer>
);

export default UserDetailsItem;

UserDetailsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

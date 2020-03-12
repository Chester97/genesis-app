import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

// Ta nazwa w zasadzie moglaby byc, ale ponownie tworzy kontekst znaczeniowy (UserDetails),
// mimo ze rodzic tego komponentu to wlasnie UserDetails.

const UserDetailsItem = ({ label, value }) => (
  <S.UserDetailsItemContainer>
    <S.UserDetailsItem isLabel>
      {label}
      :
    </S.UserDetailsItem>
    <S.UserDetailsItem>{value}</S.UserDetailsItem>
  </S.UserDetailsItemContainer>
);

export default UserDetailsItem;

UserDetailsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { renderUserDetailsItem } from './utils';
import UserDetailsItem from './UserDetailsItem/index';
import * as S from './styles';

const UserDetails = () => {
  const userData = useSelector((state) => state.user.userData);
  const [userDetail, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(renderUserDetailsItem(userData));
  }, [userData]);


  return (
    <S.UserDetailsWrapper>
      { userDetail && userDetail.map((item) => (<UserDetailsItem key={item.label} label={item.label} value={item.value} />)) }
    </S.UserDetailsWrapper>
  );
};

export default UserDetails;

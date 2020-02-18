import React from 'react';
import { useSelector } from 'react-redux';
import { renderUserDetailsItem } from './utils';

const UserDetails = () => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <div>
      {() => renderUserDetailsItem(userData) }
    </div>
  );
};

export default UserDetails;

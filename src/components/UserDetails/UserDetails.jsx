import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { renderUserDetailsItem } from './utils';

const UserDetails = () => {
  const userData = useSelector((state) => state.user.userData);
  const [userDetail, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(renderUserDetailsItem(userData));
  }, [userData]);


  return (
    <div>
      CONTENT
      <button type="button" onClick={() => console.log(userDetail)}>klik</button>
      { userDetail && userDetail.map((item, i) => <p key={i}>{item.label}: {item.value}</p>) }
    </div>
  );
};

export default UserDetails;

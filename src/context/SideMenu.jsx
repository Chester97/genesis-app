import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SideMenuContext = createContext();

export const SideMenuProvider = ({ children }) => {
  const [userData, setUserData] = useState(false);

  return (
    <SideMenuContext.Provider value={[userData, setUserData]}>
      {children}
    </SideMenuContext.Provider>
  );
};

SideMenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

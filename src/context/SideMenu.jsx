import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SideMenuContext = createContext();

export const SideMenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const changeMenuState = () => setMenuOpen(!menuOpen);

  return (
    <SideMenuContext.Provider value={{ menuOpen, changeMenuState }}>
      {children}
    </SideMenuContext.Provider>
  );
};

SideMenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

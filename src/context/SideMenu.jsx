import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SideMenuContext = createContext();

export const SideMenuProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  // Zmienna toggleMenu zawiera czasownik, co sugeruje ze to funkcja.
  // Sama zmienna (nie setter) przechowujaca dane nie powinna zawierac czasownika w nazwie.
  // Czyli np. menuOpened, czy cos.

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <SideMenuContext.Provider value={{ toggleMenu, handleToggleMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
};

SideMenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

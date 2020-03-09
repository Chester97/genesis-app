import React from 'react';
import { useParams } from 'react-router-dom';

const Child = () => {

  const { id } = useParams();

  return (
    <div>
      Option:
      {id}
    </div>
  );
};

export default Child;

// Komponent nie powinien byc importowany w stylu Abc/Abc.
// Re-eksport w index.js, albo plik z komponentem nazwac index.js.
// Ewentualnie fraktal: plik Child.jsx, a jego podkomponenty w folderze child (z malej litery).

// Nazwa komponentu Child nic nie mowi.

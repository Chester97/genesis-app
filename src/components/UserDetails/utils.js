// Ta funkcja nic nie renderuje. Plus nie jest jasne co robi i *dlaczego*.
export const renderUserDetailsItem = (itemObject) => {
  const {
    name,
    surname,
    login,
    email,
  } = itemObject;
  const currentUserDetails = {
    name,
    surname,
    login,
    email,
  };
  // Te nazwy zmiennych nic nie mowia.
  const convertedObjects = Object.entries(currentUserDetails);

  const finalObject = convertedObjects.map((arr1) => ({ label: arr1[0], value: arr1[1] }));

  return finalObject;
};
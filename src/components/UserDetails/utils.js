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
  const convertedObjects = Object.entries(currentUserDetails);

  const finalObject = convertedObjects.map((arr1) => ({ label: arr1[0], value: arr1[1] }));

  return finalObject;
};
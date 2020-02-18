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

  return Object.entries(currentUserDetails);
};

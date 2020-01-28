export const httpRequest = async (url, request) => {
  const response = await fetch(url, request());
  const responseData = await response.json();
  return responseData;
};

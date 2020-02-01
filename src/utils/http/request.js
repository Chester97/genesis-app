const REQUEST_CONFIG = {
  crossDomain: true,
  headers: { 'Content-Type': 'application/json' },
};

const createRequestData = (method, body) => ({
  ...REQUEST_CONFIG,
  method,
  body: JSON.stringify(body),
});

export const httpRequest = async (url, method, body) => {
  const response = await fetch(url, createRequestData(method, body));
  const responseData = await response.json();
  return responseData;
};

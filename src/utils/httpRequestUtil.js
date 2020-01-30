const REQUEST_CONFIG = {
  crossDomain: true,
  headers: { 'Content-Type': 'application/json' },
};

export const createRequestData = (method, body) => ({
  ...REQUEST_CONFIG,
  method,
  body: JSON.stringify(body),
});

export const httpRequest = async (url, request) => {
  const response = await fetch(url, request());
  const responseData = await response.json();
  return responseData;
};

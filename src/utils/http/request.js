const createRequestData = (method, body, authToken = null) => {
  const auth = authToken ? { Authorization: `Bearer ${authToken}` } : {};

  return {
    method,
    body: JSON.stringify({ ...body }),
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
  };
};

export const httpRequest = async (url, method, body) => {
  const response = await fetch(url, createRequestData(method, body));
  const responseData = await response.json();
  return responseData;
};


export const httpRequestAuth = async (url, method, body) => {
  const authToken = localStorage.getItem('AccessToken');
  const response = await fetch(url, createRequestData(method, body, authToken));
  const responseData = await response.json();
  return responseData;
};

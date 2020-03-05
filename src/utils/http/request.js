const createRequestData = (method, body = null, authToken = null) => {
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

const createRequestDataGet = (method, authToken = null) => {
  const auth = authToken ? { Authorization: `Bearer ${authToken}` } : {};
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
  };
};

export const httpRequest = async (url, method, body) => {
  try {
    const response = await fetch(url, createRequestData(method, body));
    const responseData = await response.json();
    return responseData;
  } catch (e) {
    return e;
  }
};


export const httpRequestAuth = async (url, method, body = null) => {
  try {
    const authToken = localStorage.getItem('AccessToken');
    let response;
    if (body) {
      response = await fetch(url, createRequestData(method, body, authToken));
    } else {
      response = await fetch(url, createRequestDataGet(method, authToken));
    }
    const responseData = await response.json();
    localStorage.setItem('posts', JSON.stringify(responseData));
    return responseData;
  } catch (e) {
    return e;
  }
};

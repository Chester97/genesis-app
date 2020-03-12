import { getAccessToken } from '../localStorage/index';

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

const setRequestData = (method, authToken = null) => {
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
    const authToken = getAccessToken();
    let response = null; // Mutowalna zmienna, czego latwo uniknac przy funkcjach async + brak wartosci poczatkowej (null to tez wartosc)
    if (body) {
      response = await fetch(url, createRequestData(method, body, authToken));
      return response.json();
    }
    response = await fetch(url, setRequestData(method, authToken));
    return response.json();
  } catch (e) {
    return e;
  }
};

// Przydaloby sie, zeby funkcje mialy popisane JSDocsy, bo nie masz kontroli nad typami argumentow.

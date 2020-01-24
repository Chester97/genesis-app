export const BASE_URL = 'http://localhost:3000/api/';

const REQUEST_CONFIG = {
  crossDomain: true,
  headers: {
    "Content-Type": "application/json"
  },
}

export const createRequestData = (method, body) => ({
  ...REQUEST_CONFIG,
  method,
  body: JSON.stringify(body),
});


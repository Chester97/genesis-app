import { BASE_URL, createRequestData } from './utils';

const REGISTER_URL = `${BASE_URL}user/register`;

export const registerService = {
  registerUser: async (body) => {
    try {
      const response = await fetch(REGISTER_URL, createRequestData('POST', body));
      const responseData = await response.json();
      return responseData;
    } catch (e) {
      return e;
    }
  },
}
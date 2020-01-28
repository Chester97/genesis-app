import { createRequestData } from '../utils/requestUtil';

const REGISTER_URL = `${process.env.REACT_APP_REST_API}user/register`;

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
};

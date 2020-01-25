import { BASE_URL, createRequestData } from './utils';

const LOGIN_URL = `${BASE_URL}user/login`;

export const loginService = {
  loginUser: async (body) => {
    try{
      const response = await fetch(LOGIN_URL, createRequestData('POST', body));
      const responseData = await response.json();
      return responseData;
    }catch(e) {
      return e;
    }
  }
}
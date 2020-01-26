import { createRequestData } from './utils';

const LOGIN_URL = `${process.env.REACT_APP_REST_API}user/login`;

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
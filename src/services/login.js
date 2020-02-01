import { httpRequest } from '../utils/http/request';

const USER_URL = `${process.env.REACT_APP_REST_API}user/`;
const LOGIN_URL = `${USER_URL}login`;
const REGISTER_URL = `${USER_URL}register`;

export const loginService = {
  loginUser: async (body) => {
    try {
      return httpRequest(LOGIN_URL, 'POST', body);
    } catch (e) {
      return e;
    }
  },
  registerUser: (body) => {
    try {
      return httpRequest(REGISTER_URL, 'POST', body);
    } catch (e) {
      return e;
    }
  },
};

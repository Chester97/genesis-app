import { httpRequest } from '../utils/http/request';

const USER_URL = `${process.env.REACT_APP_REST_API}user/`;
const LOGIN_URL = `${USER_URL}login`;
const REGISTER_URL = `${USER_URL}register`;

export const loginService = {
  loginUser: async (body) => {
    try {
      const userLoginResponse = await httpRequest(LOGIN_URL, 'POST', body);
      if (userLoginResponse && !userLoginResponse.message) {
        loginService.saveAccessToken(userLoginResponse.accessToken);
        return userLoginResponse;
      }
      return userLoginResponse;
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
  saveAccessToken: (token) => {
    localStorage.setItem('AccessToken', token);
  },
};

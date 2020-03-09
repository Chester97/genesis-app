import { httpRequest } from '../utils/http/request';

const USER_URL = `${process.env.REACT_APP_REST_API}user/`;
const LOGIN_URL = `${USER_URL}login`;
const REGISTER_URL = `${USER_URL}register`;

// W serwisie o nazwie LoginService spodziewalbym sie, ze bedzie tylko logowanie.
// Tu dzieje sie wiecej rzeczy, np. rejestracja, co sprawia, ze ten serwis zajmuje sie ogolem userem (AuthService? UserService?)

export const loginService = {
  loginUser: async (body) => {
    try {
      const userLoginResponse = await httpRequest(LOGIN_URL, 'POST', body);
      if (userLoginResponse && !userLoginResponse.message) {
        loginService.saveAccessToken(userLoginResponse.accessToken);
        return userLoginResponse; // Ten return jest zbedny.
      }
      return userLoginResponse;
    } catch (e) {
      return e;
    }
  },
  registerUser: async (body) => {
    try {
      return await httpRequest(REGISTER_URL, 'POST', body);
    } catch (e) {
      return e;
    }
  },
  saveAccessToken: (token) => {
    localStorage.setItem('AccessToken', token);
  },
};

import { BASE_URL, createRequestData } from './utils';

const LOGIN_URL = `${BASE_URL}user/login`;

export const loginUser = async (body) => {
  const userResponse = await fetch(LOGIN_URL, createRequestData('POST', body));
  const userData = await userResponse.json();
  return userData;
}
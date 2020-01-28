import { createRequestData } from '../utils/requestUtil';
import { httpRequest } from '../utils/httpUtil';

const REGISTER_URL = `${process.env.REACT_APP_REST_API}user/register`;

export const registerService = {
  registerUser: (body) => {
    try {
      return httpRequest(REGISTER_URL, () => createRequestData('POST', body));
    } catch (e) {
      console.error(e);
    }
  },
};

import { httpRequestAuth } from '../utils/http/request';

const POST_URL = `${process.env.REACT_APP_REST_API}posts`;
const ADD_POST_URL = `${POST_URL}/addPost`;

export const postService = {
  addPost: async (body) => {
    try {
      return await httpRequestAuth(ADD_POST_URL, 'POST', body);
    } catch (e) {
      return e;
    }
  },
};

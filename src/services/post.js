import { httpRequestAuth } from '../utils/http/request';

const POST_URL = `${process.env.REACT_APP_REST_API}posts`;
const ADD_POST_URL = `${POST_URL}/addPost`;
const GET_ALL_POSTS_URL = `${POST_URL}/getPosts`;

export const postService = {
  addPost: async (body) => {
    try {
      return await httpRequestAuth(ADD_POST_URL, 'POST', body);
    } catch (e) {
      return e;
    }
  },
  getAllPosts: async () => {
    try {
      if (localStorage.getItem('posts')) {
        console.log(JSON.parse(localStorage.getItem('posts')));
        return JSON.parse(localStorage.getItem('posts'));
      }
      return await httpRequestAuth(GET_ALL_POSTS_URL, 'GET');
    } catch (e) {
      return e;
    }
  }
};

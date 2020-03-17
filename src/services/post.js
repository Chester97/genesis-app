import { httpRequestAuth } from '../utils/http/request';
import { store } from '../redux/store';
import { POSTS_REALTIME_RECEIVED } from '../redux/posts/action-types';

const POST_URL = `${process.env.REACT_APP_REST_API}posts`;
const ADD_POST_URL = `${POST_URL}/addPost`;
const ADD_COMMENT_URL = `${POST_URL}/addComment`;
const GET_ALL_POSTS_URL = `${POST_URL}/getPosts`;
const GET_ALL_COMMENTS_URL = `${POST_URL}/getComments`;

export const postService = {
  addPost: async (body) => {
    try {
      return await httpRequestAuth(ADD_POST_URL, 'POST', body);
    } catch (e) {
      return e;
    }
  },
  addComment: async (body) => {
    try {
      return await httpRequestAuth(ADD_COMMENT_URL, 'POST', body);
    } catch (e) {
      return e;
    }
  },
  getAllPosts: async () => {
    try {
      return await httpRequestAuth(GET_ALL_POSTS_URL, 'GET');
    } catch (e) {
      return e;
    }
  },
  getAllComments: async () => {
    try {
      return await httpRequestAuth(GET_ALL_COMMENTS_URL, 'GET');
    } catch (e) {
      return e;
    }
  },
};

export function onRealTimePostReceived(post) {
  store.dispatch({ type: POSTS_REALTIME_RECEIVED, payload: post });
}
export function onRealTimeCommentReceived(comment) {
  store.dispatch({ type: 'COMMENTS_REALTIME_RECEIVED', payload: comment });
}

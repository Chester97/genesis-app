import { POSTS_SUCCESS, POSTS_ERROR, POSTS_REQUEST } from './action-types';

const postSuccess = (payload) => ({ type: POSTS_SUCCESS, payload });
const postError = (payload) => ({ type: POSTS_ERROR, payload });
const postRequest = () => ({ type: POSTS_REQUEST });

export { postSuccess, postError, postRequest };

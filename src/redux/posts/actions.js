import { POSTS_SUCCESS, POSTS_ERROR, POSTS_REQUEST, POSTS_REALTIME_PUSH } from './action-types';

const postSuccess = (payload) => ({ type: POSTS_SUCCESS, payload });
const postError = (payload) => ({ type: POSTS_ERROR, payload });
const postRequest = () => ({ type: POSTS_REQUEST });
const postsRealTimePush = (payload) => ({ type: POSTS_REALTIME_PUSH, payload });

export { postSuccess, postError, postRequest, postsRealTimePush };

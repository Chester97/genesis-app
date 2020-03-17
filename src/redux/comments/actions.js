import {
  COMMENTS_SUCCESS,
  COMMENTS_ERROR,
  COMMENTS_REQUEST,
  COMMENTS_REALTIME_PUSH,
} from './action-types';

const commentSuccess = (payload) => ({ type: COMMENTS_SUCCESS, payload });
const commentError = (payload) => ({ type: COMMENTS_ERROR, payload });
const commentRequest = () => ({ type: COMMENTS_REQUEST });
const commentsRealTimePush = (payload) => ({ type: COMMENTS_REALTIME_PUSH, payload });

export {
  commentSuccess,
  commentError,
  commentRequest,
  commentsRealTimePush,
};

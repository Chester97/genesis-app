import { put, call } from 'redux-saga/effects';
import { commentSuccess, commentError, commentsRealTimePush } from './actions';
import { postService } from '../../services/post';


export function* fetchCommentsData() {
  try {
    const response = yield call(postService.getAllComments);
    if (response && !response.message) {
      yield put(commentSuccess(response));
    } else {
      yield put(commentError(response));
    }
  } catch (e) {
    yield put(commentError(e));
  }
}

export function* addCommentRealTime({ payload }) {
  try {
    yield put(commentsRealTimePush(payload));
  } catch (e) {
    console.error(e);
  }
}
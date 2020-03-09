import { put, call } from 'redux-saga/effects';
import { postSuccess, postError, postsRealTimePush } from './actions';
import { postService } from '../../services/post';


export function* fetchPostsData() {
  try {
    const response = yield call(postService.getAllPosts);
    if (response && !response.message) {
      yield put(postSuccess(response));
    } else {
      yield put(postError(response));
    }
  } catch (e) {
    yield put(postError(e));
  }
}

export function* addPostRealTime({ payload }) {
  try {
    yield put(postsRealTimePush(payload));
  } catch (e) {
    console.error(e);
  }
}

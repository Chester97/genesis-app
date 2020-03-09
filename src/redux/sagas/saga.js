import { put, takeEvery, call } from 'redux-saga/effects';
import { loginService } from '../../services/login';
import { postService } from '../../services/post';
import { userLoginError, userLoginSuccess } from '../user/actions';
import { postSuccess, postError, postsRealTimePush } from '../posts/actions';
import { USER_LOGIN_REQUEST } from '../user/acion-types';
import { POSTS_REQUEST, POSTS_REALTIME_RECEIVED } from '../posts/action-types';

function* fetchUserData({ payload }) {
  try {
    const response = yield call(loginService.loginUser, payload);
    if (response && !response.message) {
      yield put(userLoginSuccess(response));
    } else {
      yield put(userLoginError(response));
    }
  } catch (e) {
    yield put(userLoginError(e));
  }
}

function* fetchPostsData() {
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

function* addPostRealTime({ payload }) {
  try {
    yield put(postsRealTimePush(payload));
  } catch (e) {
    console.error(e);
  }
}

function* mySaga() {
  yield takeEvery(POSTS_REQUEST, fetchPostsData);
  yield takeEvery(USER_LOGIN_REQUEST, fetchUserData);
  yield takeEvery(POSTS_REALTIME_RECEIVED, addPostRealTime);
}

export default mySaga;

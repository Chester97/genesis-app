import { put, takeEvery, call } from 'redux-saga/effects';
import { loginService } from '../../services/login';
import { postService } from '../../services/post';
import { userLoginError, userLoginSuccess } from '../user/actions';
import { postSuccess, postError } from '../posts/actions';
import { USER_LOGIN_REQUEST } from '../user/acion-types';
import { POSTS_REQUEST } from '../posts/action-types';

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

function* mySaga() {
  yield takeEvery(POSTS_REQUEST, fetchPostsData);
  yield takeEvery(USER_LOGIN_REQUEST, fetchUserData);
}

export default mySaga;

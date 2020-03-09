import { takeEvery } from 'redux-saga/effects';
import { USER_LOGIN_REQUEST } from '../user/acion-types';
import { POSTS_REQUEST, POSTS_REALTIME_RECEIVED } from '../posts/action-types';
import { fetchPostsData, addPostRealTime } from '../posts/sagas';
import { fetchUserData } from '../user/sagas';

function* mySaga() {
  yield takeEvery(POSTS_REQUEST, fetchPostsData);
  yield takeEvery(USER_LOGIN_REQUEST, fetchUserData);
  yield takeEvery(POSTS_REALTIME_RECEIVED, addPostRealTime);
}

export default mySaga;

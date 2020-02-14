import { put, takeEvery, call } from 'redux-saga/effects';
import { loginService } from '../../services/login';
import { userLoginError, userLoginSuccess } from '../user/actions';
import { USER_LOGIN_REQUEST } from '../user/acion-types';

function* fetchUserData({ payload }) {
  try {
    const response = yield call(loginService.loginUser, payload);
    yield put(userLoginSuccess(response));
    //Zrobic yielda ktory zdispatchuje akcje routingu - history.push
  } catch (e) {
    yield put(userLoginError(e));
  }
}

function* mySaga() {
  yield takeEvery(USER_LOGIN_REQUEST, fetchUserData);
}

export default mySaga;

import { put, call } from 'redux-saga/effects';
import { loginService } from '../../services/userService';
import { userLoginError, userLoginSuccess } from './actions';

export function* fetchUserData({ payload }) {
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
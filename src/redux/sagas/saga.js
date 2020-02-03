import { put, takeEvery, call } from 'redux-saga/effects';
import { loginService } from '../../services/login';
import { updateUser } from '../user/actions';

function* fetchUserData(action) {
  console.log("cossssss")
  console.log(action);
  try {
    const userData = yield call(loginService.loginUser, action.payload);
    console.log("cossssssdsdsdsd")

    yield put({ type: 'USER_DATA_SUCCEEDED', payload: userData });
  } catch (e) {
    yield put({ type: 'USER_DATA_FAILED', message: e.message });
  }
}

function* mySaga() {
  console.log("przed")
  yield takeEvery('USER_DATA_REQUESTED', fetchUserData);
  console.log("po")
}

export default mySaga;

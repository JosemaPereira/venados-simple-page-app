import { put, takeLatest, call } from 'redux-saga/effects';
import * as playersConstants from './constants';
import * as actions from './actions';
import { getPlayersContentRequest } from '../../services';

function* getPlayersContentSaga() {
  try {
    const data = yield call(getPlayersContentRequest);
    yield put(actions.SetPlayersContentReducer(data));
  } catch (e) {
    console.log(e);
  }
}

export function* playersSaga() {
  yield call(getPlayersContentSaga);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import * as matchConstants from './constants';
import { getGamesContentRequest } from '../../services';
import * as actions from './actions';
import { defaultConfig } from '../../providers';

function* getGamesContentSaga() {
  try {
    const { leagues } = defaultConfig;
    yield put(actions.setLeagueReducer(leagues[0]));
    const data = yield call(getGamesContentRequest);
    yield put(actions.setGamesReducer(data));
  } catch (e) {
    console.log(e);
  }
}

function* setLeagueSaga({ payload }) {
  try {
    yield put(actions.setLeagueReducer(payload));
  } catch (e) {
    console.log(e);
  }
}

export function* matchSaga() {
  yield call(getGamesContentSaga);
  yield takeLatest(matchConstants.SET_LEAGE_SAGA, setLeagueSaga);
}

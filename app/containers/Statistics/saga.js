import { put, call } from 'redux-saga/effects';
import { getStatisticsContentRequest } from '../../services';
import * as actions from './actions';

function* getStatisticsContent() {
  try {
    const data = yield call(getStatisticsContentRequest);
    yield put(actions.setStatisticsContentReducer(data));
  } catch (e) {
    console.log(e);
  }
}

export function* statisticsSaga() {
  yield call(getStatisticsContent);
}

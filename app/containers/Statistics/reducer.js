import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as statisticsConstants from './constants';

const initialState = { content: [] };

const setStatistics = (state, { payload }) =>
  produce(state, draft => {
    draft.content = payload;
  });

export const statisticsReducer = produce(
  handleActions(
    {
      [statisticsConstants.SET_STATISTICS_CONTENT_REDUCER]: setStatistics
    },
    initialState
  )
);

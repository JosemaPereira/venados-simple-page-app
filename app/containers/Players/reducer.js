import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as playersConstants from './constants';

const initialState = { content: {} };

const setPlayersContent = (state, { payload }) =>
  produce(state, draft => {
    draft.content = payload;
  });
export const playersReducer = produce(
  handleActions(
    { [playersConstants.SET_PLAYERS_CONTENT_REDUCER]: setPlayersContent },
    initialState
  )
);

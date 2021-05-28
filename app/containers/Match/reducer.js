import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as matchConstants from './constants';

const initialState = { games: [], league: '' };

const setGames = (state, { payload }) =>
  produce(state, draft => {
    draft.games = payload;
  });

const setLeague = (state, { payload }) =>
  produce(state, draft => {
    draft.league = payload;
  });

export const matchReducer = produce(
  handleActions(
    {
      [matchConstants.SET_GAMES_REDUCER]: setGames,
      [matchConstants.SET_LEAGE_REDUCER]: setLeague
    },
    initialState
  )
);

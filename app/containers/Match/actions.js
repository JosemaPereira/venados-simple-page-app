import * as matchConstants from './constants';

// Reducer
export const setGamesReducer = payload => ({
  type: matchConstants.SET_GAMES_REDUCER,
  payload
});

export const setLeagueReducer = payload => ({
  type: matchConstants.SET_LEAGE_REDUCER,
  payload
});

//Saga
const setLeagueHandlerSaga = payload => ({
  type: matchConstants.SET_LEAGE_SAGA,
  payload
});

export const matchBindActions = { setLeagueHandlerSaga };

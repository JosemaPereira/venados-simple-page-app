import _ from 'lodash';

export const matchSelector = state => state.match;
export const leagueSelector = state => state.match.league;

export const gamesSelector = state => {
  const currentLeage = _.get(state, 'match.league');
  const games = _.get(state, 'match.games');
  return games.filter(g => g.league === currentLeage);
};

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { defaultConfig } from '../../providers';

const Match = ({ currentLeague, games, actions: { setLeagueHandlerSaga } }) => {
  const {
    banner: { urlBanner, alt },
    leagues
  } = defaultConfig;
  let currentMonth = '';

  const leagueTabs = () => (
    <div className="tabs">
      <ul>
        {_.map(leagues, league => (
          <li
            className={league === currentLeague ? 'active' : ''}
            key={_.uniqueId()}
          >
            <a
              href="#"
              className="tab"
              onClick={e => {
                e.preventDefault();
                setLeagueHandlerSaga(league);
              }}
            >
              {league}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const monthSeparator = (index, monthItem, id) => {
    if (index === 0) {
      return (
        <div className="match-separator" key={id}>
          <h3>{currentMonth}</h3>
        </div>
      );
    }

    if (monthItem !== currentMonth) {
      currentMonth = monthItem;
      return (
        <div className="match-separator" key={id}>
          <h3>{currentMonth}</h3>
        </div>
      );
    }
    return false;
  };

  return (
    <>
      {leagues && leagues.length > 0 && leagueTabs()}

      <div className="table">
        {_.map(games, (game, index) => {
          if (index === 0) {
            currentMonth = game.month;
          }
          return (
            <>
              {monthSeparator(index, game.month, _.uniqueId())}
              <div className="match-content" key={_.uniqueId()}>
                <div className="calendar">
                  <span className="ico-calendar" />
                  <h3>{game.datetime_parsed}</h3>
                </div>
                <div className="info-match">
                  <img
                    src={game.local ? urlBanner : game.opponent_image}
                    alt={game.local ? alt : game.opponent}
                  />
                  <h2>{`${game.home_score} - ${game.away_score}`}</h2>
                  <img
                    src={!game.local ? urlBanner : game.opponent_image}
                    alt={!game.local ? alt : game.opponent}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

Match.propTypes = {
  actions: PropTypes.object,
  currentLeague: PropTypes.string,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      local: PropTypes.bool,
      opponent: PropTypes.string,
      opponent_image: PropTypes.string,
      datetime: PropTypes.string,
      league: PropTypes.string,
      image: PropTypes.string,
      home_score: PropTypes.number,
      away_score: PropTypes.number,
      datetime_parsed: PropTypes.string,
      month: PropTypes.string
    })
  )
};

export default Match;

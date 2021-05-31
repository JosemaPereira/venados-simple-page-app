/* eslint-disable no-param-reassign */
import { defaultConfig, HttpClient } from '../providers';
import { fullFormat } from './date';
import { getPlayersMock } from '../mocks/players';

export const getPlayersContentRequest = async () => {
  const {
    api: {
      source,
      resource: { players }
    }
  } = defaultConfig;

  let totalPlayers = {};
  try {
    const {
      data: {
        data: { team }
      }
    } = await HttpClient.get(`${source}${players}`, {
      headers: { Accept: 'application/json' }
    });
    totalPlayers = team;
  } catch (err) {
    totalPlayers = getPlayersMock();
  }

  const keys = Object.keys(totalPlayers);

  keys.forEach(k => {
    totalPlayers[k].forEach(item => {
      item.birthday_parse = fullFormat(item.birthday);
    });
  });

  return totalPlayers;
};

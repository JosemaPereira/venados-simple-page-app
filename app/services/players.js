/* eslint-disable no-param-reassign */
import { defaultConfig, HttpClient } from '../providers';
import { fullFormat } from './date';

export const getPlayersContentRequest = async () => {
  const {
    api: {
      source,
      resource: { players }
    }
  } = defaultConfig;
  const {
    data: {
      data: { team }
    }
  } = await HttpClient.get(`${source}${players}`, {
    headers: { Accept: 'application/json' }
  });

  const keys = Object.keys(team);

  keys.forEach(k => {
    team[k].forEach(item => {
      item.birthday_parse = fullFormat(item.birthday);
    });
  });

  return team;
};

import { defaultConfig, HttpClient } from '../providers';
import { dateFormat, monthFormat } from './date';

export const getGamesContentRequest = async () => {
  const {
    api: {
      source,
      resource: { game }
    }
  } = defaultConfig;
  const {
    data: {
      data: { games }
    }
  } = await HttpClient.get(`${source}${game}`, {
    headers: { Accept: 'application/json' }
  });
  const parsed = games.map(g => ({
    ...g,
    datetime_parsed: dateFormat(g.datetime),
    month: monthFormat(g.datetime)
  }));

  parsed.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  return parsed;
};

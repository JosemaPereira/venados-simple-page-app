import { defaultConfig, HttpClient } from '../providers';
import { dateFormat, monthFormat } from './date';
import { getGamesMock } from '../mocks/games';

export const getGamesContentRequest = async () => {
  const {
    api: {
      source,
      resource: { game }
    }
  } = defaultConfig;

  let totalGames = [];
  try {
    const {
      data: {
        data: { games }
      }
    } = await HttpClient.get(`${source}${game}`, {
      headers: { Accept: 'application/json' }
    });
    totalGames = games;
  } catch (err) {
    totalGames = getGamesMock();
  }
  const parsed = totalGames.map(g => ({
    ...g,
    datetime_parsed: dateFormat(g.datetime),
    month: monthFormat(g.datetime)
  }));

  parsed.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  return parsed;
};

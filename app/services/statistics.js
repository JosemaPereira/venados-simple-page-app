import { defaultConfig, HttpClient } from '../providers';
import { getStatisticMock } from '../mocks/statistics';

export const getStatisticsContentRequest = async () => {
  const {
    api: {
      source,
      resource: { statistics }
    }
  } = defaultConfig;
  let fullStatistics = [];
  try {
    const {
      data: {
        data: { statistics: stats }
      }
    } = await HttpClient.get(`${source}${statistics}`, {
      headers: { Accept: 'application/json' }
    });

    fullStatistics = stats;
  } catch (err) {
    fullStatistics = getStatisticMock();
  }

  return fullStatistics;
};

import { defaultConfig, HttpClient } from '../providers';

export const getStatisticsContentRequest = async () => {
  const {
    api: {
      source,
      resource: { statistics }
    }
  } = defaultConfig;
  const {
    data: {
      data: { statistics: stats }
    }
  } = await HttpClient.get(`${source}${statistics}`, {
    headers: { Accept: 'application/json' }
  });

  return stats;
};

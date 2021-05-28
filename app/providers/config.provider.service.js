const mapBannerContent = () => JSON.parse(process.env.REACT_APP_BANNER_INFO);
const mapApiInfo = () => JSON.parse(process.env.REACT_APP_API_INFO);
const mapLeagues = () => JSON.parse(process.env.REACT_APP_LEAGUES);

export const defaultConfig = {
  api: mapApiInfo(),
  banner: mapBannerContent(),
  leagues: mapLeagues()
};

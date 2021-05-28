import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Match } from '../../components/Match';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { matchBindActions } from './actions';
import { matchReducer } from './reducer';
import { matchSaga } from './saga';
import * as matchSelectors from './selectors';

const mapStateToProps = state => ({
  games: matchSelectors.gamesSelector(state),
  currentLeague: matchSelectors.leagueSelector(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(matchBindActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'match', reducer: matchReducer });

const withSaga = injectSaga({ key: 'match', saga: matchSaga });

export const MatchContainer = compose(
  withReducer,
  withSaga,
  withConnect
)(Match);

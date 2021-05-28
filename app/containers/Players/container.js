import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Players } from '../../components/Players';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { playersBindActions } from './actions';
import { playersReducer } from './reducer';
import { playersSaga } from './saga';
import * as playersSelectors from './selectors';

const mapStateToProps = state => ({
  players: playersSelectors.playersSelector(state),
  content: playersSelectors.playersContent(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(playersBindActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'players', reducer: playersReducer });

const withSaga = injectSaga({ key: 'players', saga: playersSaga });

export const PlayersContainer = compose(
  withReducer,
  withSaga,
  withConnect
)(Players);

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Statistics } from '../../components/Statistics';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { statisticsBindActions } from './actions';
import { statisticsReducer } from './reducer';
import { statisticsSaga } from './saga';
import * as statisticsSelectors from './selectors';

const mapStateToProps = state => ({
  statistics: statisticsSelectors.statisticsSelector(state),
  content: statisticsSelectors.statisticsContentSelector(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(statisticsBindActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({
  key: 'statistics',
  reducer: statisticsReducer
});

const withSaga = injectSaga({ key: 'statistics', saga: statisticsSaga });

export const StatisticsContainer = compose(
  withReducer,
  withSaga,
  withConnect
)(Statistics);
